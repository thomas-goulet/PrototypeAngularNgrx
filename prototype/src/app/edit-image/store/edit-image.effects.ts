import {Injectable} from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import {HttpClient} from "@angular/common/http";

import * as EditImageActions from "./edit-image.actions"
import {map, switchMap} from "rxjs/operators";
import {Image} from "../../models/image";

@Injectable()
// @ts-ignore
export class EditImageEffects {

  constructor(
    private actions : Actions,
    private http : HttpClient
  ) {}

  @Effect()
    // @ts-ignore
  loadImages = this.actions.pipe(
    ofType<EditImageActions.LoadMetadata>(EditImageActions.LOAD_METADATA),
    switchMap((action) => {
      console.log("Making HTTP GET Request for metadata")
      return this.http.get("http://localhost:8080/rest/images/" + action.payload + "/metadata");
    }),
    map( (image: Image) => {
      console.log("CALLING ADD_METADATA")
      console.log(image);
      return new EditImageActions.AddMetadata(image);
    })
  )
}
