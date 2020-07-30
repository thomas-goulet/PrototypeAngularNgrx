import {Injectable} from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import {HttpClient} from "@angular/common/http";

import * as MetadataActions from "./metadata.actions"
import {map, switchMap} from "rxjs/operators";
import {Image} from "../../models/image";

@Injectable()
// @ts-ignore
export class MetadataEffects {

  constructor(
    private actions : Actions,
    private http : HttpClient
  ) {}

  @Effect()
    // @ts-ignore
  loadImages = this.actions.pipe(
    ofType<MetadataActions.LoadMetadata>(MetadataActions.LOAD_METADATA),
    switchMap((action) => {
      return this.http.get("http://localhost:8080/rest/images/" + action.payload + "/metadata");
    }),
    map( (image: Image) => {
      return new MetadataActions.AddMetadata(image);
    })
  )
}
