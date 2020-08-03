export class Image {

  id: string;
  date: string;
  type: string;
  status: string;
  author: string;
  comment: string;
  gpsDirection: number;
  latestUrl: string;
  location: {coordinates: number[], type: string};
  tags: string[];

}
