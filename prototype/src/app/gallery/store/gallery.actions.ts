import {Action} from '@ngrx/store';

import {Image} from '../../models/image';

export const LOAD_IMAGES = '[Gallery] LOAD_IMAGES';
export const SET_IMAGES = '[Gallery] SET_IMAGES';

export class LoadImages implements Action {
  readonly type = LOAD_IMAGES;
}

export class SetImages implements Action {
  readonly type = SET_IMAGES;
  constructor(public payload: Map<string, Image>) {}
}

export type Actions =
  LoadImages |
  SetImages;
