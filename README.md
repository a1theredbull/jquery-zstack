## Overlap.js

### Description 

Small javascript library to make z-index manipulation easier

### What does it do?

Does stackable divs for you. Clicking a lower z-index element will bring it
to the foreground and automatically manage the z-indexes of other elements of
class "ol-able".

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

### Options

Currently only one option exists:

zStart

    overlapper.init({ zStart: 4 })

This will initialize the DOM elements of class "ol-able" to start at z-index 4.

### Other Usage

moveToBack(elem) - Want to move the DOM element to the back of the set? Register
a custom event and call moveToBack(elem).

    <div class="ol-able">..some stuff..</div>
    <div class="ol-able">..some other stuff..</div>
    <div id="back-lurker" class="ol-able">..some stuff..</div>

    ...

    $('#moveToBackBtn').click(function() {
      overlapper.moveToBack($('#back-lurker'));
    });
