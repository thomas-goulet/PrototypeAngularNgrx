import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {Image} from "../models/image";
import {By} from "@angular/platform-browser";

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let store: MockStore;
  let map = new Map([['key', new Image()]]);
  let image: Image = {
    id: "5f2300aeffe0de7ce8c1eb36",
    date: "2020-07-30T00:00:00.000+0000",
    status: "HISTORIC",
    type: undefined,
    gpsDirection: undefined,
    location: undefined,
    tags: ["test", "allo"],
    author: "IB",
    comment: "EssaiIB",
    latestUrl: "https://iwlstestimagesa.blob.core.windows.net/images/5f2300aeffe0de7ce8c1eb36/5f2300aeffe0de7ce8c1eb35/thumbnail.jpg"
  };
  map.set('5f2300aeffe0de7ce8c1eb36', image);
  const initialState = {
    images: map,
    loaded: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent ],
      providers: [ provideMockStore({initialState}) ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display images if not loaded', () => {
    component.loaded = false;
    let section = document.getElementById('photo');
    expect(section).toBeNull();
  });

  it('should display images if loaded', () => {
    component.loaded = true;
    let section = document.getElementById('photo');
    expect(section).toBeDefined();
  });

});
