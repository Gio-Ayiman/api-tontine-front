import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ArticleDto, TypeArticleDto } from 'src/app/api/models';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  editArticleForm!: FormGroup;
  article!: ArticleDto;
  typeArticle!: TypeArticleDto;

  constructor(
    private fb: FormBuilder,
    public config: DynamicDialogConfig,
    private articleService: ArticleService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.editArticleForm = this.fb.group({
      libelle: [this.config.data.libelle, Validators.required],
      description: [this.config.data.description],
      prix: [this.config.data.prix, Validators.required]
    })
  }

  submit(): void {
    let data = this.editArticleForm.value;

    this.article = {
      libelle: data.libelle,
      description: data.description,
      prix: data.prix,
      quantiteDisponible: data.quantite, 
      typeArticle: this.typeArticle
    }

    this.articleService.update(this.config.data.id, this.article).subscribe();
    this.messageService.add({severity:'success', summary:'Modification', detail:'Article modifie avec succes'});
  }
}
