import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgenceResourceService } from '../api/services';
import { AgenceDto } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  
  constructor(
    private agenceService: AgenceResourceService
  ) { }

  create(agence: AgenceDto): Observable<AgenceDto> {
    return this.agenceService.apiAgenceCreatePost({
      body: agence
    });
  }

  getAll(): Observable<AgenceDto[]> {
    return this.agenceService.apiAgenceListGet();
  }

  getOne(id: number): Observable<AgenceDto>{
    return this.agenceService.apiAgenceGetIdGet({id: id});
  }

  search(key: string): Observable<AgenceDto[]>{
    return this.agenceService.apiAgenceSearchNameGet({name: key});
  }

  delete(agenceId: number): Observable<AgenceDto> {
    return this.agenceService.apiAgenceDeleteIdDelete({id: agenceId});
  }

  update(agenceId: number, agence: AgenceDto): Observable<AgenceDto> {
    return this.agenceService.apiAgenceUpdateIdPut({
      id: agenceId,
      body: agence
    })
  }

  setArticle(articleId: number): Observable<void> {
    return this.agenceService.apiAgenceAddArticleIdPut({
      id: articleId
    });
  }
}
