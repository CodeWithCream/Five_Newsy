import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-article-list',
  templateUrl: './my-article-list.component.html',
  styleUrls: ['./my-article-list.component.css'],
})
export class MyArticleListComponent implements OnInit {
  readonly authorId: number = environment.userData.userId;
  articles: Article[];

  constructor(private dataService: DataService) {
    this.articles = [];
  }

  async ngOnInit() {
    this.articles = await this.dataService.getArticlesByAuthor(this.authorId);
  }

  async articleDeleted(id: number) {
    await this.dataService.deleteArticle(id).then(() => {
      this.ngOnInit();
    });
  }
}
