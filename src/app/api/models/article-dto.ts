/* tslint:disable */
/* eslint-disable */
import { ArticleAgenceDto } from './article-agence-dto';
import { ArticleApprovisionneDto } from './article-approvisionne-dto';
import { TypeArticleDto } from './type-article-dto';
export interface ArticleDto {
  articleAgence?: ArticleAgenceDto;
  articleApprovisionne?: Array<ArticleApprovisionneDto>;
  description?: string;
  id?: number;
  libelle?: string;
  prix?: number;
  quantiteDisponible?: number;
  typeArticle?: TypeArticleDto;
}
