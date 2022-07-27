import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ArticleDto } from 'src/app/api/models';
import { ArticleService } from 'src/app/service/article.service';
import { AddArticleComponent } from './add-article/add-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles!: ArticleDto[];
  columns!: {}[];

  constructor(
    private dialogService: DialogService,
    private articleService: ArticleService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getArticles();
    this.getColums();
  }

  openAddArticle(): void {
    const ref =  this.dialogService.open(AddArticleComponent, {
      header: 'Ajouter un nouvel article',
      dismissableMask: true,
      width: '70%'
    })
  }

  openEditArticle(article: ArticleDto): void {
    const ref = this.dialogService.open(EditArticleComponent, {
      header: `Modifier ${article.libelle}`,
      width: '70%',
      dismissableMask: true,
      data: article
    })
  }

  getArticles(): void {
    this.articleService.getAll().subscribe(
      (data: ArticleDto[]) => this.articles = data
    )
  }

  search(form: any): void {
    this.articleService.search(form.key).subscribe(
      (data: ArticleDto[]) => this.articles = data
    )
  }

  onDelete(articleId: number): void {
    this.confirmationService.confirm({
      message: "Etes-vous sur de vouloir supprimer cet article ?",
      accept: () => {
        this.messageService.add({severity:'success', summary:'Suppression', detail:'Article supprime avec succes'});
        this.articleService.delete(articleId).subscribe(() => this.getArticles() );
      }
    })
  }

  getColums(): void {
    this.columns = [
      {
        field: "libelle",
        header: "Libelle"
      },
      {
        field: "description",
        header: "Description"
      },
      {
        field: "quantite",
        header: "Quantite"
      },
      {
        field: "prix",
        header: "Prix"
      },
    ]
  }

}
