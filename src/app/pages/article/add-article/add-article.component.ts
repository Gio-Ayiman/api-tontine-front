import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs';
import { ArticleDto, TypeArticleDto } from 'src/app/api/models';
import { ArticleService } from 'src/app/service/article.service';
import { TypeArticleService } from 'src/app/service/type-article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  
  addArticleForm!: FormGroup;
  articles!: ArticleDto;
  typeArticles!: TypeArticleDto[];
  


  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private messageService: MessageService,
    private typeArticleService: TypeArticleService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getTypesArticles();
  }

  getTypesArticles(): void {
    this.typeArticleService.getAll().pipe(
      map( (data) => {return data}
       )
       
    ).subscribe(
      (data: TypeArticleDto[]) => {this.typeArticles = data;
      console.log(this.typeArticles);}
    )
      
  }

  initForm(): void {
    this.addArticleForm = this.fb.group({
      libelle: ['', Validators.required],
      description: [''],
      prix: ['', Validators.required],
      quantite: ['', Validators.required], 
      typeArticle: ['', Validators.required]
    })
  }

  submit(): void {
    let dataForm = this.addArticleForm.value
    let typeArticle = dataForm.typeArticle;

    this.typeArticleService.getOne(typeArticle).subscribe(
      (data: TypeArticleDto) => {
        this.messageService.add({severity:'success', summary:'Enregistrement', detail:'Article enregistre avec succes', life:1000});
        this.articles = {
            libelle: dataForm.libelle,
            description: dataForm.description,
            prix: dataForm.prix,
            quantiteDisponible: dataForm.quantite,
            typeArticle: data
        };
        console.log(this.articles);
        this.articleService.create(this.articles).subscribe();
      }
    )
    this.addArticleForm.reset();
  }

}
