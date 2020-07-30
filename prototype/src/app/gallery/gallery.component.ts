import {Component, OnDestroy, OnInit} from '@angular/core';
import {ImageServiceService} from "../image-service.service";
import {AppState} from "../store/app.reducer";
import {Store} from "@ngrx/store";
import * as GalleryActions from "./store/gallery.actions"
import {Image} from "../models/image";
import {map, switchMap} from "rxjs/operators";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  images: Map<String, Image>;
  imageKeys: String[];
  loaded: boolean;

  constructor(
    private imageService: ImageServiceService,
    private store: Store<AppState>
  ) {}


  ngOnInit(): void {
    this.store.dispatch(new GalleryActions.LoadImages());

    this.subscription = this.store.select('gallery').pipe(
      map((galleryState) => {return galleryState})
    ).subscribe((state) => {
      this.images = state.images;
      this.imageKeys = Array.from(this.images.keys());
      this.loaded = state.loaded;
      console.log(this.images);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
