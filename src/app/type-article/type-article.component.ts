import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { TypeArticle } from 'src/models/TypeArticle';
import { TypeArticleService } from '../service/type-article.service';
import { AddTypeArticleComponent } from './add-type-article/add-type-article.component';
import { EditTypeArticleComponent } from './edit-type-article/edit-type-article.component';

@Component({
  selector: 'app-type-article',
  templateUrl: './type-article.component.html',
  styleUrls: ['./type-article.component.css']
})
export class TypeArticleComponent implements OnInit {

  columns!: {}[];
  typeArticles!: TypeArticle[];

  constructor(
    private typeArticleService: TypeArticleService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getColumns();
    this.getTypesArticle();
  }

  openAddTypeArticle(): void {
    this.dialogService.open(AddTypeArticleComponent, {
      header: "Ajouter un type",
      width: "70%"
    })
  }

  openEditTypeArticle(typeArticle: TypeArticle): void {
    this.dialogService.open(EditTypeArticleComponent, {
      header: `Modifier ${typeArticle.libelle}`,
      width: "70%",
      data: typeArticle
    })
  }

  onDelete(id : number): void {
    this.confirmationService.confirm({
      message: "Etes-vous sur de vouloir supprimer cet article ?",
      accept: () => {
        this.messageService.add({severity:'success', summary:'Suppression', detail:'Article supprime avec succes'});
        this.typeArticleService.delete(id).subscribe(() => this.getTypesArticle())
      }
    })
  }
  search(form: any): void {
    this.typeArticleService.search(form.key).subscribe(
      (data: TypeArticle[]) => this.typeArticles = data
    )
  }

  getTypesArticle(): void {
    this.typeArticleService.getAll().subscribe(
      (data: TypeArticle[]) => this.typeArticles = data
    );
  }

  getColumns(): void {
    this.columns = [
      {
        field: 'libelle',
        header: 'Libelle'
      },
      {
        field: 'description',
        header: 'Description'
      }
    ]
  }


}
