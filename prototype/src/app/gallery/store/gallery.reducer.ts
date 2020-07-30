import {Image} from "../../models/image";
import * as GalleryActions from "./gallery.actions"

export interface State {
  images: Map<String, Image>
  loaded: boolean
}

const initialState = {
  images: new Map([["key", new Image()]]),
  loaded: false
}

export function galleryReducer(
  state : State = initialState,
  action : GalleryActions.Actions
) {
  switch (action.type) {
    case GalleryActions.LOAD_IMAGES:
      return state;
    case GalleryActions.SET_IMAGES:
      return {
        ...state,
        loaded: true,
        images: action.payload
      };
    default:
      return state;
  }
}
