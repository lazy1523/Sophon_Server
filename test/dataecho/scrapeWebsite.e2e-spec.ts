import { Test, TestingModule } from '@nestjs/testing';
// import {inspect} from 'util'

import { ScraperService } from '../../src/dataecho/duneAPI/scraper.Service';

describe('ScraperService', () => {
  let service: ScraperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScraperService],
    }).compile();

    service = module.get<ScraperService>(ScraperService);
  });
  it('should be defined', async () => {
    const re= await service.scrapeWebsite();
    console.log(re);

  },600000);
});
