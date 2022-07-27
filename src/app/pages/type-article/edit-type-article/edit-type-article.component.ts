import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TypeArticleDto } from 'src/app/api/models';
import { TypeArticleService } from 'src/app/service/type-article.service';

@Component({
  selector: 'app-edit-type-article',
  templateUrl: './edit-type-article.component.html',
  styleUrls: ['./edit-type-article.component.css']
})
export class EditTypeArticleComponent implements OnInit {

  editTypeArticleForm!: FormGroup;
  typeArticle!: TypeArticleDto;

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
      description: [this.config.data.description]
    })
  }

  submit(): void {
    let data = this.editTypeArticleForm.value;

    this.typeArticle = {
      libelle: data.libelle,
      description: data.description
    }

    this.typeArticleService.update(this.config.data.id, this.typeArticle).subscribe();
    this.messageService.add({severity:'success', summary:'Modification', detail:'Type-Article modifie avec succes'});
  }

}
