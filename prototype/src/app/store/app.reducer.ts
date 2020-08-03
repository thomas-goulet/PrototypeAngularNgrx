import { ActionReducerMap } from '@ngrx/store';
import * as fromGallery from '../gallery/store/gallery.reducer';
import * as fromEditImage from '../edit-image/store/edit-image.reducer';

export interface AppState {
  gallery: fromGallery.State;
  editImage: fromEditImage.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  gallery: fromGallery.galleryReducer,
  editImage: fromEditImage.editImageReducer
};
