/*!
 * jquery.away 1.0
 *
 * Released under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */
;(function($) {

	// away flag
	var away;

	// attached functions
	var callback = {};

	// idle time in seconds
	var seconds = 1;

	// core timer
	setInterval(function() {
		if (callback[seconds]) {
			// we have (at least one) callback
			for (var i = 0; i < callback[seconds].length; ++i) {
				callback[seconds][i]();
			}
		}
		// increment idle time
		++seconds;
	}, 1000);

	// reset idle time when active
	$(document).on('DOMMouseScroll keydown mousedown mousemove mousewheel touchstart', function() {
		seconds = 0;
	});

	// attach a function, retrieves functions o returns idle time
	$.idle = function(n, fn) {
		if (arguments.length === 2) {
			// two arguments, add callback
			if (!callback[n]) {
				callback[n] = [];
			}
			return callback[n].push(fn);
		} else if (arguments.length == 1) {
			// one argument, return callbacks
			return callback[n] || [];
		} else {
			// no arguments, return idle time
			return seconds;
		}
	};

	// mark / unmark client as away
	$.away = function(message) {
		if (message) {
			away = message;
		} else {
			away = null;
		}
	};

	// return wether client is away or not
	$.isAway = function() {
		return !!away;
	};

})(jQuery);