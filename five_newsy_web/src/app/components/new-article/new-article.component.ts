import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
})
export class NewArticleComponent implements OnInit {
  article: Article;

  constructor(private dataService: DataService, private router: Router) {
    this.article = {
      id: 0,
      title: '',
      text: '',
    };
  }

  ngOnInit(): void {}

  onSubmit() {
    this.dataService.createArticle(this.article).then(
      (success) =>
        this.router.navigate(['success'], {
          state: {
            message: 'Thank you for creating a new article!',
            backRoute: '/my-article-list',
            buttonText: 'Back to my articles',
          },
        }),
      (error) =>
        this.router.navigate(['error'], {
          state: {
            article: this.article,
          },
        })
    );
  }
}
