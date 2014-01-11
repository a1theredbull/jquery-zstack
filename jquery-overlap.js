function Overlapper() {
  var overlappables = $('.ol-able');
  var zStart = 0;

  this.init = function(settings) {
    var self = this;
    if(settings) {
      zStart = settings.zStart || 0;
    }

    for(var i = 0; i < overlappables.length; i++) {
      var overlappable = $(overlappables[i]);
      var zOffset = zStart + i;

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
    elem.css('z-index', zStart + overlappables.length);
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

     elem.css('z-index', zStart);
  }
}