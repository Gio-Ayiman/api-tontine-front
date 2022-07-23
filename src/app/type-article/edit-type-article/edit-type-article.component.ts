import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TypeArticleService } from 'src/app/service/type-article.service';
import { TypeArticle } from 'src/models/TypeArticle';

@Component({
  selector: 'app-edit-type-article',
  templateUrl: './edit-type-article.component.html',
  styleUrls: ['./edit-type-article.component.css']
})
export class EditTypeArticleComponent implements OnInit {

  editTypeArticleForm!: FormGroup;
  typeArticle!: TypeArticle;

  constructor(
    private fb: FormBuilder,
    public config: DynamicDialogConfig,
    private typeArticleService: TypeArticleService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.editTypeArticleForm = this.fb.group({
      libelle: [this.config.data.libelle, Validators.required],
      description: [this.config.data.description, Validators.required]
    })
  }

  submit(): void {
    let data = this.editTypeArticleForm.value;

    this.typeArticle = {
      id: this.config.data.id,
      libelle: data.libelle,
      description: data.description
    }

    this.typeArticleService.update(this.typeArticle).subscribe();
    this.messageService.add({severity:'success', summary:'Modification', detail:'Type-Article modifie avec succes'});
  }

}
