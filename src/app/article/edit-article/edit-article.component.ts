import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/models/Article';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  editArticleForm!: FormGroup;
  article!: Article;

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
      description: [this.config.data.description, Validators.required],
      prix: [this.config.data.prix, Validators.required]
    })
  }

  submit(): void {
    let data = this.editArticleForm.value;

    this.article = {
      id: this.config.data.id,
      libelle: data.libelle,
      description: data.description,
      prix: data.prix
    }

    this.articleService.update(this.article).subscribe();
    this.messageService.add({severity:'success', summary:'Modification', detail:'Article modifie avec succes'});
  }
}
