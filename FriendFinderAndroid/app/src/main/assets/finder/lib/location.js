function locationChanged(lat, lon, alt, acc) {
  var marker_image = new AR.ImageResource("assets/pin.png");
  var marker_loc = new AR.GeoLocation(35.909445, -79.046870, alt);
  var marker_drawable = new AR.ImageDrawable(marker_image, 8);
  var marker_object = new AR.GeoObject(marker_loc, {
    drawables: {
      cam: [marker_drawable]
    }
  });

  AR.logger.debug("Added marker");
}

AR.logger.activateDebugMode();

AR.context.onLocationChanged = locationChanged;
