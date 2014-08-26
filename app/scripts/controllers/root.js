'use strict';

// rootScope allows for usage on ngView element
app.run(function($rootScope, $window, $location, Post) {

  // Get geoLocation immediately  --> GOOGLE HAS API THAT WILL PROVIDE BETTER UX TO IMPLEMENT / NEED TO READ DOCS
  $rootScope.getGeo = function() {

    var geolocation = null;

    // Prepare geolocation
    geolocation = window.navigator.geolocation;

    // If supported, run this
    geolocation.getCurrentPosition(function(pos) {
      var lat = Math.ceil(pos.coords.latitude) * 10,
          lon = Math.ceil(pos.coords.longitude) * 10,
          location = lat + ', ' + lon;

      console.log(location);

      // Select all span elements in repeated list
      var geo = document.querySelectorAll('.geo');
      
      // Loop through list insert current geolocation
      for (var i = 0; i < geo.length; i++) {
        $rootScope.geo = geo[i].innerHTML = location;
      }
    });

  };

});