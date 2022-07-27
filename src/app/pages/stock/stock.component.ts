import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownFilterOptions } from 'primeng/dropdown';
import { ApprovisionnementDto, ArticleApprovisionneDto, ArticleDto } from 'src/app/api/models';
import { ArticleService } from 'src/app/service/article.service';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  articles!: ArticleDto[];
  stock: ApprovisionnementDto = {};
  ap: ArticleApprovisionneDto = {};
  apTable: ArticleApprovisionneDto[] = [];

  columns!: {}[];


  articlesApproForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    this.getArticle();
    this.getColumns();
    this.initForm();
  }

  initForm(): void {
    this.articlesApproForm = this.fb.group({
      articleId: ['', Validators.required],
      quantite: ['100',Validators.required]
    })
  }

  getArticle(): void {
    this.articleService.getAll().subscribe(
      (data: ArticleDto[]) => this.articles = data
    )
  }

  add(): void {
    let data = this.articlesApproForm.value;
    let article: ArticleDto;

    this.articleService.getOne(data.articleId).subscribe (
      value => {
        article = value;

        this.ap = {
          article: article,
          quantite: data.quantite
        }

        this.apTable.push(this.ap);
      } 
    )

    
  }

  save(): void {
    let date = new Date();
    console.log(this.ap);
    this.stock = {
      etat: 'off',
      dateAppro: date.toJSON(),
      items: this.apTable
    }
    console.log(this.stock);
    
    this.stockService.create(this.stock).subscribe();
  }


  getColumns(): void {
    this.columns = [
      {
        field: 'article',
        header: "Article"
      },
      {
        field: 'quantite',
        header: "Quantite"
      }
    ]
  }
}
