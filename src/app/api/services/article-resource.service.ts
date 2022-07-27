/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ArticleDto } from '../models/article-dto';


/**
 * APIs REST pour Article
 */
@Injectable({
  providedIn: 'root',
})
export class ArticleResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation create
   */
  static readonly CreatePath = '/api/article/create';

  /**
   * Creer un article.
   *
   * Enregistrer un article dans la base de donnee
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params?: {
    body?: ArticleDto
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleResourceService.CreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Creer un article.
   *
   * Enregistrer un article dans la base de donnee
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params?: {
    body?: ArticleDto
  }): Observable<any> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation delete
   */
  static readonly DeletePath = '/api/article/delete/{id}';

  /**
   * Supprimer un article.
   *
   * Supprimer un article de la base de donnee
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleResourceService.DeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Supprimer un article.
   *
   * Supprimer un article de la base de donnee
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: {
    id: number;
  }): Observable<any> {

    return this.delete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation get
   */
  static readonly GetPath = '/api/article/get/{id}';

  /**
   * Recuperer un article de la liste.
   *
   * Recuperer un article de la base de donnee
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `get()` instead.
   *
   * This method doesn't expect any request body.
   */
  get$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleResourceService.GetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Recuperer un article de la liste.
   *
   * Recuperer un article de la base de donnee
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `get$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  get(params: {
    id: number;
  }): Observable<any> {

    return this.get$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation list
   */
  static readonly ListPath = '/api/article/list';

  /**
   * Recuperer la liste des articles.
   *
   * Recuperer les aarticles de la base de donnee
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `list()` instead.
   *
   * This method doesn't expect any request body.
   */
  list$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleResourceService.ListPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Recuperer la liste des articles.
   *
   * Recuperer les aarticles de la base de donnee
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `list$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  list(params?: {
  }): Observable<any> {

    return this.list$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation search
   */
  static readonly SearchPath = '/api/article/search/{key}';

  /**
   * Recuperer un article de la liste.
   *
   * Recuperer un article avec un  mot cle de de la base de donnee
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `search()` instead.
   *
   * This method doesn't expect any request body.
   */
  search$Response(params: {
    key: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleResourceService.SearchPath, 'get');
    if (params) {
      rb.path('key', params.key, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Recuperer un article de la liste.
   *
   * Recuperer un article avec un  mot cle de de la base de donnee
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `search$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  search(params: {
    key: string;
  }): Observable<any> {

    return this.search$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation update
   */
  static readonly UpdatePath = '/api/article/update/{id}';

  /**
   * Modifier un article.
   *
   * Modifier un article de la base de donnee
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update$Response(params: {
    id: number;
    body?: ArticleDto
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleResourceService.UpdatePath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Modifier un article.
   *
   * Modifier un article de la base de donnee
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `update$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update(params: {
    id: number;
    body?: ArticleDto
  }): Observable<any> {

    return this.update$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
