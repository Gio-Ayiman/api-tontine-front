import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Agence } from 'src/models/Agence';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  
  constructor(private http: HttpClient) { }

  create(agence: Agence): Observable<Agence> {
    return this.http.post<Agence>(environment.URL + 'agence/create', agence);
  }

  getAll(): Observable<Agence[]> {
    return this.http.get<Agence[]>(environment.URL + 'agence/list');
  }

  getOne(id: number): Observable<Agence>{
    return this.http.get<Agence>(environment.URL + 'agence/get/' + id);
  }

  search(key: string): Observable<Agence[]>{
    return this.http.get<Agence[]>(environment.URL + 'agence/search/' + key);
  }

  delete(agenceId?: number): Observable<void> {
    return this.http.delete<void>(environment.URL + 'agence/delete/' + agenceId);
  }

  update(agence: Agence): Observable<Agence> {
    return this.http.put<Agence>(environment.URL + 'agence/update/'+ agence.id, agence);
  }
}
