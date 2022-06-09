import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly articlesController = '/articles';

  constructor(private httpService: HttpService) {}

  async getArticles(): Promise<Article[]> {
    return this.httpService.get('${this.articlesController}');
  }

  createArticle(article: Article): Observable<Article> {
    throw new Error('not implemented');
  }
}
