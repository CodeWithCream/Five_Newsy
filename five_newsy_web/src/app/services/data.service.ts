import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly articlesController = '/articles';

  constructor(private httpService: HttpService) {}

  async getArticles(): Promise<Article[]> {
    var articlesPage = await this.httpService.get(
      `${this.articlesController}`
      /*using default pagination filter numbers
      pagination is not implementes so I pretend it's ok to show no more then 10 items for showcase purposes*/
    );

    console.log(articlesPage);

    return articlesPage.data;
  }

  async createArticle(article: Article): Promise<Article> {
    return await this.httpService.post(`${this.articlesController}`, article);
  }
}
