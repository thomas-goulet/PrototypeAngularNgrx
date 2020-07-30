import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  url = 'http://localhost:8080/rest/images'

  imagePayload : {}

  options: {
    headers?: HttpHeaders,
    observe?: 'response',
    params?: HttpParams,
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }

  constructor(private http : HttpClient) { }

  fetchImages(toDo : Function) {
    this.http.get(this.url).subscribe((data) => {
      this.imagePayload = { ...data.valueOf() };
      toDo(this.imagePayload);
    })
  }

  fetchMetadata(id: String, toDo : Function) {
    this.http.get( "http://localhost:8080/rest/images" + "/" + id + "/metadata").subscribe((data) => {
      this.imagePayload = { ...data.valueOf() };
      toDo(this.imagePayload);
    })
  }

  fetchversions(id: String, toDo: Function) {
    this.http.get(this.url + "/" + id + "/versions").subscribe((data) => {
      this.imagePayload = { ...data.valueOf() };
      toDo(this.imagePayload);
    })
  }


}
