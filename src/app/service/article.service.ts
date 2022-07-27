import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ArticleDto } from "../api/models";
import { ArticleResourceService } from "../api/services";

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor(private articleService: ArticleResourceService) { }

    create(article: ArticleDto): Observable<ArticleDto> {
        return this.articleService.create({body: article});
    }

    getAll(): Observable<ArticleDto[]> {
        return this.articleService.list();
    }

    getOne(articleId: number): Observable<ArticleDto>{
        return this.articleService.get({id: articleId});
    }

    search(key: string): Observable<ArticleDto[]>{
        return this.articleService.search({key: key});
    }

    delete(articleId: number): Observable<ArticleDto> {
        return this.articleService.delete({id: articleId});
    }

    update(articleUpdatedId: number, article: ArticleDto): Observable<ArticleDto> {
        return this.articleService.update({
            id: articleUpdatedId,
            body: article
        })
    }
}