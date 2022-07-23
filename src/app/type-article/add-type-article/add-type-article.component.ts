import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TypeArticleService } from 'src/app/service/type-article.service';
import { TypeArticle } from 'src/models/TypeArticle';

@Component({
  selector: 'app-add-type-article',
  templateUrl: './add-type-article.component.html',
  styleUrls: ['./add-type-article.component.css']
})
export class AddTypeArticleComponent implements OnInit {

  addTypeArticleForm!: FormGroup;
  typeArticles!: TypeArticle;


  constructor(
    private fb: FormBuilder,
    private typeArticleService: TypeArticleService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.addTypeArticleForm = this.fb.group({
      libelle: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  submit(): void {
    let data = this.addTypeArticleForm.value;

    this.typeArticles = data;

    this.typeArticleService.create(this.typeArticles).subscribe();
    this.messageService.add({severity:'success', summary:'Enregistrement', detail:'Type-Article enregistre avec succes'});

    this.addTypeArticleForm.reset();
    // this.router.navigateByUrl('/agence');
  }
}
