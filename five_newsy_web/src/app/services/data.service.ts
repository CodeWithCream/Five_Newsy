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
  readonly authorsControlles = '/authors';

  /*pagination is not implemented so all items are returned in one page and used as a list */
  readonly pageNumber = 1;
  readonly pageSize = 100;

  constructor(private httpService: HttpService) {}

  async getArticles(): Promise<Article[]> {
    var articlesPage = await this.httpService.get(
      `${this.articlesController}`,
      {
        pagenumber: this.pageNumber,
        pageSize: this.pageSize,
      }
    );

    console.log(articlesPage);

    return articlesPage.data;
  }

  async getArticlesByAuthor(authorId: number): Promise<Article[]> {
    var articlesPage = await this.httpService.get(
      `${this.authorsControlles}/${authorId}/articles`
    );

    console.log(articlesPage);

    return articlesPage;
  }

  async createArticle(article: Article): Promise<Article> {
    return await this.httpService.post(`${this.articlesController}`, article);
  }

  async deleteArticle(id: number): Promise<number>{
    return await this.httpService.delete(`${this.articlesController}/${id}`);
  }
}
