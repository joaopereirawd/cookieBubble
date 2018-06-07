/****************************************
 * cookieBubble.js: Version 1.0
 * author: João Pereira
 * website: http://www.joaopereira.pt
 * email: joaopereirawd@gmail.com
 * Licensed MIT 
*****************************************/
jQuery.fn.cookieBubble = function( options ) {
 
    //default settings:
    var defaults = {
        cookieBubbleName: "cookieBubble",
        maxAge:30
   
    };
 
    var settings = $.extend( {}, defaults, options );


    		var cookieApp = {

    			setCookie:function(cname,cvalue,exdays) {
				    var d = new Date();
				    d.setTime(d.getTime() + (exdays*24*60*60*1000));
				    var expires = "expires=" + d.toGMTString();
				    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
				},
				getCookie: function(cname) {
				    var name = cname + "=";
				    var decodedCookie = decodeURIComponent(document.cookie);
				    var ca = decodedCookie.split(';');
				    for(var i = 0; i < ca.length; i++) {
				        var c = ca[i];
				        while (c.charAt(0) == ' ') {
				            c = c.substring(1);
				        }
				        if (c.indexOf(name) == 0) {
				            return c.substring(name.length, c.length);
				        }
				    }
				    return "";
				},
				checkCookie: function() {
				    var get_cookie = cookieApp.getCookie(defaults.cookieBubbleName);

				    if (get_cookie != "" && get_cookie != null) {
				        //console.log(get_cookie);
				    } else {
				       $('.cookieBubble').show();
				    }
				},
				applyCookie: function(godown) {
					cookieApp.setCookie(defaults.cookieBubbleName, defaults.maxAge); 
					$('.cookieBubble').hide();
				}

    		}

    		$('.accept-btn').click(function(event) {
				cookieApp.applyCookie();
			});


 			/*function setCookie(cname,cvalue,exdays) {
			    var d = new Date();
			    d.setTime(d.getTime() + (exdays*24*60*60*1000));
			    var expires = "expires=" + d.toGMTString();
			    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
			}

			function getCookie(cname) {
			    var name = cname + "=";
			    var decodedCookie = decodeURIComponent(document.cookie);
			    var ca = decodedCookie.split(';');
			    for(var i = 0; i < ca.length; i++) {
			        var c = ca[i];
			        while (c.charAt(0) == ' ') {
			            c = c.substring(1);
			        }
			        if (c.indexOf(name) == 0) {
			            return c.substring(name.length, c.length);
			        }
			    }
			    return "";
			}

			function checkCookie() {	
			    var get_cookie = getCookie("cookieBubble");

			    if (get_cookie != "" && get_cookie != null) {
			        //console.log(get_cookie);
			    } else {
			       $('.cookieBubble').show();
			    }
			}

			
			$('.accept-btn').click(function(event) {
				setcookie();
			});

			function setcookie() { 
			    setCookie("cookieBubble", 30); 
			}*/



    return this.each(function() { cookieApp.checkCookie(); });
 
};




