var mr_firstSectionHeight,mr_nav,mr_fixedAt,mr_navOuterHeight,mr_floatingProjectSections,mr_navScrolled=!1,mr_navFixed=!1,mr_outOfSight=!1,mr_scrollTop=0;function updateNav(){var e=mr_scrollTop;if(e<=0)return mr_navFixed&&(mr_navFixed=!1,mr_nav.removeClass("fixed")),mr_outOfSight&&(mr_outOfSight=!1,mr_nav.removeClass("outOfSight")),void(mr_navScrolled&&(mr_navScrolled=!1,mr_nav.removeClass("scrolled")));if(mr_navOuterHeight+mr_fixedAt<e){if(!mr_navScrolled)return mr_nav.addClass("scrolled"),void(mr_navScrolled=!0)}else mr_navOuterHeight<e?(mr_navFixed||(mr_nav.addClass("fixed"),mr_navFixed=!0),mr_navOuterHeight+10<e?mr_outOfSight||(mr_nav.addClass("outOfSight"),mr_outOfSight=!0):mr_outOfSight&&(mr_outOfSight=!1,mr_nav.removeClass("outOfSight"))):(mr_navFixed&&(mr_navFixed=!1,mr_nav.removeClass("fixed")),mr_outOfSight&&(mr_outOfSight=!1,mr_nav.removeClass("outOfSight"))),mr_navScrolled&&(mr_navScrolled=!1,mr_nav.removeClass("scrolled"))}function capitaliseFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}function initializeMasonry(){$(".masonry").each(function(){var e=$(this).get(0),t=new Masonry(e,{itemSelector:".masonry-item"});t.on("layoutComplete",function(){mr_firstSectionHeight=$(".main-container section:nth-of-type(1)").outerHeight(!0),$(".filters.floating").length&&(setupFloatingProjectFilters(),updateFloatingFilters(),window.addEventListener("scroll",updateFloatingFilters,!1)),$(".masonry").addClass("fadeIn"),$(".masonry-loader").addClass("fadeOut"),$(".masonryFlyIn").length&&masonryFlyIn()}),t.layout()})}function masonryFlyIn(){var e=$(".masonryFlyIn .masonry-item"),t=0;e.each(function(){var e=$(this);setTimeout(function(){e.addClass("fadeIn")},t),t+=170})}function setupFloatingProjectFilters(){mr_floatingProjectSections=[],$(".filters.floating").closest("section").each(function(){var e=$(this);mr_floatingProjectSections.push({section:e.get(0),outerHeight:e.outerHeight(),elemTop:e.offset().top,elemBottom:e.offset().top+e.outerHeight(),filters:e.find(".filters.floating"),filersHeight:e.find(".filters.floating").outerHeight(!0)})})}function updateFloatingFilters(){for(var e=mr_floatingProjectSections.length;e--;){var t=mr_floatingProjectSections[e];t.elemTop<mr_scrollTop&&void 0===window.mr_variant?(t.filters.css({position:"fixed",top:"16px",bottom:"auto"}),mr_navScrolled&&t.filters.css({transform:"translate3d(-50%,48px,0)"}),mr_scrollTop>t.elemBottom-70&&(t.filters.css({position:"absolute",bottom:"16px",top:"auto"}),t.filters.css({transform:"translate3d(-50%,0,0)"}))):t.filters.css({position:"absolute",transform:"translate3d(-50%,0,0)"})}}function prepareSignup(e){var t,o=jQuery("<form />"),a=jQuery("<div />");return jQuery(a).html(e.attr("srcdoc")),t=jQuery(a).find("form").attr("action"),/list-manage\.com/.test(t)&&"//"==(t=t.replace("/post?","/post-json?")+"&c=?").substr(0,2)&&(t="http:"+t),/createsend\.com/.test(t)&&(t+="?callback=?"),o.attr("action",t),jQuery(a).find("input, select, textarea").not('input[type="submit"]').each(function(){jQuery(this).clone().appendTo(o)}),o}$(document).ready(function(){"use strict";var e,t=$("a.inner-link");if(t.length){t.each(function(){var e=$(this);"#"!==e.attr("href").charAt(0)&&e.removeClass("inner-link")});var o=0;$("body[data-smooth-scroll-offset]").length&&(o=$("body").attr("data-smooth-scroll-offset"),o*=1),smoothScroll.init({selector:".inner-link",selectorHeader:null,speed:750,easing:"easeInOutCubic",offset:o})}if(addEventListener("scroll",function(){mr_scrollTop=window.pageYOffset},!1),$(".background-image-holder").each(function(){var e=$(this).children("img").attr("src");$(this).css("background",'url("'+e+'")'),$(this).children("img").hide(),$(this).css("background-position","initial")}),setTimeout(function(){$(".background-image-holder").each(function(){$(this).addClass("fadeIn")})},200),$('[data-toggle="tooltip"]').tooltip(),$("ul[data-bullet]").each(function(){var e=$(this).attr("data-bullet");$(this).find("li").prepend('<i class="'+e+'"></i>')}),$(".progress-bar").each(function(){$(this).css("width",$(this).attr("data-progress")+"%")}),$("nav").hasClass("fixed")||$("nav").hasClass("absolute")?$("body").addClass("nav-is-overlay"):($(".nav-container").css("min-height",$("nav").outerHeight(!0)),$(window).resize(function(){$(".nav-container").css("min-height",$("nav").outerHeight(!0))}),768<$(window).width()&&$(".parallax:nth-of-type(1) .background-image-holder").css("top",-$("nav").outerHeight(!0)),768<$(window).width()&&$("section.fullscreen:nth-of-type(1)").css("height",$(window).height()-$("nav").outerHeight(!0))),$("nav").hasClass("bg-dark")&&$(".nav-container").addClass("bg-dark"),mr_nav=$("body .nav-container nav:first"),mr_navOuterHeight=$("body .nav-container nav:first").outerHeight(),mr_fixedAt=void 0!==mr_nav.attr("data-fixed-at")?parseInt(mr_nav.attr("data-fixed-at").replace("px","")):parseInt($("section:nth-of-type(1)").outerHeight()),window.addEventListener("scroll",updateNav,!1),$(".menu > li > ul").each(function(){var e=$(this).offset(),t=e.left+$(this).outerWidth(!0);if(t>$(window).width()&&!$(this).hasClass("mega-menu"))$(this).addClass("make-right");else if(t>$(window).width()&&$(this).hasClass("mega-menu")){var o=$(window).width()-e.left,a=$(this).outerWidth(!0)-o;$(this).css("margin-left",-a)}}),$(".mobile-toggle").click(function(){$(".nav-bar").toggleClass("nav-open"),$(this).toggleClass("active")}),$(".menu li").click(function(e){e||(e=window.event),e.stopPropagation(),$(this).find("ul").length?$(this).toggleClass("toggle-sub"):$(this).parents(".toggle-sub").removeClass("toggle-sub")}),$(".menu li a").click(function(){$(this).hasClass("inner-link")&&$(this).closest(".nav-bar").removeClass("nav-open")}),$(".module.widget-handle").click(function(){$(this).toggleClass("toggle-widget-handle")}),$(".search-widget-handle .search-form input").click(function(e){e||(e=window.event),e.stopPropagation()}),$(".offscreen-toggle").length?$("body").addClass("has-offscreen-nav"):$("body").removeClass("has-offscreen-nav"),$(".offscreen-toggle").click(function(){$(".main-container").toggleClass("reveal-nav"),$("nav").toggleClass("reveal-nav"),$(".offscreen-container").toggleClass("reveal-nav")}),$(".main-container").click(function(){$(this).hasClass("reveal-nav")&&($(this).removeClass("reveal-nav"),$(".offscreen-container").removeClass("reveal-nav"),$("nav").removeClass("reveal-nav"))}),$(".offscreen-container a").click(function(){$(".offscreen-container").removeClass("reveal-nav"),$(".main-container").removeClass("reveal-nav"),$("nav").removeClass("reveal-nav")}),$(".projects").each(function(){var t="";$(this).find(".project").each(function(){$(this).attr("data-filter").split(",").forEach(function(e){-1==t.indexOf(e)&&(t+='<li data-filter="'+e+'">'+capitaliseFirstLetter(e)+"</li>")}),$(this).closest(".projects").find("ul.filters").empty().append('<li data-filter="all" class="active">All</li>').append(t)})}),$(".filters li").click(function(){var e=$(this).attr("data-filter");$(this).closest(".filters").find("li").removeClass("active"),$(this).addClass("active"),$(this).closest(".projects").find(".project").each(function(){-1==$(this).attr("data-filter").indexOf(e)?$(this).addClass("inactive"):$(this).removeClass("inactive")}),"all"==e&&$(this).closest(".projects").find(".project").removeClass("inactive")}),$(".slider-all-controls, .slider-paging-controls, .slider-arrow-controls, .slider-thumb-controls, .logo-carousel").length&&($(".slider-all-controls").flexslider({start:function(e){e.find(".slides li:first-child").find(".fs-vid-background video").length&&e.find(".slides li:first-child").find(".fs-vid-background video").get(0).play()},after:function(e){e.find(".fs-vid-background video").length&&(e.find("li:not(.flex-active-slide)").find(".fs-vid-background video").length&&e.find("li:not(.flex-active-slide)").find(".fs-vid-background video").get(0).pause(),e.find(".flex-active-slide").find(".fs-vid-background video").length&&e.find(".flex-active-slide").find(".fs-vid-background video").get(0).play())}}),$(".slider-paging-controls").flexslider({animation:"slide",directionNav:!1}),$(".slider-arrow-controls").flexslider({controlNav:!1}),$(".slider-thumb-controls .slides li").each(function(){var e=$(this).find("img").attr("src");$(this).attr("data-thumb",e)}),$(".slider-thumb-controls").flexslider({animation:"slide",controlNav:"thumbnails",directionNav:!0}),$(".logo-carousel").flexslider({minItems:1,maxItems:4,move:1,itemWidth:200,itemMargin:0,animation:"slide",slideshow:!0,slideshowSpeed:3e3,directionNav:!1,controlNav:!1})),$(".lightbox-grid li a").each(function(){var e=$(this).closest(".lightbox-grid").attr("data-gallery-title");$(this).attr("data-lightbox",e)}),$("iframe[data-provider]").each(function(){var e=jQuery(this).attr("data-provider"),t=jQuery(this).attr("data-video-id"),o=jQuery(this).attr("data-autoplay"),a="";"vimeo"==e?(a="http://player.vimeo.com/video/"+t+"?badge=0&title=0&byline=0&title=0&autoplay="+o,$(this).attr("data-src",a)):"youtube"==e?(a="https://www.youtube.com/embed/"+t+"?showinfo=0&autoplay="+o,$(this).attr("data-src",a)):console.log("Only Vimeo and Youtube videos are supported at this time")}),jQuery(".foundry_modal[modal-link]").remove(),$(".foundry_modal").length&&!jQuery(".modal-screen").length)jQuery("<div />").addClass("modal-screen").appendTo("body");function h(e){var t,o;return $(e).find('.validate-required[type="checkbox"]').each(function(){$('[name="'+$(this).attr("name")+'"]:checked').length||(o=1,t=$(this).attr("name").replace("[]",""),e.find(".form-error").text("Please tick at least one "+t+" box."))}),$(e).find(".validate-required").each(function(){""===$(this).val()?($(this).addClass("field-error"),o=1):$(this).removeClass("field-error")}),$(e).find(".validate-email").each(function(){/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())?$(this).removeClass("field-error"):($(this).addClass("field-error"),o=1)}),$(e).find(".validate-tel").each(function(){/^([7-9])\d{9}$/.test($(this).val())?$(this).removeClass("field-error"):($(this).addClass("field-error"),e.find(".form-error").text("Enter a valid phone number without +91 or 0"),o=1)}),$(e).find(".validate-text-only-letters").each(function(){/^([A-Za-z ]+)$/.test($(this).val())?$(this).removeClass("field-error"):($(this).addClass("field-error"),o=1)}),e.find(".field-error").length||e.find(".form-error").fadeOut(1e3),o}function a(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null}if(jQuery(".foundry_modal").click(function(){jQuery(this).addClass("modal-acknowledged")}),jQuery(document).on("wheel mousewheel scroll",".foundry_modal, .modal-screen",function(e){return $(this).get(0).scrollTop+=e.originalEvent.deltaY,!1}),$(".modal-container:not([modal-link])").each(function(e){if(jQuery(this).find("iframe[src]").length){jQuery(this).find(".foundry_modal").addClass("iframe-modal");var t=jQuery(this).find("iframe");t.attr("data-src",t.attr("src")),t.attr("src","")}jQuery(this).find(".btn-modal").attr("modal-link",e),jQuery('.foundry_modal[modal-link="'+e+'"]').length||jQuery(this).find(".foundry_modal").clone().appendTo("body").attr("modal-link",e).prepend(jQuery('<i class="ti-close close-modal">'))}),$(".btn-modal").unbind("click").click(function(){var e=jQuery('.foundry_modal[modal-link="'+jQuery(this).attr("modal-link")+'"]'),t="";if(jQuery(".modal-screen").toggleClass("reveal-modal"),e.find("iframe").length){if("1"===e.find("iframe").attr("data-autoplay"))t="&autoplay=1";e.find("iframe").attr("src",e.find("iframe").attr("data-src")+t)}return e.find("video").length&&e.find("video").get(0).play(),e.toggleClass("reveal-modal"),!1}),$(".foundry_modal[data-time-delay]").each(function(){var e=$(this),t=e.attr("data-time-delay");e.prepend($('<i class="ti-close close-modal">')),void 0!==e.attr("data-cookie")&&mr_cookies.hasItem(e.attr("data-cookie"))||setTimeout(function(){e.addClass("reveal-modal"),$(".modal-screen").addClass("reveal-modal")},t)}),$(".foundry_modal[data-show-on-exit]").each(function(){var e=$(this),t=$(e.attr("data-show-on-exit"));$(t).length&&(e.prepend($('<i class="ti-close close-modal">')),$(document).on("mouseleave",t,function(){$("body .reveal-modal").length||void 0!==e.attr("data-cookie")&&mr_cookies.hasItem(e.attr("data-cookie"))||(e.addClass("reveal-modal"),$(".modal-screen").addClass("reveal-modal"))}))}),$(".foundry_modal[data-hide-after]").each(function(){var e=$(this),t=e.attr("data-hide-after");void 0!==e.attr("data-cookie")&&mr_cookies.hasItem(e.attr("data-cookie"))||setTimeout(function(){e.hasClass("modal-acknowledged")||(e.removeClass("reveal-modal"),$(".modal-screen").removeClass("reveal-modal"))},t)}),jQuery(".close-modal:not(.modal-strip .close-modal)").unbind("click").click(function(){var e=jQuery(this).closest(".foundry_modal");e.toggleClass("reveal-modal"),void 0!==e.attr("data-cookie")&&mr_cookies.setItem(e.attr("data-cookie"),"true",1/0),e.find("iframe").length&&e.find("iframe").attr("src",""),jQuery(".modal-screen").removeClass("reveal-modal")}),jQuery(".modal-screen").unbind("click").click(function(){jQuery(".foundry_modal.reveal-modal").find("iframe").length&&jQuery(".foundry_modal.reveal-modal").find("iframe").attr("src",""),jQuery(".foundry_modal.reveal-modal").toggleClass("reveal-modal"),jQuery(this).toggleClass("reveal-modal")}),jQuery(document).keyup(function(e){27==e.keyCode&&(jQuery(".foundry_modal").find("iframe").length&&jQuery(".foundry_modal").find("iframe").attr("src",""),jQuery(".foundry_modal").removeClass("reveal-modal"),jQuery(".modal-screen").removeClass("reveal-modal"))}),jQuery(".modal-strip").each(function(){jQuery(this).find(".close-modal").length||jQuery(this).append(jQuery('<i class="ti-close close-modal">'));var e=jQuery(this);void 0!==e.attr("data-cookie")&&mr_cookies.hasItem(e.attr("data-cookie"))||setTimeout(function(){e.addClass("reveal-modal")},1e3)}),jQuery(".modal-strip .close-modal").click(function(){var e=jQuery(this).closest(".modal-strip");return void 0!==e.attr("data-cookie")&&mr_cookies.setItem(e.attr("data-cookie"),"true",1/0),jQuery(this).closest(".modal-strip").removeClass("reveal-modal"),!1}),jQuery(".close-iframe").click(function(){jQuery(this).closest(".modal-video").removeClass("reveal-modal"),jQuery(this).siblings("iframe").attr("src",""),jQuery(this).siblings("video").get(0).pause()}),$(".checkbox-option").on("click",function(){$(this).toggleClass("checked");var e=$(this).find("input");!1===e.prop("checked")?e.prop("checked",!0):e.prop("checked",!1)}),$(".radio-option").click(function(){var e=$(this).hasClass("checked"),t=$(this).find("input").attr("name");e||($('input[name="'+t+'"]').parent().removeClass("checked"),$(this).addClass("checked"),$(this).find("input").prop("checked",!0))}),$(".accordion li").click(function(){$(this).closest(".accordion").hasClass("one-open")?($(this).closest(".accordion").find("li").removeClass("active"),$(this).addClass("active")):$(this).toggleClass("active"),void 0!==window.mr_parallax&&setTimeout(mr_parallax.windowLoad,500)}),$(".tabbed-content").each(function(){$(this).append('<ul class="content"></ul>')}),$(".tabs li").each(function(){var e=$(this),t="";e.is(".tabs>li:first-child")&&(t=' class="active"');var o=e.find(".tab-content").detach().wrap("<li"+t+"></li>").parent();e.closest(".tabbed-content").find(".content").append(o)}),$(".tabs li").click(function(){$(this).closest(".tabs").find("li").removeClass("active"),$(this).addClass("active");var e=$(this).index()+1;$(this).closest(".tabbed-content").find(".content>li").removeClass("active"),$(this).closest(".tabbed-content").find(".content>li:nth-of-type("+e+")").addClass("active")}),$("section").closest("body").find(".local-video-container .play-button").click(function(){$(this).siblings(".background-image-holder").removeClass("fadeIn"),$(this).siblings(".background-image-holder").css("z-index",-1),$(this).css("opacity",0),$(this).siblings("video").get(0).play()}),$("section").closest("body").find(".player").each(function(){$(this).closest("section").find(".container").addClass("fadeOut");var e=$(this).attr("data-video-id"),t=$(this).attr("data-start-at");$(this).attr("data-property","{videoURL:'http://youtu.be/"+e+"',containment:'self',autoPlay:true, mute:true, startAt:"+t+", opacity:1, showControls:false}")}),$(".player").length&&$(".player").each(function(){var t=$(this).closest("section"),e=t.find(".player");e.YTPlayer(),e.on("YTPStart",function(e){t.find(".container").removeClass("fadeOut"),t.find(".masonry-loader").addClass("fadeOut")})}),$(".map-holder").click(function(){$(this).addClass("interact")}),$(".map-holder").length&&$(window).scroll(function(){$(".map-holder.interact").length&&$(".map-holder.interact").removeClass("interact")}),$(".countdown").length&&$(".countdown").each(function(){var e=$(this).attr("data-date");$(this).countdown(e,function(e){$(this).text(e.strftime("%D days %H:%M:%S"))})}),$("form.form-email, form.form-newsletter").submit(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1;var t,o,a,n,i,r,s,l,c,d=$(this).closest("form.form-email, form.form-newsletter"),u=d.find('button[type="submit"]'),f=d.attr("original-error");if(o=$(d).find("iframe.mail-list-form"),d.find(".form-error, .form-success").remove(),u.attr("data-text",u.text()),d.append('<div class="form-error" style="display: none;">'+d.attr("data-error")+"</div>"),d.append('<div class="form-success" style="display: none;">'+d.attr("data-success")+"</div>"),l=d.find(".form-error"),c=d.find(".form-success"),d.addClass("attempted-submit"),o.length&&void 0!==o.attr("srcdoc")&&""!==o.attr("srcdoc"))if(console.log("Mail list form signup detected."),void 0!==f&&!1!==f&&l.html(f),a=$(d).find(".signup-email-field").val(),n=$(d).find(".signup-name-field").val(),i=$(d).find("input.signup-first-name-field").length?$(d).find("input.signup-first-name-field").val():$(d).find(".signup-name-field").val(),r=$(d).find(".signup-last-name-field").val(),1!==h(d)){(t=prepareSignup(o)).find("#mce-EMAIL, #fieldEmail").val(a),t.find("#mce-LNAME, #fieldLastName").val(r),t.find("#mce-FNAME, #fieldFirstName").val(i),t.find("#mce-NAME, #fieldName").val(n),d.removeClass("attempted-submit"),l.fadeOut(200),u.html(jQuery("<div />").addClass("form-loading")).attr("disabled","disabled");try{$.ajax({url:t.attr("action"),crossDomain:!0,data:t.serialize(),method:"GET",cache:!1,dataType:"json",contentType:"application/json; charset=utf-8",success:function(e){"success"!=e.result&&200!=e.Status?(l.attr("original-error",l.text()),l.html(e.msg).fadeIn(1e3),c.fadeOut(1e3),u.html(u.attr("data-text")).removeAttr("disabled")):(u.html(u.attr("data-text")).removeAttr("disabled"),void 0!==(s=d.attr("success-redirect"))&&!1!==s&&""!==s&&(window.location=s),d.find('input[type="text"]').val(""),d.find("textarea").val(""),c.fadeIn(1e3),l.fadeOut(1e3),setTimeout(function(){c.fadeOut(500)},5e3))}})}catch(e){l.attr("original-error",l.text()),l.html(e.message).fadeIn(1e3),c.fadeOut(1e3),setTimeout(function(){l.fadeOut(500)},5e3),u.html(u.attr("data-text")).removeAttr("disabled")}}else l.fadeIn(1e3),setTimeout(function(){l.fadeOut(500)},5e3);else if(void 0!==f&&!1!==f&&l.text(f),1===h(d))l.fadeIn(200),setTimeout(function(){l.fadeOut(500)},3e3);else{var m,g;switch(d.removeClass("attempted-submit"),l.fadeOut(200),u.html(jQuery("<div />").addClass("form-loading")).attr("disabled","disabled"),d.attr("id")){case"message-form":console.log("Send message form detected."),g="/mail/send";break;case"signup-form":console.log("Send signup form detected."),g="/api/signup";break;case"signup-taarangana":console.log("Send event form detected."),g="/api/event_signup";break;case"job_signup":console.log("Send event form detected."),g="/api/job_signup";break;case"startup_signup":console.log("Send event form detected."),g="/api/startup_signup";break;case"projects":console.log("Send event form detected."),g="/api/projects"}m="https://cbcom.cb.lk",console.log("url = "+g),jQuery.ajax({type:"POST",url:m+g,data:d.serialize()+"&url="+window.location.href,success:function(e){u.html(u.attr("data-text")).removeAttr("disabled"),console.log("response = "+e),"OK"==e?(void 0!==(s=d.attr("success-redirect"))&&!1!==s&&""!==s&&(window.location=s),d.find('input[type="text"]').val(""),d.find("textarea").val(""),d.find(".form-success").fadeIn(1e3),l.fadeOut(1e3),setTimeout(function(){c.fadeOut(500)},5e3)):(l.attr("original-error",l.text()),l.text(e).fadeIn(1e3),c.fadeOut(1e3))},error:function(e,t,o){l.attr("original-error",l.text()),l.text(o).fadeIn(1e3),c.fadeOut(1e3),u.html(u.attr("data-text")).removeAttr("disabled")}})}return!1}),$(".validate-required, .validate-email").on("blur change",function(){h($(this).closest("form"))}),$("form").each(function(){$(this).find(".form-error").length&&$(this).attr("original-error",$(this).find(".form-error").text())}),a("ref")&&$("form.form-email").append('<input type="text" name="referrer" class="hidden" value="'+a("ref")+'"/>'),/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)&&$("section").removeClass("parallax"),$(".disqus-comments").length){var n=$(".disqus-comments").attr("data-shortname");(e=document.createElement("script")).type="text/javascript",e.async=!0,e.src="//"+n+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}if(document.querySelector("[data-maps-api-key]")&&!document.querySelector(".gMapsAPI")&&$("[data-maps-api-key]").length){var i=document.createElement("script"),r=$("[data-maps-api-key]:first").attr("data-maps-api-key");i.type="text/javascript",i.src="https://maps.googleapis.com/maps/api/js?key="+r+"&callback=initializeMaps",i.className="gMapsAPI",document.body.appendChild(i)}!function(){var e=document,t=window;function o(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//code.jivosite.com/script/widget/mm3xh9v8wk";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}"complete"==e.readyState?o():t.attachEvent?t.attachEvent("onload",o):t.addEventListener("load",o,!1)}()}),$(window).load(function(){"use strict";setTimeout(initializeMasonry,1e3),mr_firstSectionHeight=$(".main-container section:nth-of-type(1)").outerHeight(!0)}),window.initializeMaps=function(){"undefined"!=typeof google&&void 0!==google.maps&&$(".map-canvas[data-maps-api-key]").each(function(){var e,a,n=this,t=void 0!==$(this).attr("data-map-style")&&$(this).attr("data-map-style"),o=JSON.parse(t)||[{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],i=void 0!==$(this).attr("data-map-zoom")&&""!==$(this).attr("data-map-zoom")?1*$(this).attr("data-map-zoom"):17,r=void 0!==$(this).attr("data-latlong")&&$(this).attr("data-latlong"),s=!!r&&1*r.substr(0,r.indexOf(",")),l=!!r&&1*r.substr(r.indexOf(",")+1),c=new google.maps.Geocoder,d=void 0!==$(this).attr("data-address")?$(this).attr("data-address").split(";"):[""],u="We Are Here",f={draggable:766<$(document).width(),scrollwheel:!1,zoom:i,disableDefaultUI:!1,styles:o};null!=$(this).attr("data-marker-title")&&""!=$(this).attr("data-marker-title")&&(u=$(this).attr("data-marker-title")),null!=d&&""!=d[0]?c.geocode({address:d[0].replace("[nomarker]","")},function(e,t){if(t==google.maps.GeocoderStatus.OK){var o=new google.maps.Map(n,f);o.setCenter(e[0].geometry.location),d.forEach(function(e){if(a={url:"/img/cb/cb_marker.png",scaledSize:new google.maps.Size(60,100),origin:new google.maps.Point(0,0)},/(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)/.test(e)){var t=e.split(",");new google.maps.Marker({position:{lat:1*t[0],lng:1*t[1]},map:o,icon:a,title:u,optimised:!1})}else e.indexOf("[nomarker]")<0&&(new google.maps.Geocoder).geocode({address:e.replace("[nomarker]","")},function(e,t){t==google.maps.GeocoderStatus.OK&&new google.maps.Marker({map:o,icon:a,title:u,position:e[0].geometry.location,optimised:!1})})})}else console.log("There was a problem geocoding the address.")}):null!=s&&""!=s&&0!=s&&null!=l&&""!=l&&0!=l&&(f.center={lat:s,lng:l},e=new google.maps.Map(n,f),new google.maps.Marker({position:{lat:s,lng:l},map:e,icon:a,title:u}))})},initializeMaps();var mr_cookies={getItem:function(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,t,o,a,n,i){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var r="";if(o)switch(o.constructor){case Number:r=o===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+o;break;case String:r="; expires="+o;break;case Date:r="; expires="+o.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+r+(n?"; domain="+n:"")+(a?"; path="+a:"")+(i?"; secure":""),!0},removeItem:function(e,t,o){return!!this.hasItem(e)&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(o?"; domain="+o:"")+(t?"; path="+t:""),!0)},hasItem:function(e){return!!e&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=e.length,o=0;o<t;o++)e[o]=decodeURIComponent(e[o]);return e}};(function(){var r=this,c=function(e){return"string"==typeof e},e=function(e){return e=parseFloat(e),isNaN(e)||1<e||e<0?0:e},$=e("0.20"),b=e("0.01"),o=!!/^true$/.test("false"),a=Array.prototype.indexOf?function(e,t,o){return Array.prototype.indexOf.call(e,t,o)}:function(e,t,o){if(o=null==o?0:o<0?Math.max(0,e.length+o):o,c(e))return c(t)&&1==t.length?e.indexOf(t,o):-1;for(;o<e.length;o++)if(o in e&&e[o]===t)return o;return-1},n=Array.prototype.filter?function(e,t,o){return Array.prototype.filter.call(e,t,o)}:function(e,t,o){for(var a=e.length,n=[],i=0,r=c(e)?e.split(""):e,s=0;s<a;s++)if(s in r){var l=r[s];t.call(o,l,s,e)&&(n[i++]=l)}return n},i=Array.prototype.map?function(e,t,o){return Array.prototype.map.call(e,t,o)}:function(e,t,o){for(var a=e.length,n=Array(a),i=c(e)?e.split(""):e,r=0;r<a;r++)r in i&&(n[r]=t.call(o,i[r],r,e));return n},s=function(e){var t,o=[],a=0;for(t in e)o[a++]=e[t];return o},l=function(e){return l[" "](e),e};l[" "]=function(){};var k=function(e,t){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(void 0,e[o],o,e)};!function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});r.addEventListener("test",null,t)}catch(e){}}();var Q=function(e,t,o,a){for(var n=o.length;0<=(t=e.indexOf(o,t))&&t<a;){var i=e.charCodeAt(t-1);if((38==i||63==i)&&(!(i=e.charCodeAt(t+n))||61==i||38==i||35==i))return t;t+=n+1}return-1},T=/#|$/,I=function(e,t){var o=e.search(T),a=Q(e,0,t,o);if(a<0)return null;var n=e.indexOf("&",a);return(n<0||o<n)&&(n=o),a+=t.length+1,decodeURIComponent(e.substr(a,n-a).replace(/\+/g," "))},E=/[?&]($|#)/,w=function(){this.h={},this.a={};for(var e=[2,3],t=0,o=e.length;t<o;++t)this.a[e[t]]=""},d=function(){try{var e=r.top.location.hash;if(e){var t=e.match(/\bdeid=([\d,]+)/);return t&&t[1]||""}}catch(e){}return""},C=function(e,t,o){var a=L;if(!o||a.a.hasOwnProperty(o)&&""==a.a[o]){var n;if(n=(n=d().match(new RegExp("\\b("+e.join("|")+")\\b")))&&n[0]||null)e=n;else if(Math.random()<1e-4||!((n=Math.random())<t))e=null;else{try{var i=new Uint32Array(1);r.crypto.getRandomValues(i),n=i[0]/65536/65536}catch(e){n=Math.random()}e=e[Math.floor(n*e.length)]}e&&""!=e&&(o?a.a.hasOwnProperty(o)&&(a.a[o]=e):a.h[e]=!0)}},A=function(e){var t=L;return t.a.hasOwnProperty(e)?t.a[e]:""},M=null,P=null,j="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_remarketing_only google_remarketing_for_search google_conversion_items google_conversion_merchant_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_conversion_page_url google_conversion_referrer_url".split(" "),x=function(e){return null!=e?encodeURIComponent(e.toString()):""},u=function(e){return null!=e?e.toString().substring(0,512):""},O=function(e,t){return""!=(t=x(t))&&""!=(e=x(e))?"&".concat(e,"=",t):""},S=function(e){var t=typeof e;return null==e||"object"==t||"function"==t?null:String(e).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")};function F(e){return"number"!=typeof e&&"string"!=typeof e?"":x(e.toString())}var H=function(e,t,o,a){var n="";if(t){var i;if(e.top==e)i=0;else{var r=e.location.ancestorOrigins;if(r)i=r[r.length-1]==e.location.origin?1:2;else{r=e.top;try{var s;if(s=!!r&&null!=r.location.href)e:{try{l(r.foo),s=!0;break e}catch(e){}s=!1}i=s}catch(e){i=!1}i=i?1:2}}e=o||(1==i?e.top.location.href:e.location.href),n+=O("frm",i),n+=O("url",u(e)),n+=O("ref",u(a||t.referrer))}return n},N=function(e,t){return!(o||t&&f.test(navigator.userAgent))||e&&e.location&&e.location.protocol&&"https:"==e.location.protocol.toString().toLowerCase()?"https:":"http:"},R={g:{c:"27391101",b:"27391102"},f:{c:"376635470",b:"376635471"}},L=null,U=function(){var t=function(e){return Array.prototype.concat.apply([],arguments)}.apply([],i(s(R),function(e){return s(e)},void 0)),e=n(d().split(","),function(e){return""!=e&&!(0<=a(t,e))});return 0<e.length?"&debug_experiment_id="+e.join(","):""},f=/Android ([01]\.|2\.[01])/i,z=function(e,t){var o=t.createElement("iframe");o.style.display="none",o.src=N(e,!1)+"//bid.g.doubleclick.net/xbbe/pixel?d=KAE",t.body.appendChild(o)};function m(){return new Image}var q=function(e,t,o,a,n,i){var r,s=o.opt_image_generator&&o.opt_image_generator.call;r=n&&o.onload_callback&&o.onload_callback.call?o.onload_callback:function(){},a+=O("async","1"),!s&&i&&function(e,t,o,a){if((L?A(3):"")==R.g.b)try{var n;e:if(3!=I(o,"fmt"))n=!1;else{if(a){var i,r=I(o,"random"),s=I(o,"label");if(!r||!s){n=!1;break e}for(var l=decodeURIComponent(s.replace(/\+/g," "))+":"+decodeURIComponent(r.replace(/\+/g," ")),c=(r=[],s=0);c<l.length;c++){for(var d=l.charCodeAt(c);255<d;)r[s++]=255&d,d>>=8;r[s++]=d}if(!M)for(M={},P={},l=0;l<65;l++)M[l]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l),P[l]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(l);for(l=P,d=[],s=0;s<r.length;s+=3){var u=r[s],f=s+1<r.length,m=f?r[s+1]:0,g=s+2<r.length,h=g?r[s+2]:0,v=(c=u>>2,(3&u)<<4|m>>4),p=(15&m)<<2|h>>6,_=63&h;g||(_=64,f||(p=64)),d.push(l[c],l[v],l[p],l[_])}var y,$=d.join("").replace(/[.]*$/,""),b=e.GooglebQhCsO;if(b||(b={},e.GooglebQhCsO=b),(y=b)[$]?i=!1:(y[$]=[],y[$][0]=a,i=!0),!i){n=!1;break e}}var k,w=o.search(T);for(e=0,a=[];0<=(k=Q(o,e,"fmt",w));)a.push(o.substring(e,k)),e=Math.min(o.indexOf("&",k)+1||w,w);a.push(o.substr(e));var C=[a.join("").replace(E,"$1"),"&","fmt"];if(C.push("=",encodeURIComponent("4")),C[1]){var j=C[0],x=j.indexOf("#");0<=x&&(C.push(j.substr(x)),C[0]=j=j.substr(0,x));var O=j.indexOf("?");O<0?C[1]="?":O==j.length-1&&(C[1]=void 0)}var S=t.createElement("script");S.src=C.join(""),t.getElementsByTagName("script")[0].parentElement.appendChild(S),n=!0}return n}catch(e){}return!1}(e,t,a,r)||(e=m,s&&(e=o.opt_image_generator),(o=e()).src=a,o.onload=r)},B=function(e,t,o){var a=function(){o.documentElement.appendChild(function(e,t){for(var o=document.createElement("iframe"),a=[],n=[],i=0;i<t.google_conversion_items.length;i++){var r=t.google_conversion_items[i];r&&r.quantity&&r.sku&&(a.push(r.sku),n.push(r.quantity))}return e=N(e,!1)+"//www.google.com/ads/mrc",o.src=e+"?sku="+a.join(",")+"&qty="+n.join(",")+"&oid="+t.google_conversion_order_id+"&mcid="+t.google_conversion_merchant_id,o.style.width="1px",o.style.height="1px",o.style.display="none",o}(e,t))};"complete"===o.readyState?a():e.addEventListener?e.addEventListener("load",a):e.attachEvent("onload",a)};window.google_trackConversion=function(e){var t,o,a,n,i=window,r=navigator,s=document,l=!((e=function(t,o){for(var a={},e=function(e){a[e]=o&&null!=o[e]?o[e]:t[e]},n=0;n<j.length;n++)e(j[n]);return e("onload_callback"),a}(i,e)).google_conversion_format=3);if(e&&3==e.google_conversion_format){try{var c;if("landing"==e.google_conversion_type||!e.google_conversion_id||e.google_remarketing_only&&e.google_disable_viewthrough?c=!1:(e.google_conversion_date=new Date,e.google_conversion_time=e.google_conversion_date.getTime(),e.google_conversion_snippets="number"==typeof e.google_conversion_snippets&&0<e.google_conversion_snippets?e.google_conversion_snippets+1:1,"number"!=typeof e.google_conversion_first_time&&(e.google_conversion_first_time=e.google_conversion_time),e.google_conversion_js_version="8",0!=e.google_conversion_format&&1!=e.google_conversion_format&&2!=e.google_conversion_format&&3!=e.google_conversion_format&&(e.google_conversion_format=1),!1!==e.google_enable_display_cookie_match&&(e.google_enable_display_cookie_match=!0),L=new w,c=!0),c){if(e.google_remarketing_only&&e.google_enable_display_cookie_match&&L&&C([R.f.c,R.f.b],$,2),!e.google_remarketing_only&&!e.google_conversion_domain){var d=R.g;L&&C([d.c,d.b],b,3)}c="/?","landing"==e.google_conversion_type&&(c="/extclk?");var u,f,m,g=[e.google_remarketing_only?"viewthroughconversion/":"conversion/",x(e.google_conversion_id),c,"random=",x(e.google_conversion_time)].join(""),h=e.google_remarketing_only?"googleads.g.doubleclick.net":e.google_conversion_domain||"www.googleadservices.com";u=N(i,/www[.]googleadservices[.]com/i.test(h))+"//"+h+"/pagead/"+g;e:{var v=e.google_conversion_language;if(null!=v){var p=v.toString();if(2==p.length){m=O("hl",p);break e}if(5==p.length){m=O("hl",p.substring(0,2))+O("gl",p.substring(3,5));break e}}m=""}if(f=[O("cv",e.google_conversion_js_version),O("fst",e.google_conversion_first_time),O("num",e.google_conversion_snippets),O("fmt",e.google_conversion_format),O("value",e.google_conversion_value),O("currency_code",e.google_conversion_currency),O("label",e.google_conversion_label),O("oid",e.google_conversion_order_id),O("bg",e.google_conversion_color),m,O("guid","ON"),O("disvt",e.google_disable_viewthrough),O("eid",(a=L,n=[],k(a.h,function(e,t){n.push(t)}),k(a.a,function(e){""!=e&&n.push(e)}),n).join()),function(e){if(!e)return"";if(!(e=e.google_conversion_items))return"";for(var t=[],o=0,a=e.length;o<a;o++){var n=e[o],i=[];n&&(i.push(F(n.value)),i.push(F(n.quantity)),i.push(F(n.item_id)),i.push(F(n.adwords_grouping)),i.push(F(n.sku)),t.push("("+i.join("*")+")"))}return 0<t.length?"&item="+t.join(""):""}(e),function(e,t,o){var a=[];if(e){var n=e.screen;n&&(a.push(O("u_h",n.height)),a.push(O("u_w",n.width)),a.push(O("u_ah",n.availHeight)),a.push(O("u_aw",n.availWidth)),a.push(O("u_cd",n.colorDepth))),e.history&&a.push(O("u_his",e.history.length))}return o&&"function"==typeof o.getTimezoneOffset&&a.push(O("u_tz",-o.getTimezoneOffset())),t&&("function"==typeof t.javaEnabled&&a.push(O("u_java",t.javaEnabled())),t.plugins&&a.push(O("u_nplug",t.plugins.length)),t.mimeTypes&&a.push(O("u_nmime",t.mimeTypes.length))),a.join("")}(i,r,e.google_conversion_date),function(e){var t;if((e=e.google_custom_params)&&"object"==typeof e&&"function"!=typeof e.join){var o=[];for(t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=e[t];if(a&&"function"==typeof a.join){for(var n=[],i=0;i<a.length;++i){var r=S(a[i]);null!=r&&n.push(r)}a=n.length?n.join(","):null}else a=S(a);(n=S(t))&&null!=a&&o.push(n+"="+a)}t=o.join(";")}else t="";return""==t?"":"&".concat("data=",encodeURIComponent(t))}(e),H(i,s,e.google_conversion_page_url,e.google_conversion_referrer_url),e.google_remarketing_for_search&&!e.google_conversion_domain?"&srr=n":"",function(e){if(null==(e=e?e.title:"")||""==e)return"";var t=function(e){try{return decodeURIComponent(e),!0}catch(e){return!1}};e=encodeURIComponent(e);for(var o=256;!t(e.substr(0,o));)o--;return"&tiba="+e.substr(0,o)}(s)].join("")+U(),q(i,s,e,u+f,!0,!0),e.google_remarketing_for_search&&!e.google_conversion_domain){var _,y=[x(e.google_conversion_id),"/?random=",Math.floor(1e9*Math.random())].join("");_=N(i,!1)+"//www.google.com/ads/user-lists/"+y,_+=[O("label",e.google_conversion_label),O("fmt","3"),H(i,s,e.google_conversion_page_url,e.google_conversion_referrer_url)].join(""),q(i,s,e,_,!1,!1)}e.google_remarketing_only&&e.google_enable_display_cookie_match&&(t=i,o=s,(L?A(2):"")==R.f.b&&("complete"===o.readyState?z(t,o):t.addEventListener?t.addEventListener("load",function(){z(t,o)}):t.attachEvent("onload",function(){z(t,o)}))),l=!0}e.google_conversion_merchant_id&&e.google_conversion_order_id&&e.google_conversion_items&&(B(i,e,s),l=!0)}catch(e){}i=l}else i=!1;return i}}).call(this),window.google_trackConversion({google_conversion_id:858471704,google_custom_params:{page:window.location.pathname},google_remarketing_only:!0}),window.addEventListener("message",function(e){switch(e.data.event){case"register":console.log("LMS register");break;case"signup":console.log("LMS signup"),fbq("track","CompleteRegistration");break;case"submitted":console.log("LMS submitted");break;case"bought":console.log("LMS bought"),fbq("track","Purchase")}});