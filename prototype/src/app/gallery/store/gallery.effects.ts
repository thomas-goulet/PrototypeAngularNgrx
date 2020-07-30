import {Injectable} from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import {HttpClient} from "@angular/common/http";

import * as GalleryActions from "./gallery.actions"
import {map, switchMap} from "rxjs/operators";
import {Image} from "../../models/image";

@Injectable()
// @ts-ignore
export class GalleryEffects {

  constructor(
    private actions : Actions,
    private http : HttpClient
  ) {}

  @Effect()
  // @ts-ignore
  loadImages = this.actions.pipe(
    ofType<GalleryActions.LoadImages>(GalleryActions.LOAD_IMAGES),
    switchMap(() => {
      return this.http.get("http://localhost:8080/rest/images");
    }),
    map( (images : {content}) => {
      return new Map(images.content.map(obj => [obj.id, obj]))
    }),
    map( (imageMap: Map<String, Image>) => {
      return new GalleryActions.SetImages(imageMap);
    })
  )
}
