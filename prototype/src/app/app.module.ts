import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {StoreModule} from '@ngrx/store';

import {
  NbCardModule,
  NbLayoutModule,
  NbThemeModule,
  NbButtonModule,
  NbPopoverModule,
  NbListModule, NbInputModule,
} from '@nebular/theme';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { MetadataComponent } from './metadata/metadata.component';
import { EditImageComponent } from './edit-image/edit-image.component';

import * as fromApp from './store/app.reducer';
import {GalleryEffects} from './gallery/store/gallery.effects';
import {EditImageEffects} from './edit-image/store/edit-image.effects';

const routes: Routes = [
  {path: '', component: GalleryComponent},
  {path: 'edit/:id', component: EditImageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageComponent,
    MetadataComponent,
    EditImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NbThemeModule.forRoot({name: 'dark'}),
    NbLayoutModule,
    NbCardModule,
    HttpClientModule,
    NbButtonModule,
    NbPopoverModule,
    NbListModule,
    NbInputModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([GalleryEffects, EditImageEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
