import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from '../store/app.reducer';
import {Store} from '@ngrx/store';
import * as GalleryActions from './store/gallery.actions';
import * as EditImageActions from '../edit-image/store/edit-image.actions';
import {Image} from '../models/image';
import {map, switchMap} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  metadataSubscription: Subscription;
  images: Map<string, Image>;
  imageKeys: string[];
  loaded: boolean;
  metadataImage: Image = null;

  constructor(
    private store: Store<AppState>,
  ) {}


  ngOnInit(): void {
    this.store.dispatch(new GalleryActions.LoadImages());

    this.subscription = this.store.select('gallery').pipe(
      map((galleryState) => galleryState)
    ).subscribe((state) => {
      this.images = state.images;
      this.imageKeys = Array.from(this.images.keys());
      this.loaded = state.loaded;
      console.log(this.images);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  imageHover(id: string): void {
    this.store.dispatch(new EditImageActions.LoadMetadata(id));

    this.metadataSubscription = this.store.select('editImage').pipe(
      map((state) => state)
    ).subscribe((state) => {
      state.data.forEach((value) => {
        if (value.key === id) {
         this.metadataImage = value.image;
        }
      });
    });
  }
}
