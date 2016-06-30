/** create the main javascript variable called main which is a function **/
var main = function() {
  var checkTime = function() {
    /** pull locally hosted date data **/
    var currentTime = new Date();
    /** store hour data in currentHours variable **/
    var currentHours = currentTime.getHours();
    /** store minute data in currentMinutes variable **/
    var currentMinutes = currentTime.getMinutes();
    /** store second data in currentSeconds variable **/
    var currentSeconds = currentTime.getSeconds();

    /** Use nightTime theme between 8:00pm and 6:00am based on 24h clock **/
    if (currentHours >= 20 || currentHours < 6) {
      /** remove dayTime class from body tag **/
      $("body").removeClass('dayTime')
      /** add nightTime class to body tag **/
      $("body").addClass('nightTime')
    }
    /** Otherwise, it is dayTime **/
    else {
      /** remove nightTime class from body tag **/
      $("body").removeClass('nightTime')
      /** add dayTime class to body tag **/
      $("body").addClass('dayTime')
    };
  };

  /** Check what time it is every second **/
  setInterval(checkTime, 1000);
};

/** everything above is stored here and activated on page load**/
$(document).ready(main);
