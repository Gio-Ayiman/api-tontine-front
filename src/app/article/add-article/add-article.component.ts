import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/models/Article';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  addArticleForm!: FormGroup;
  articles!: Article;


  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.addArticleForm = this.fb.group({
      libelle: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', Validators.required]
    })
  }

  submit(): void {
    let data = this.addArticleForm.value;

    this.articles = data;

    this.articleService.create(this.articles).subscribe();
    this.messageService.add({severity:'success', summary:'Enregistrement', detail:'Article enregistre avec succes'});

    this.addArticleForm.reset();
    // this.router.navigateByUrl('/agence');
  }

}
