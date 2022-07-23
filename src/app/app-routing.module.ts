import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenceComponent } from './agence/agence.component';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import { TypeArticleComponent } from './type-article/type-article.component';

const routes: Routes = [
  { path: "article", component: ArticleComponent },
  { path: "agence", component: AgenceComponent },
  { path: "type-article", component: TypeArticleComponent },
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
