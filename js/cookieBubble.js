/****************************************
 * cookieBubble.js: Version 1.0
 * author: João Pereira
 * website: http://www.joaopereira.pt
 * email: joaopereirawd@gmail.com
 * Licensed MIT 
*****************************************/
(function ($) {

	$.fn.cookieBubble = function (options) {

			var thiis = $(this);

			//Defaults
			var settings = $.extend({	
				icon:true,
				iconColor:false,
				buttonColor:false,
				buttonTextColor:false,
				buttonRadius:false,
				//Cookie cnf
				cookieMaxAge:30
			}, options);


			//icons available  
			var cookie_svg = {
				icon_1:'<div class="cb-image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.93 97.93"><defs><style>.cookie-inner{fill:'+settings.iconColor+'!important'+'}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M44,23.76a2.47,2.47,0,1,0,.91,3.37A2.47,2.47,0,0,0,44,23.76Z"/><path d="M25.9,40.32a2.47,2.47,0,0,0,0,4.93h0a2.47,2.47,0,1,0,0-4.93Z"/><circle cx="32.08" cy="65.86" r="2.47"/><path d="M56.38,69.91a2.47,2.47,0,1,0,1.14,1.49A2.47,2.47,0,0,0,56.38,69.91Z"/><path d="M72,52.68a2.47,2.47,0,0,0-2.38,1.83,2.44,2.44,0,0,0,.25,1.87,2.47,2.47,0,0,0,4.52-.59,2.44,2.44,0,0,0-.25-1.87A2.47,2.47,0,0,0,72,52.68Z"/><path class="cookie-inner" d="M89.51,52.86A14,14,0,0,1,81,47.2,14.09,14.09,0,0,1,61,35.68,14.09,14.09,0,0,1,49.49,15.73a14,14,0,0,1-5.66-8.55,44,44,0,0,0-21.09,6.15A44.26,44.26,0,0,0,71.46,87.08,44.24,44.24,0,0,0,89.51,52.86ZM28.28,43.42a2.47,2.47,0,0,1-2.38,1.83h0a2.47,2.47,0,1,1,2.38-1.83Zm3.8,24.9a2.47,2.47,0,1,1,2.47-2.47A2.47,2.47,0,0,1,32.08,68.32ZM44.92,27.13A2.47,2.47,0,1,1,44,23.76,2.47,2.47,0,0,1,44.92,27.13ZM57.28,73.27a2.47,2.47,0,1,1-.9-3.36,2.47,2.47,0,0,1,.9,3.36ZM74.42,55.79a2.47,2.47,0,1,1-.25-1.87A2.45,2.45,0,0,1,74.42,55.79Z"/><path d="M97.93,48.52v-.2A2.35,2.35,0,0,0,95.7,46a9.37,9.37,0,0,1-8-5.45,2.35,2.35,0,0,0-3.49-.93,9.51,9.51,0,0,1-5.44,1.72A9.4,9.4,0,0,1,69.39,31.1a2.35,2.35,0,0,0-2.55-2.55c-.28,0-.57,0-.85,0a9.39,9.39,0,0,1-7.68-14.81,2.35,2.35,0,0,0-.93-3.49,9.37,9.37,0,0,1-5.45-8A2.35,2.35,0,0,0,49.61,0H49a49,49,0,1,0,49,49C97.93,48.82,97.93,48.67,97.93,48.52ZM71.46,87.08A44.26,44.26,0,0,1,22.74,13.33,44,44,0,0,1,47.53,4.72a14,14,0,0,0,5.66,8.55A14.09,14.09,0,0,0,64.71,33.22,14.09,14.09,0,0,0,84.66,44.75a14,14,0,0,0,8.56,5.66A44.3,44.3,0,0,1,71.46,87.08Z"/></g></g></svg></div>'
			}

			//Cooking things function
			var cookieApp = {
				init:function() {
					var cb_icon = settings.icon;
				
						if (cb_icon) {
							cookieApp.addIcon(settings.icon);
						} else {
							var icon_container = thiis.find('.cb-image');
							    icon_container.remove();
						}
				
						cookieApp.checkCookie(); 

				}, 
				addIcon:function(icon) {
		
					var img_target = thiis.find('.cb-row');  //this is the target where SVG image will be inserted

			       	var cookie_img = settings.icon;

				       	switch (cookie_img) {
				       	   	case 'cookie_icon_1': img_target.prepend(cookie_svg.icon_1); break;	
				       	   	default: img_target.prepend(cookie_svg.icon_1);
				                
				       	}
		          				
				},

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
				    var get_cookie = cookieApp.getCookie('cookieBubble');

				    if (get_cookie != "" && get_cookie != null) {
				    	
				        thiis.hide(); //Hide cookieBuble
				    } else {
				        thiis.show(); //Show cookieBuble
						var button = thiis.find('.gotit-btn'); //Got it Button
						
							if (settings.buttonColor) button.css('background-color', settings.buttonColor );
							if (settings.buttonTextColor) button.css('color', settings.buttonTextColor );
							if (settings.buttonRadius) button.css('border-radius', settings.buttonRadius );

				    		button.click(function(event) {
								cookieApp.setCookie('cookieBubble', 'hide', settings.cookieMaxAge); 
								thiis.hide();
						});
				    }
				},

			}

    		//Each function
			return this.each(function () {
				cookieApp.init();	
			});
	};


})(jQuery);


