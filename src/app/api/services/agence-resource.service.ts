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

import { AgenceDto } from '../models/agence-dto';

@Injectable({
  providedIn: 'root',
})
export class AgenceResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAgenceAddArticleIdPut
   */
  static readonly ApiAgenceAddArticleIdPutPath = '/api/agence/add-article/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAgenceAddArticleIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAgenceAddArticleIdPut$Response(params: {
    id: number;
    body?: AgenceDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AgenceResourceService.ApiAgenceAddArticleIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAgenceAddArticleIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAgenceAddArticleIdPut(params: {
    id: number;
    body?: AgenceDto
  }): Observable<void> {

    return this.apiAgenceAddArticleIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAgenceCreatePost
   */
  static readonly ApiAgenceCreatePostPath = '/api/agence/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAgenceCreatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAgenceCreatePost$Response(params?: {
    body?: AgenceDto
  }): Observable<StrictHttpResponse<AgenceDto>> {

    const rb = new RequestBuilder(this.rootUrl, AgenceResourceService.ApiAgenceCreatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgenceDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAgenceCreatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAgenceCreatePost(params?: {
    body?: AgenceDto
  }): Observable<AgenceDto> {

    return this.apiAgenceCreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<AgenceDto>) => r.body as AgenceDto)
    );
  }

  /**
   * Path part for operation apiAgenceDeleteIdDelete
   */
  static readonly ApiAgenceDeleteIdDeletePath = '/api/agence/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAgenceDeleteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAgenceDeleteIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<AgenceDto>> {

    const rb = new RequestBuilder(this.rootUrl, AgenceResourceService.ApiAgenceDeleteIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgenceDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAgenceDeleteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAgenceDeleteIdDelete(params: {
    id: number;
  }): Observable<AgenceDto> {

    return this.apiAgenceDeleteIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<AgenceDto>) => r.body as AgenceDto)
    );
  }

  /**
   * Path part for operation apiAgenceGetIdGet
   */
  static readonly ApiAgenceGetIdGetPath = '/api/agence/get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAgenceGetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAgenceGetIdGet$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<AgenceDto>> {

    const rb = new RequestBuilder(this.rootUrl, AgenceResourceService.ApiAgenceGetIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgenceDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAgenceGetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAgenceGetIdGet(params: {
    id: number;
  }): Observable<AgenceDto> {

    return this.apiAgenceGetIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AgenceDto>) => r.body as AgenceDto)
    );
  }

  /**
   * Path part for operation apiAgenceListGet
   */
  static readonly ApiAgenceListGetPath = '/api/agence/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAgenceListGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAgenceListGet$Response(params?: {
  }): Observable<StrictHttpResponse<Array<AgenceDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AgenceResourceService.ApiAgenceListGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AgenceDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAgenceListGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAgenceListGet(params?: {
  }): Observable<Array<AgenceDto>> {

    return this.apiAgenceListGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AgenceDto>>) => r.body as Array<AgenceDto>)
    );
  }

  /**
   * Path part for operation apiAgenceSearchNameGet
   */
  static readonly ApiAgenceSearchNameGetPath = '/api/agence/search/{name}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAgenceSearchNameGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAgenceSearchNameGet$Response(params: {
    name: string;
  }): Observable<StrictHttpResponse<Array<AgenceDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AgenceResourceService.ApiAgenceSearchNameGetPath, 'get');
    if (params) {
      rb.path('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AgenceDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAgenceSearchNameGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAgenceSearchNameGet(params: {
    name: string;
  }): Observable<Array<AgenceDto>> {

    return this.apiAgenceSearchNameGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AgenceDto>>) => r.body as Array<AgenceDto>)
    );
  }

  /**
   * Path part for operation apiAgenceUpdateIdPut
   */
  static readonly ApiAgenceUpdateIdPutPath = '/api/agence/update/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAgenceUpdateIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAgenceUpdateIdPut$Response(params: {
    id: number;
    body?: AgenceDto
  }): Observable<StrictHttpResponse<AgenceDto>> {

    const rb = new RequestBuilder(this.rootUrl, AgenceResourceService.ApiAgenceUpdateIdPutPath, 'put');
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
        return r as StrictHttpResponse<AgenceDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAgenceUpdateIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAgenceUpdateIdPut(params: {
    id: number;
    body?: AgenceDto
  }): Observable<AgenceDto> {

    return this.apiAgenceUpdateIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<AgenceDto>) => r.body as AgenceDto)
    );
  }

}
