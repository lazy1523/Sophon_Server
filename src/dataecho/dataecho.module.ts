import { Module } from '@nestjs/common';
import { WaitlistService } from './waitlist/waitlist.service';
import { WaitlistController } from './waitlist/wailist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaitList } from './waitlist/entities/waitlist.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { ResendService } from 'src/resend/resend.service';
import { HttpModule } from '@nestjs/axios';
import { DuneService } from './duneAPI/dune.service';

@Module({
  imports: [TypeOrmModule.forFeature([WaitList]),HttpModule],
  controllers: [WaitlistController],
  providers: [IsExist, IsNotExist, WaitlistService, ResendService,DuneService],
  exports: [WaitlistService],
})
export class DataEchoModule {}
