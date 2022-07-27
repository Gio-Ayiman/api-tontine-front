/* tslint:disable */
/* eslint-disable */
import { ArticleAgenceDto } from './article-agence-dto';
export interface AgenceDto {
  RIBCompteDepot?: string;
  articleAgences?: Array<ArticleAgenceDto>;
  codeAgence?: string;
  id?: number;
  name?: string;
  statut?: boolean;
}
