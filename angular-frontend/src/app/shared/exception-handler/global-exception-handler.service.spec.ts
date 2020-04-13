import { TestBed } from '@angular/core/testing';

import { GlobalExceptionHandlerService } from './global-exception-handler.service';

describe('GlobalExceptionHandlerService', () => {
  let service: GlobalExceptionHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalExceptionHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
