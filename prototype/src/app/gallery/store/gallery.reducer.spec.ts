import * as fromReducer from './gallery.reducer';
import * as fromActions from './gallery.actions';
import {Image} from '../../models/image';

describe('GalleryReducer', () => {

  const initialState = {
    images: new Map([['key', new Image()]]),
    loaded: false
  };

  describe('load image', () => {
    it('should return initial state', () => {
      const expectedState = initialState;
      const action = new fromActions.LoadImages();
      const state = fromReducer.galleryReducer(initialState, action);

      console.log(state);
      console.log(expectedState);

      expect(state).toEqual(expectedState);
    });
  });

  describe('set image', () => {
    it('set image should return new image', () => {

      const map = new Map([['key', new Image()]]);
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
      map.set('5f2300aeffe0de7ce8c1eb36', image);


      const expectedState = initialState;
      expectedState.images.set('5f2300aeffe0de7ce8c1eb36', image);
      expectedState.loaded = true;
      const action = new fromActions.SetImages(map);
      const state = fromReducer.galleryReducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });





});
