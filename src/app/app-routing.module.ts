import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AgenceComponent } from './pages/agence/agence.component';
import { ArticleComponent } from './pages/article/article.component';
import { StockComponent } from './pages/stock/stock.component';
import { TypeArticleComponent } from './pages/type-article/type-article.component';

const routes: Routes = [
  { path: "article", component: ArticleComponent },
  { path: "agence", component: AgenceComponent },
  { path: "type-article", component: TypeArticleComponent },
  { path: "stock", component: StockComponent},
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
