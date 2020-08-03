import {Action} from '@ngrx/store';
import {Image} from '../../models/image';

export const ADD_METADATA = '[Edit-Image] ADD_METADATA';
export const LOAD_METADATA = '[Edit-Image] LOAD_METADATA';

export class AddMetadata implements Action {
  readonly type = ADD_METADATA;
  constructor(public payload: Image) {}
}

export class LoadMetadata implements Action {
  readonly type = LOAD_METADATA;
  constructor(public payload: string) {}
}

export type Actions =
  AddMetadata |
  LoadMetadata;
