import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Image} from "../models/image";

import * as MetadataActions from "./store/metadata.actions"
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.reducer";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit, OnDestroy {

  @Input("id") id : String;
  imageObject : {key: String, loaded: boolean, image: Image};

  subscription: Subscription

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.imageObject = {key: null, loaded: false, image: null};
    this.store.dispatch(new MetadataActions.LoadMetadata(this.id));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setImage() {
/*    this.subscription = this.store.select('metadata').pipe(
      map( (state) => {
        return state.data.find((value : {key: String, loaded: boolean, image: Image}) => {
          return (value.key === this.id);
        })
      })
    ).subscribe((value: {key: String, loaded: boolean, image: Image}) => {
      this.imageObject = value;
    })*/
  }

}
