import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { TypeArticleDto } from '../api/models';
import { TypeArticleResourceService } from '../api/services';

@Injectable({
  providedIn: 'root'
})
export class TypeArticleService {

  constructor(private typeArticleService: TypeArticleResourceService) { }

  create(typeArticle: TypeArticleDto): Observable<TypeArticleDto> {
      return this.typeArticleService.apiTypeArticleCreatePost({body: typeArticle});
  }

  getAll(): Observable<TypeArticleDto[]> {
      return this.typeArticleService.apiTypeArticleListGet();
  }

  getOne(id: number): Observable<TypeArticleDto>{
      return this.typeArticleService.apiTypeArticleGetIdGet({id: id});
  }

  search(key: string): Observable<TypeArticleDto[]>{
      return this.typeArticleService.apiTypeArticleSearchLibelleGet({libelle: key});
  }

  delete(typeArticleId: number): Observable<TypeArticleDto> {
      return this.typeArticleService.apiTypeArticleDeleteIdDelete({id: typeArticleId});
  }

  update(typeArticleUpdatedId: number, typeArticle: TypeArticleDto): Observable<TypeArticleDto> {
      return this.typeArticleService.apiTypeArticleUpdateIdPut({
        id: typeArticleUpdatedId,
        body: typeArticle
      })
  }
}
