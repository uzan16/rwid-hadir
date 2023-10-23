import { HttpService } from '@nestjs/axios';
import { ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { IPGeoLocationDto } from './dto/ipgeolocation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Presensi } from './entities/presensi.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(Presensi) private presensiRepository: Repository<Presensi>
  ) {}

  async report(date: string) {
    if (!date) {
      date = (new Date()).toISOString().substring(0, 10);
    }
    const data = await this.presensiRepository.find({
      where: {
        date
      }
    });
    
    return data.map(x => x.username).join('\r\n');
  }

  async doProcess(ip: string, username: string) {
    const API_KEY = process.env.GEO_API_KEY;
    const url = `https://api.ipgeolocation.io/timezone?apiKey=${API_KEY}&ip=${ip}`;
    const {data, status} = await firstValueFrom(this.httpService.get<IPGeoLocationDto>(url));
    const {date, time_24: time} = data;
    const hour = Number(time.substring(0, 2));
    if (hour < 3 || hour >= 6) {
      throw new ForbiddenException({message: "Please send a request between 3am - 5am!"});
    }
    const obj = await this.presensiRepository.findOneBy({
      username,
      date
    });
    
    if (obj) {
      return this.presensiRepository.update({
        username,
        date
      }, {
        time
      });
    }
    const newData = this.presensiRepository.create({
      date,
      time,
      username
    });
    return this.presensiRepository.insert(newData);
  }
}
