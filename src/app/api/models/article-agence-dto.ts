/* tslint:disable */
/* eslint-disable */
import { AgenceDto } from './agence-dto';
import { ArticleAgenceApprovisionneDto } from './article-agence-approvisionne-dto';
import { ArticleDto } from './article-dto';
export interface ArticleAgenceDto {
  agence?: AgenceDto;
  article?: ArticleDto;
  articleAgenceApprovisionnes?: Array<ArticleAgenceApprovisionneDto>;
  id?: number;
  prix?: number;
  quantite?: number;
  seuil?: number;
}
