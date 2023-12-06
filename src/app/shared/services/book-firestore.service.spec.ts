import { TestBed } from '@angular/core/testing';

import { BookFirestoreService } from './book-firestore.service';

describe('BookFirestoreService', () => {
  let service: BookFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
