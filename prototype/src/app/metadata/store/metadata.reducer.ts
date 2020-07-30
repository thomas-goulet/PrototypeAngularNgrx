import {Image} from "../../models/image";
import * as MetadataActions from "./metadata.actions"

export interface State {
  data: {key: String, loaded: boolean, image: Image}[]
}

const initialState: State = {
  data: [null]
}

export function metadataReducer(
  state = initialState,
  action: MetadataActions.Actions
) {
  switch (action.type) {
    case MetadataActions.ADD_METADATA:
      return {
        ...state,
        data: [...state.data, {key: action.payload.id, loaded: true, image: action.payload}]
      }
    case MetadataActions.LOAD_METADATA:
      return state;
    default:
      return state;
  }
}
