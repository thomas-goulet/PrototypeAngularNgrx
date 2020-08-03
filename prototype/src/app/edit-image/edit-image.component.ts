import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as EditImageActions from './store/edit-image.actions';
import {Image} from '../models/image';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.reducer';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  private imageId: string;
  loaded = false;
  image: Image;
  imageURL: {thumbnail: string, medium: string, original: string};

  subscription: Subscription;

  ngOnInit(): void {

    this.imageId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new EditImageActions.LoadMetadata(this.imageId));

    this.subscription = this.store.select('editImage').pipe(
      map((editImageState) => {
        console.log(editImageState);
        return editImageState;
      })
    ).subscribe((state) => {
      console.log('Trying to find data in state');
      state.data.forEach((value) => {
        if (value.key === this.imageId) {
          console.log(value);
          this.image = value.image;
          this.loaded = true;
          this.imageURL = {thumbnail: '', medium: '', original: ''};
          this.imageURL.thumbnail = this.image.latestUrl;
          this.imageURL.medium = this.image.latestUrl.replace('thumbnail', 'medium');
          this.imageURL.original = this.image.latestUrl.replace('thumbnail', 'original');
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
