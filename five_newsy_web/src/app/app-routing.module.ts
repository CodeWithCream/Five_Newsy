import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'new-article', component: NewArticleComponent },
  { path: 'success', component: SuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
