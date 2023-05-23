import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResendService } from 'src/resend/resend.service';
import { Repository } from 'typeorm';
import { CreateWaitlistDto } from './dto/createWailist.dto';
import { WaitList } from './entities/waitlist.entity';

@Injectable()
export class WaitlistService {
  constructor(
    @InjectRepository(WaitList)
    private waitlistRepository: Repository<WaitList>,
    private readonly resendService: ResendService,
  ) {}

  public async create(createWaitlist: CreateWaitlistDto): Promise<WaitList> {
    // 先查询表内是否有该邮箱
    const db_wailist: WaitList = await this.waitlistRepository
      .createQueryBuilder('waitlist')
      .where('waitlist.email = :email', { email: createWaitlist.email })
      .getOne();
    if (db_wailist) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          errors: {
            email: 'email already exists',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const waitlist = new WaitList();
    waitlist.email = createWaitlist.email;
    await this.waitlistRepository.save(waitlist);
    const subject = 'DataEcho Waitlist';
    const html = `Thank you for your interest in DataEcho. We will give priority consideration to your sequence.`;
    await this.resendService.sendEmail(createWaitlist.email, subject, html);
    return waitlist;
  }
}
