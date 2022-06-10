import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ErrorComponent } from './components/error/error.component';
import { MyArticleListComponent } from './components/my-article-list/my-article-list.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'new-article', component: NewArticleComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'my-article-list', component: MyArticleListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
