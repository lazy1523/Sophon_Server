import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  SerializeOptions,
} from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateWaitlistDto } from './dto/createWailist.dto';

@ApiTags('waitlist')
@Controller({
  path: 'waitlist',
  version: '1',
})
export class WaitlistController {
  constructor(private readonly waitlistService: WaitlistService) {}

  @Post('create')
  @HttpCode(HttpStatus.OK)
  create(@Body() createWaitlist: CreateWaitlistDto) {
    return this.waitlistService.create(createWaitlist);
  }
}
