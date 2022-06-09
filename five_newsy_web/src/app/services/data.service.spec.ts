import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Article } from '../model/article';

import { DataService } from './data.service';

describe('DataService', () => {
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    dataService = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  it('should return data from the file', (done: DoneFn) => {
    dataService.getArticles().subscribe((data: Article[]) => {
      expect(data.length).toEqual(5);
      done();
    });
  });
});
