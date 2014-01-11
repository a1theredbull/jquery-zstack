## jquery-zstack

Need a document with a many overlapping DOM elements?  This jQuery plugin manages one or more stacks of these
elements through z-indices.  It provides the ability to push bottom elements to the top of the z-index stack
while maintaining the other z-indices in the stack.

Works well with jQuery UI draggable elements.
An example is available in demo.html.

### Basic Usage

Include jQuery and jquery-zstack

    <script src="jquery.js"></script>
    <script src="jquery-zstack.js"></script>
    
Give same class to a stack

    <div class="stackOne">...</div>
    <div class="stackOne">...</div>
    <div class="stackOne">...</div>
    <div class="stackTwo">...</div>
    <div class="stackTwo">...</div>
    
Initialize in javascript

    $('.stackOne').zStack();
    $('.stackTwo').zStack( { zStart: 3 } );
    
### Options

#### trigger (default: 'click', 'hover')
The trigger to move the element to the top of the stack.

#### zStart (default: 0)
The z-index to start the stack on.


