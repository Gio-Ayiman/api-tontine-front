import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeArticle } from 'src/models/TypeArticle';

@Injectable({
  providedIn: 'root'
})
export class TypeArticleService {
  url: string  = environment.URL + 'typeArticle/';

  constructor(private http: HttpClient) { }

  create(typeArticle: TypeArticle): Observable<TypeArticle> {
      return this.http.post<TypeArticle>(this.url + 'create', typeArticle);
  }

  getAll(): Observable<TypeArticle[]> {
      return this.http.get<TypeArticle[]>(this.url + 'list');
  }

  getOne(id: number): Observable<TypeArticle>{
      return this.http.get<TypeArticle>(this.url + 'get/' + id);
  }

  search(key: string): Observable<TypeArticle[]>{
      return this.http.get<TypeArticle[]>(this.url + 'agence/search/' + key);
  }

  delete(typeArticleId?: number): Observable<void> {
      return this.http.delete<void>(this.url+ 'delete/' + typeArticleId);
  }

  update(typeArticle: TypeArticle): Observable<TypeArticle> {
      return this.http.put<TypeArticle>(this.url + 'update/'+ typeArticle.id, typeArticle);
  }
}
