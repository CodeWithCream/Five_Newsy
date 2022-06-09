import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles: Article[];

  constructor(private dataService: DataService) {
    this.articles = [];
  }

  async ngOnInit() {
    this.articles = await this.dataService.getArticles();
  }
}
