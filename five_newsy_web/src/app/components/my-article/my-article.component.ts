import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/model/article';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-my-article',
  templateUrl: './my-article.component.html',
  styleUrls: ['./my-article.component.css'],
})
export class MyArticleComponent implements OnInit {
  @Input() article!: Article;
  @Output() articleDeleted = new EventEmitter<number>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  async deleteArticle() {
    this.articleDeleted.emit(this.article.id);
  }  
}
