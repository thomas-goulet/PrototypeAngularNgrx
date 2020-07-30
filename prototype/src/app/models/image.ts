export class Image {

  id : String;
  date: String;
  type: String;
  status: String;
  author: String;
  comment: String;
  gpsDirection: number;
  latestUrl: String;
  location: {coordinates: number[], type: String};
  tags: String[];

}
