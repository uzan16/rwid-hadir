import { Controller, Get, HttpStatus, Param, Post, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { Presensi } from './entities/presensi.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiQuery({
    name: "date",
    type: String,
    required: false
  })
  @Get('/report')
  report(@Query('date') date?: string) {
    return this.appService.report(date);
  }

  @Post('/hadir/:username')
  @ApiOkResponse()
  async hadir(
    @Param('username') username: string, 
    @Req() request: Request, 
    @Res({ passthrough: true }) response: Response
  ) {
    await this.appService.doProcess("36.74.94.190" ?? request.ip, username);
    return response.status(HttpStatus.OK).send({message: 'Success'});
  }
}
