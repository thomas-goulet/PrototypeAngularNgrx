import { TestBed, async } from '@angular/core/testing';
import { editImageReducer } from './edit-image.reducer';
import * as fromActions from './edit-image.actions';
import * as fromReducers from './edit-image.reducer';
import {Image} from '../../models/image';

describe('EditImageReducer', () => {

  const initialState = fromReducers.initialState;

  describe('load metadata', () => {
    it('should return inital state', () => {
      const expectedState = initialState;
      const action = new fromActions.LoadMetadata('');
      const state = fromReducers.editImageReducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });

  describe('add metadata', () => {
    it('should add metadata to state', () => {
      const image: Image = {
        id: '5f2300aeffe0de7ce8c1eb36',
        date: '2020-07-30T00:00:00.000+0000',
        status: 'HISTORIC',
        type: undefined,
        gpsDirection: undefined,
        location: undefined,
        tags: ['test', 'allo'],
        author: 'IB',
        comment: 'EssaiIB',
        latestUrl: 'https://iwlstestimagesa.blob.core.windows.net/images/5f2300aeffe0de7ce8c1eb36/5f2300aeffe0de7ce8c1eb35/thumbnail.jpg'
      };

      const expectedState = {
        data: [
          {key: null, loaded: false, image: null},
          {key: image.id, loaded: true, image}
        ]
      };
      const action = new fromActions.AddMetadata(image);
      const state = fromReducers.editImageReducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });
});
