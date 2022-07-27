
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './pages/article/article.component';
import { CardModule } from 'primeng/card'
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { TypeArticleComponent } from './pages/type-article/type-article.component';
import { StockComponent } from './pages/stock/stock.component';
import { LoginComponent } from './login/login.component';

import { NavBarComponent } from './nav-bar/nav-bar.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAgenceComponent } from './pages/agence/edit-agence/edit-agence.component';
import { EditArticleComponent } from './pages/article/edit-article/edit-article.component';
import { AddArticleComponent } from './pages/article/add-article/add-article.component';
import { EditTypeArticleComponent } from './pages/type-article/edit-type-article/edit-type-article.component';
import { AddTypeArticleComponent } from './pages/type-article/add-type-article/add-type-article.component';
import { KeycloakService } from './service/keycloak.service';
import { AgenceComponent } from './pages/agence/agence.component';
import { AddAgenceComponent } from './pages/agence/add-agence/add-agence.component';
import { ApiModule } from './api/api.module';
import { environment } from 'src/environments/environment';

// export function kcFactory(kcSecurity: KeycloakService){
//   return () => kcSecurity.init();
// }
@NgModule({
  declarations: [
    EditAgenceComponent,
    StockComponent,
    AddAgenceComponent,
    AppComponent,
    AgenceComponent,
    ArticleComponent,
    TypeArticleComponent,
    LoginComponent,
    NavBarComponent,
    EditArticleComponent,
    AddArticleComponent,
    EditTypeArticleComponent,
    AddTypeArticleComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    DropdownModule,
    HttpClientModule,
    InputTextModule,
    DynamicDialogModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    ReactiveFormsModule,
    ApiModule.forRoot({rootUrl: `${environment.URL}`}),
    AppRoutingModule
  ],
  providers: [
    DialogService,
    MessageService,
    ConfirmationService,

    // { provide: APP_INITIALIZER, deps: [KeycloakService], useFactory: kcFactory, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
