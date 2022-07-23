import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CardModule } from 'primeng/card'
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AgenceComponent } from './agence/agence.component';
import { TypeArticleComponent } from './type-article/type-article.component';
import { StockComponent } from './stock/stock.component';
import { LoginComponent } from './login/login.component';
import { AddAgenceComponent } from './agence/add-agence/add-agence.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAgenceComponent } from './agence/edit-agence/edit-agence.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { EditTypeArticleComponent } from './type-article/edit-type-article/edit-type-article.component';
import { AddTypeArticleComponent } from './type-article/add-type-article/add-type-article.component';
import { KeycloakService } from './service/keycloak.service';

export function kcFactory(kcSecurity: KeycloakService){
  return () => kcSecurity.init();
}
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AgenceComponent,
    TypeArticleComponent,
    StockComponent,
    LoginComponent,
    AddAgenceComponent,
    NavBarComponent,
    EditAgenceComponent,
    EditArticleComponent,
    AddArticleComponent,
    EditTypeArticleComponent,
    AddTypeArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    HttpClientModule,
    InputTextModule,
    DynamicDialogModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    AppRoutingModule
  ],
  providers: [
    DialogService,
    MessageService,
    ConfirmationService,

    { provide: APP_INITIALIZER, deps: [KeycloakService], useFactory: kcFactory, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
