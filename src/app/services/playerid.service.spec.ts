import { TestBed, inject } from '@angular/core/testing';

import { PlayeridService } from './playerid.service';

describe('PlayeridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayeridService]
    });
  });

  it('should be created', inject([PlayeridService], (service: PlayeridService) => {
    expect(service).toBeTruthy();
  }));
});
