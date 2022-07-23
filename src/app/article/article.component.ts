import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Article } from 'src/models/Article';
import { ArticleService } from '../service/article.service';
import { AddArticleComponent } from './add-article/add-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
// import { Article } from 'src/classes/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles!: Article[];
  columns!: {}[];

  constructor(
    private dialogService: DialogService,
    private articleService: ArticleService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getArticles();
    this.getColums();
  }

  openAddArticle(): void {
    const ref = this.dialogService.open(AddArticleComponent, {
      header: 'Ajouter un nouvel article',
      width: '70%'
    })

    // ref.close(() => {
    //   this.getArticles();
    // })
  }

  openEditArticle(article: Article): void {
    this.dialogService.open(EditArticleComponent, {
      header: `Modifier ${article.libelle}`,
      width: '70%',
      data: article
    })
  }

  getArticles(): void {
    this.articleService.getAll().subscribe(
      data => this.articles = data
    )
  }

  search(form: any): void {
    this.articleService.search(form.key).subscribe(
      (data: Article[]) => this.articles = data
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
        field: "prix",
        header: "Prix"
      },
    ]
  }

}
