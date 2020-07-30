import {Image} from "../../models/image";
import * as EditImageActions from "./edit-image.actions"

export interface State {
  data: {key: String, loaded: boolean, image: Image}[]
}

const initialState: State = {
  data: [{key: null, loaded: false, image: null}]
}

export function editImageReducer(
  state = initialState,
  action: EditImageActions.Actions
) {
  switch (action.type) {
    case EditImageActions.ADD_METADATA:
      console.log("ADD_METADATA CALLED");
      console.log(action.payload);
      return {
        ...state,
        data: [...state.data, {key: action.payload.id, loaded: true, image: action.payload}]
      }
    case EditImageActions.LOAD_METADATA:
      console.log("LOAD_METADATA CALLED");
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}
