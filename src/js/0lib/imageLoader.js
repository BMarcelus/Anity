var IMAGES = {};
var ImageLoader = {
  imagesToLoad: 0,
  loaded: 0,
  onCompleteEvents: [],
  directory: './Assets/images/',
  getLoaded() {
    return ImageLoader.loaded/ImageLoader.imagesToLoad;
  },
  loadImage(src) {
    var img = new Image();
    img.src=this.directory+src;
    this.imagesToLoad += 1;
    img.onload = this.onLoad;
    return img;
  },
  onLoad() {
    ImageLoader.loaded++;
    if(ImageLoader.loaded>=ImageLoader.imagesToLoad) {
      ImageLoader.onCompleteEvents.forEach(function(f){f()});
      ImageLoader.onCompleteEvents = [];
    }
  },
  onComplete(callback) {
    if(this.loaded>=this.imagesToLoad) {
      callback();
    } else {
      this.onCompleteEvents.push(callback);
    }
  }
}
