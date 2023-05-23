import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from "@nestjs/axios";
import { DuneService } from '../../src/dataecho/duneAPI/dune.service';

import { of } from 'rxjs';

describe('DuneService', () => {
  let service: DuneService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DuneService,
        {
          provide: HttpService,
          useValue: {
            post: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<DuneService>(DuneService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', async () => {
    await service.getDuneData();
    expect(service).toBeDefined();
  });

});
