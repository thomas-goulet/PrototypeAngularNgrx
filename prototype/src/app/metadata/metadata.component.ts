import {Component, Input} from '@angular/core';
import {Image} from '../models/image';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent {

  @Input() image: Image;

}
