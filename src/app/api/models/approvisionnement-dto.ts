/* tslint:disable */
/* eslint-disable */
import { ArticleApprovisionneDto } from './article-approvisionne-dto';
export interface ApprovisionnementDto {
  dateAppro?: string;
  etat?: string;
  id?: number;
  items?: Array<ArticleApprovisionneDto>;
}
