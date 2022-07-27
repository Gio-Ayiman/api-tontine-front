/* tslint:disable */
/* eslint-disable */
import { ApprovisionnementDto } from './approvisionnement-dto';
import { ArticleDto } from './article-dto';
export interface ArticleApprovisionneDto {
  appro?: ApprovisionnementDto;
  article?: ArticleDto;
  id?: number;
  quantite?: number;
}
