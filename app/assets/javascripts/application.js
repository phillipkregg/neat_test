// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require selectivizr
//= require_tree .


$(document).ready(function() {
	
	// Limit scope pollution from any deprecated API
	(function() {
	
	    var matched, browser;
	
	// Use of jQuery.browser is frowned upon.
	// More details: http://api.jquery.com/jQuery.browser
	// jQuery.uaMatch maintained for back-compat
	    jQuery.uaMatch = function( ua ) {
	        ua = ua.toLowerCase();
	
	        var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
	            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
	            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
	            /(msie) ([\w.]+)/.exec( ua ) ||
	            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
	            [];
	
	        return {
	            browser: match[ 1 ] || "",
	            version: match[ 2 ] || "0"
	        };
	    };
	
	    matched = jQuery.uaMatch( navigator.userAgent );
	    browser = {};
	
	    if ( matched.browser ) {
	        browser[ matched.browser ] = true;
	        browser.version = matched.version;
	    }
	
	// Chrome is Webkit, but Webkit is also Safari.
	    if ( browser.chrome ) {
	        browser.webkit = true;
	    } else if ( browser.webkit ) {
	        browser.safari = true;
	    }
	
	    jQuery.browser = browser;
	
	    jQuery.sub = function() {
	        function jQuerySub( selector, context ) {
	            return new jQuerySub.fn.init( selector, context );
	        }
	        jQuery.extend( true, jQuerySub, this );
	        jQuerySub.superclass = this;
	        jQuerySub.fn = jQuerySub.prototype = this();
	        jQuerySub.fn.constructor = jQuerySub;
	        jQuerySub.sub = this.sub;
	        jQuerySub.fn.init = function init( selector, context ) {
	            if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
	                context = jQuerySub( context );
	            }
	
	            return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
	        };
	        jQuerySub.fn.init.prototype = jQuerySub.fn;
	        var rootjQuerySub = jQuerySub(document);
	        return jQuerySub;
	    };
	
	})();
	
	$(function() {
	  if ($.browser.msie && $.browser.version.substr(0,1)<7)
	  {
		$('li').has('ul').mouseover(function(){
			$(this).children('ul').css('visibility','visible');
			}).mouseout(function(){
			$(this).children('ul').css('visibility','hidden');
			})
	  }
	}); 
	
	
});
