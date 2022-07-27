/* tslint:disable */
/* eslint-disable */
import { ApprovisionnementDto } from './approvisionnement-dto';
import { ArticleAgenceDto } from './article-agence-dto';
export interface ArticleAgenceApprovisionneDto {
  approvisionnement?: ApprovisionnementDto;
  articleAgence?: ArticleAgenceDto;
  id?: number;
  quantite?: number;
}
