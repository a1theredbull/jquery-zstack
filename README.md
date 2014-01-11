## Overlap.js

### Description 

Overlap.js is a small jQuery plugin that provides the ability to manage z-indices.

### What does it do?

The plugin provides an easier solution to manage z-indices on documents that utilize
overlapping DOM elements.

Works well with jQuery UI draggable elements.

Check out demo.html to see an example.

### Basic Usage

jQuery is required.
jQuery UI is optional for draggable elements.

Give HTML elements the class "ol-able"

    <div class="ol-able">..some stuff..</div>
    <div class="ol-able">..some other stuff..</div>

Initialize in javascript

    var overlapper = new Overlapper();
    overlapper.init();

Calling init will register click events on all given elements.  Clicking an element
will push it to the top of the z-index order stack.

### Options

Currently only one option exists:

zStart

    overlapper.init({ zStart: 4 })

This will initialize the DOM elements of class "ol-able" to start at z-index 4.

### Other Usage

Want custom events instead of click? Don't call init and register a custom event
that uses moveToFront(elem). The library will continue managing z-indices.

    <div class="ol-able">..some stuff..</div>
    <div class="ol-able">..some other stuff..</div>
    <div id="front-runner" class="ol-able">..some stuff..</div>

    ...
    
    var overlapper = new Overlapper();
    
    $('#moveToFrontBtn').click(function() {
      overlapper.moveToFront($('#front-runner'));
    });

Want to move the DOM element to the back of the set? Register a custom event and
call moveToBack(elem) instead of moveToFront(elem).
