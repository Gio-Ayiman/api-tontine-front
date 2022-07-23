import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Article } from "src/models/Article";

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    url: string  = environment.URL + 'article/';

    constructor(private http: HttpClient) { }

    create(article: Article): Observable<Article> {
        return this.http.post<Article>(this.url + 'create', article);
    }

    getAll(): Observable<Article[]> {
        return this.http.get<Article[]>(this.url + 'list');
    }

    getOne(id: number): Observable<Article>{
        return this.http.get<Article>(this.url + 'get/' + id);
    }

    search(key: string): Observable<Article[]>{
        return this.http.get<Article[]>(this.url + 'search/' + key);
    }

    delete(articleId?: number): Observable<void> {
        return this.http.delete<void>(this.url+ 'delete/' + articleId);
    }

    update(article: Article): Observable<Article> {
        return this.http.put<Article>(this.url + 'update/'+ article.id, article);
    }
}