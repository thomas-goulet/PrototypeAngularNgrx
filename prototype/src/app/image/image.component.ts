import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MetadataComponent} from '../metadata/metadata.component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  @Input() image: {id, latestUrl};

  metadata = MetadataComponent;

  constructor() { }

}
