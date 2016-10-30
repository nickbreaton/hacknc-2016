//function locationChanged(lat, lon, alt, acc) {
//  var marker_image = new AR.ImageResource("assets/pin.png");
//  var marker_loc = new AR.GeoLocation(35.909896, -79.046767, alt);
//  var marker_drawable = new AR.ImageDrawable(marker_image, 8);
//  var marker_object = new AR.GeoObject(marker_loc, {
//    drawables: {
//      cam: [marker_drawable]
//    }
//  });
//
//  AR.logger.debug("lat:"+lat+", long: "+lon);
//
//}
//
//AR.logger.activateDebugMode();
//
//AR.context.onLocationChanged = locationChanged;


var World = {
    init: function initFn() {

            AR.logger.activateDebugMode();
    		AR.context.onLocationChanged = function locationChanged(lat, lon, alt, acc) {

    		    World.myLocation = {"latitude": lat, "longitude" : lon, "altitude" : alt };
    		    AR.logger.debug("lat: "+lat+", lon: "+lon);

//    		    World.createModelAtLocation(World.myLocation);

//    		    if (!World.created) {
//                    World.created = true;
//                    World.createModelAtLocation(World.myLocation);
//                }
            }
    	},

    createModelAtLocation: function createModelAtLocationFn(location) {

        var marker_image = new AR.ImageResource("assets/pin.png");
        var marker_loc = new AR.GeoLocation(location.latitude - 0.005, location.longitude + 0.0005, AR.CONST.UNKNOWN_ALTITUDE);
        var marker_drawable = new AR.ImageDrawable(marker_image, 8);
        var marker_object = new AR.GeoObject(marker_loc, {
            drawables: {
              cam: [marker_drawable]
            }
        });

        World.worldLoaded();

        AR.logger.debug("Added marker");
    },

    worldLoaded: function worldLoadedFn() {
        World.loaded = true;
    }
}

World.init();

// liten on change and run this callback World.createModelAtLocation

