# jquery-away

Utils for detecting inactive clients

## Usage example

    setInterval(function() {
        console.log('idle time: ' + $.idle());
    }, 2000);

    $.idle(30, function() {
        console.log('are you there?');
    });

    $.idle(60, function() {
        console.log('going away :)');
        $.away('autoaway');
    });

    $.idle(0, function() {
        if ($.isAway()) {
            console.log('back from away');
            $.away();
        }
    });


## Functions

### $.idle()
Return idle time in seconds

### $.idle(n)
Return registered callbacks for specified seconds

### $.idle(n, function)
Register a callback to be run when N idle seconds occurs

### $.away(message)
Mark the client as away

### $.away()
Mark the client as not away

### $.isAway()
Return wether the client is away or not