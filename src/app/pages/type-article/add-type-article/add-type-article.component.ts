import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TypeArticleDto } from 'src/app/api/models';
import { TypeArticleService } from 'src/app/service/type-article.service';

@Component({
  selector: 'app-add-type-article',
  templateUrl: './add-type-article.component.html',
  styleUrls: ['./add-type-article.component.css']
})
export class AddTypeArticleComponent implements OnInit {

  addTypeArticleForm!: FormGroup;
  typeArticles!: TypeArticleDto;


  constructor(
    private fb: FormBuilder,
    private typeArticleService: TypeArticleService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.addTypeArticleForm = this.fb.group({
      libelle: ['', Validators.required],
      description: ['']
    })
  }

  submit(): void {
    let data = this.addTypeArticleForm.value;

    this.typeArticles = {
      libelle: data.libelle,
      description: data.description
    };

    console.log(this.typeArticles);
    
    this.typeArticleService.create(this.typeArticles).subscribe();
    this.messageService.add({severity:'success', summary:'Enregistrement', detail:'Type-Article enregistre avec succes'});

    this.addTypeArticleForm.reset();
    this.router.navigateByUrl('/agence');
  }
}
