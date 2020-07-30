import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Image} from "../models/image";

import * as MetadataActions from "./store/metadata.actions"
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.reducer";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent {

  @Input("image") image : Image;

}
