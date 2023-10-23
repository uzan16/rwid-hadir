import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Presensi {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    username: string;

    @ApiProperty()
    @Column()
    time: string;

    @ApiProperty()
    @Column()
    date: string;
}
