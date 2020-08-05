import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImageComponent } from './edit-image.component';
import { editImageReducer } from './store/edit-image.reducer';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as fromReducers from './store/edit-image.reducer';

describe('EditImageComponent', () => {
  let component: EditImageComponent;
  let fixture: ComponentFixture<EditImageComponent>;
  let store: MockStore;
  const initialState = fromReducers.initialState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImageComponent ],
      imports: [RouterTestingModule],
      providers: [ provideMockStore({ initialState })]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

});
