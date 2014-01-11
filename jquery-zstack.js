(function($) {
  
  $.fn.zStack = function(options) {
    var $this = $(this);
    $this.opts = $.extend({}, $.fn.zStack.defaults, options);

    $this.each(function(i, elem) {
      elem = $(elem);

      elem.css('z-index', $this.opts.zStart + i);

      if($this.opts.trigger === 'click') {
        elem.click(function() {
          $.fn.zStack.moveToFront(elem);
        });
        elem.on('dragstart', function() {
          $.fn.zStack.moveToFront(elem);
        });
      } else if($this.opts.trigger === 'hover') {
        elem.mouseover(function() {
          $.fn.zStack.moveToFront(elem);
        });
      }
    });

    return this.data('zStack', $this);
  };

  $.fn.zStack.moveToFront = function(elem) {
    var $this = elem.data('zStack');

    var oldZ = elem.css('z-index');
    elem.css('z-index', $this.opts.zStart + $this.length);
    $this.each(function(i, elem) {
      elem = $(elem);
      if(+elem.css('z-index') != oldZ && +elem.css('z-index') > +oldZ) {
        elem.css('z-index', +elem.css('z-index') - 1);
      }
    });
  };

  $.fn.zStack.defaults = {
    trigger: 'click',
    zStart: 0
  };

}(jQuery));