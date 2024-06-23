import { TestBed } from '@angular/core/testing';

import { CommentTestServiceService } from './comment-test-service.service';

describe('CommentTestServiceService', () => {
  let service: CommentTestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentTestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
