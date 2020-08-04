import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataComponent } from './metadata.component';
import {Image} from '../models/image';

describe('MetadataComponent', () => {
  let component: MetadataComponent;
  let fixture: ComponentFixture<MetadataComponent>;
  const input: Image = {
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataComponent);
    component = fixture.componentInstance;
    component.image = input;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
