import { DuneService } from '../../src/dataecho/duneAPI/dune.service';

describe('DuneService', () => {
  let service: DuneService;

  it('should be defined', async () => {
    await service.getDuneData();
    expect(service).toBeDefined();
  });
});
