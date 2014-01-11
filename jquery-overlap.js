function Overlapper() {
  var overlappables;
  var settings = {
    zStart: 0,
    clickToFront: true
  };

  this.init = function(options) {
    var self = this;
    overlappables = $('.ol-able');
    if(settings) {
      settings.zStart = options.zStart || 0;
      settings.clickToFront = options.clickToFront || true;

      if(settings.clickToFront) {
        for(var i = 0; i < overlappables.length; i++) {
          var overlappable = $(overlappables[i]);
          var zOffset = settings.zStart + i;

          overlappable.css('z-index', zOffset);

          overlappable.on('click', function() {
            self.moveToFront($(this));
          });

          //register dragstart if jQueryUI draggable is being used
          overlappable.on('dragstart', function() {
            self.moveToFront($(this));
          });
        }
      }
    }
  }

  this.clickToFront = function() {
    for(var i = 0; i < overlappables.length; i++) {
      var overlappable = $(overlappables[i]);
      var zOffset = settings.zStart + i;

      overlappable.css('z-index', zOffset);

      overlappable.on('click', function() {
        self.moveToFront($(this));
      });

      //register dragstart if jQueryUI draggable is being used
      overlappable.on('dragstart', function() {
        self.moveToFront($(this));
      });
    }
  }

  this.moveToFront = function(elem) {
    var oldZ = elem.css('z-index');
    elem.css('z-index', settings.zStart + overlappables.length);
    for(var i = 0; i < overlappables.length; i++) {
      var overlappable = $(overlappables[i]);
      if(+overlappable.css('z-index') != oldZ && +overlappable.css('z-index') > +oldZ) {
        overlappable.css('z-index', +overlappable.css('z-index') - 1);
      }
    }
  }

  this.moveToBack = function(elem) {
    var oldZ = elem.css('z-index');
    for(var i = 0; i < overlappables.length; i++) {
      var overlappable = $(overlappables[i]);
      if(+overlappable.css('z-index') != oldZ && +overlappable.css('z-index') < +oldZ) {
        overlappable.css('z-index', +overlappable.css('z-index') + 1);
      }
    }

     elem.css('z-index', settings.zStart);
  }
}