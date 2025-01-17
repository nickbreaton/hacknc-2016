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

//            AR.logger.activateDebugMode();
    		AR.context.onLocationChanged = function locationChanged(lat, lon, alt, acc) {

    		    World.myLocation = {"latitude": lat, "longitude" : lon, "altitude" : alt };
//    		    AR.logger.debug("lat: "+lat+", lon: "+lon);

//    		    World.createModelAtLocation(World.myLocation);

    		    if (!World.created) {
                    World.created = true;
                    World.createModelAtLocation(World.myLocation);
                }
            }
    	},

    createModelAtLocation: function createModelAtLocationFn(location) {

        var marker_image = new AR.ImageResource("assets/pin.png");
        var marker_loc = new AR.GeoLocation(location.latitude , location.longitude, AR.CONST.UNKNOWN_ALTITUDE);
        var marker_drawable = new AR.ImageDrawable(marker_image, 8);
        var marker_object = new AR.GeoObject(marker_loc, {
            drawables: {
              cam: [marker_drawable]
            }
        });

        World.worldLoaded();

//        AR.logger.debug("Added marker");
//        AR.logger.debug("lat: "+location.latitude+", lon: "+location.longitude);
    },

    createModelAtFriendLocation: function createModelAtLocationFn(snapshot) {

            AR.context.destroyAll();

            var marker_image = new AR.ImageResource(snapshot.val().url);
            var marker_loc = new AR.GeoLocation(snapshot.val().lat, snapshot.val().lon, AR.CONST.UNKNOWN_ALTITUDE);
            var marker_drawable = new AR.ImageDrawable(marker_image, 3);
            var label = new AR.Label(snapshot.val().name, 0.8, {
                                zOrder: 1,
                                offsetY: +3.05,
                                style: {
                                    textColor: '#ffffff'
                                }
                            });
            var marker_rec = new AR.ImageDrawable(new AR.ImageResource("assets/bubble2.png"), 3, {
                                     offsetY: +2.75,
                                     onClick : function() {
                                         // 'this' represents the marker_rec
                                         this.rotation += 10;
                                       }
                                   });

            var marker_object = new AR.GeoObject(marker_loc, {
                drawables: {
                  cam: [marker_drawable, label,marker_rec]
                }
            });

            World.worldLoaded();

//            AR.logger.debug("Added marker");
//            AR.logger.debug("Friend Location:"+snapshot.val().lat +", "+snapshot.val().lon);
        },

    worldLoaded: function worldLoadedFn() {
        World.loaded = true;
    }
}

World.init();
// 
//
// var msgRef = database.ref('users/1/msg/');
// msgRef.on('value', function(snapshot) {
//     document.getElementById("msg").innerHTML = snapshot.val();
// });
