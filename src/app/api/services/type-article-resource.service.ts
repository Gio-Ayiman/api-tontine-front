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

import { TypeArticleDto } from '../models/type-article-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TypeArticleResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }
  /**
   * Path part for operation apiTypeArticleCreatePost
   */
  static readonly ApiTypeArticleCreatePostPath = "/api/typeArticle/create";

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTypeArticleCreatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiTypeArticleCreatePost$Response(params?: {
    body?: TypeArticleDto
  }): Observable<StrictHttpResponse<TypeArticleDto>> {

    const rb = new RequestBuilder(this.rootUrl, TypeArticleResourceService.ApiTypeArticleCreatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TypeArticleDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTypeArticleCreatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiTypeArticleCreatePost(params?: {
    body?: TypeArticleDto
  }): Observable<TypeArticleDto> {

    return this.apiTypeArticleCreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<TypeArticleDto>) => r.body as TypeArticleDto)
    );
  }

  /**
   * Path part for operation apiTypeArticleDeleteIdDelete
   */
  static readonly ApiTypeArticleDeleteIdDeletePath = "/api/typeArticle/delete/{id}";

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTypeArticleDeleteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTypeArticleDeleteIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<TypeArticleDto>> {

    const rb = new RequestBuilder(this.rootUrl, TypeArticleResourceService.ApiTypeArticleDeleteIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TypeArticleDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTypeArticleDeleteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTypeArticleDeleteIdDelete(params: {
    id: number;
  }): Observable<TypeArticleDto> {

    return this.apiTypeArticleDeleteIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<TypeArticleDto>) => r.body as TypeArticleDto)
    );
  }

  /**
   * Path part for operation apiTypeArticleGetIdGet
   */
  static readonly ApiTypeArticleGetIdGetPath = '/api/typeArticle/get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTypeArticleGetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTypeArticleGetIdGet$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<TypeArticleDto>> {

    const rb = new RequestBuilder(this.rootUrl, TypeArticleResourceService.ApiTypeArticleGetIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TypeArticleDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTypeArticleGetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTypeArticleGetIdGet(params: {
    id: number;
  }): Observable<TypeArticleDto> {

    return this.apiTypeArticleGetIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<TypeArticleDto>) => r.body as TypeArticleDto)
    );
  }

  /**
   * Path part for operation apiTypeArticleListGet
   */
  static readonly ApiTypeArticleListGetPath = '/api/typeArticle/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTypeArticleListGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTypeArticleListGet$Response(params?: {
  }): Observable<StrictHttpResponse<Array<TypeArticleDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TypeArticleResourceService.ApiTypeArticleListGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TypeArticleDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTypeArticleListGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTypeArticleListGet(params?: {
  }): Observable<Array<TypeArticleDto>> {

    return this.apiTypeArticleListGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TypeArticleDto>>) => r.body as Array<TypeArticleDto>)
    );
  }

  /**
   * Path part for operation apiTypeArticleSearchLibelleGet
   */
  static readonly ApiTypeArticleSearchLibelleGetPath = '/api/typeArticle/search/{libelle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTypeArticleSearchLibelleGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTypeArticleSearchLibelleGet$Response(params: {
    libelle: string;
  }): Observable<StrictHttpResponse<Array<TypeArticleDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TypeArticleResourceService.ApiTypeArticleSearchLibelleGetPath, 'get');
    if (params) {
      rb.path('libelle', params.libelle, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TypeArticleDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTypeArticleSearchLibelleGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTypeArticleSearchLibelleGet(params: {
    libelle: string;
  }): Observable<Array<TypeArticleDto>> {

    return this.apiTypeArticleSearchLibelleGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TypeArticleDto>>) => r.body as Array<TypeArticleDto>)
    );
  }

  /**
   * Path part for operation apiTypeArticleUpdateIdPut
   */
  static readonly ApiTypeArticleUpdateIdPutPath = '/api/typeArticle/update/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTypeArticleUpdateIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiTypeArticleUpdateIdPut$Response(params: {
    id: number;
    body?: TypeArticleDto
  }): Observable<StrictHttpResponse<TypeArticleDto>> {

    const rb = new RequestBuilder(this.rootUrl, TypeArticleResourceService.ApiTypeArticleUpdateIdPutPath, 'put');
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
        return r as StrictHttpResponse<TypeArticleDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTypeArticleUpdateIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiTypeArticleUpdateIdPut(params: {
    id: number;
    body?: TypeArticleDto
  }): Observable<TypeArticleDto> {

    return this.apiTypeArticleUpdateIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<TypeArticleDto>) => r.body as TypeArticleDto)
    );
  }

}
