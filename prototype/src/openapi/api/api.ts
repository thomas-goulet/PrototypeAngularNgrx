export * from './images.service';
import { ImagesService } from './images.service';
export * from './stationsRestController.service';
import { StationsRestControllerService } from './stationsRestController.service';
export * from './timeSeriesRestController.service';
import { TimeSeriesRestControllerService } from './timeSeriesRestController.service';
export const APIS = [ImagesService, StationsRestControllerService, TimeSeriesRestControllerService];
