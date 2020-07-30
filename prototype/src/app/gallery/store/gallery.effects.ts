import {Injectable} from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import {HttpClient} from "@angular/common/http";

import * as GalleryActions from "./gallery.actions"
import {map, switchMap} from "rxjs/operators";
import {Image} from "../../models/image";
import { ImagesService } from 'src/openapi';

@Injectable()
// @ts-ignore
export class GalleryEffects {

  constructor(
    private actions : Actions,
    private http : HttpClient,
    private imageService: ImagesService
  ) {}

  @Effect()
  // @ts-ignore
  loadImages = this.actions.pipe(
    ofType<GalleryActions.LoadImages>(GalleryActions.LOAD_IMAGES),
    switchMap(() => {
      return this.imageService.searchImages();
    }),
    map( (images : {content}) => {
      return new Map(images.content.map(obj => [obj.id, obj]))
    }),
    map( (imageMap: Map<String, Image>) => {
      return new GalleryActions.SetImages(imageMap);
    })
  )
}
