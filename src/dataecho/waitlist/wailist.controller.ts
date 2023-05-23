import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { DuneService } from '../duneAPI/dune.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateWaitlistDto } from './dto/createWailist.dto';

@ApiTags('waitlist')
@Controller({
  path: 'waitlist',
  version: '1',
})
export class WaitlistController {
  constructor(
    private readonly waitlistService: WaitlistService,
    private readonly duneService: DuneService,
  ) {}

  @Post('create')
  @HttpCode(HttpStatus.OK)
  create(@Body() createWaitlist: CreateWaitlistDto) {
    return this.waitlistService.create(createWaitlist);
  }

  @Post('getDuneData')
  @HttpCode(HttpStatus.OK)
  async getDuneData() {
    return await this.duneService.getDuneData();
  }
}
