jQuery("#homecarousel").owlCarousel({autoplay:!0,lazyLoad:!0,loop:!0,margin:20,responsiveClass:!0,autoHeight:!0,autoplayTimeout:7e3,smartSpeed:800,nav:!1,singleItem:!0,responsive:{0:{items:1},600:{items:1},1024:{items:1},1366:{items:1}}}),$(document).ready((function(){var e=$("#products-img"),a=$("#thumbs");e.owlCarousel({items:1,slideSpeed:2e3,nav:!1,dots:!1,loop:!0,responsiveRefreshRate:200}).on("changed.owl.carousel",(function(e){console.log(e);var t=e.item.count-1,o=Math.round(e.item.index-e.item.count/2-.5);o<0&&(o=t);o>t&&(o=0);a.find(".owl-item").removeClass("current").eq(o).addClass("current");var i=a.find(".owl-item.active").length-1;console.log(i);var s=a.find(".owl-item.active").first().index(),n=a.find(".owl-item.active").last().index();console.log(n),o>n&&a.data("owl.carousel").to(o,100,!0);o<s&&a.data("owl.carousel").to(o-i,100,!0)})),a.on("initialized.owl.carousel",(function(){a.find(".owl-item").eq(0).addClass("current")})).owlCarousel({items:6,margin:10,dots:!1,nav:!0,navText:['<img src="/assets/images/icons/thumb-owl-left-arrow.svg" />','<img src="/assets/images/icons/thumb-owl-right-arrow.svg" />'],responsive:{0:{items:3},600:{items:4},1024:{items:6}},smartSpeed:200,slideSpeed:500,slideBy:6,responsiveRefreshRate:100}).on("changed.owl.carousel",(function(a){var t=a.item.index;e.data("owl.carousel").to(t,100,!0)})),a.on("click",".owl-item",(function(a){a.preventDefault();var t=$(this).index();e.data("owl.carousel").to(t,300,!0)}))})),$(".search-click").click((function(){$(".search-box").animate({width:"toggle"}),$(".search-click").hide()})),$((function(){var e=window.location.pathname.slice(15);0==e&&$('.navbar-nav > li > a[href="/index"]').parent().addClass("active"),$('.navbar-nav > li > a[href="'+e+'"]').parent().addClass("active")})),$((function(){"use strict";$('[data-toggle="offcanvas"]').on("click",(function(){$(".offcanvas-collapse").toggleClass("open")}))})),$(document).ready((function(){var e=window.location.origin+window.location.pathname;$("#main-menu a").each((function(a,t){t.href===e&&$(t).parent().addClass("active")}))}));var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var player,firstScriptTag=document.getElementsByTagName("script")[0];function onYouTubeIframeAPIReady(){player=new YT.Player("player",{height:"315",width:"560",videoId:"9G63WbcUn7o",events:{onReady:function(){$(".video-thumb").click((function(){var e=$(this);e.hasClass("active")||(player.loadVideoById(e.attr("data-video")),e.addClass("active").siblings().removeClass("active"))}))}}})}firstScriptTag.parentNode.insertBefore(tag,firstScriptTag),$(".prod-drp-filter").change((function(){var e=this.options[this.selectedIndex].value;"all"==e?$(".prd-bx-ct").removeClass("hide-bx"):(console.log(e),$(".prd-bx-ct").addClass("hide-bx"),$('.prd-bx-ct[data-prodtype="'+e+'"]').removeClass("hide-bx"))})),$(".js-filter").on("click",(function(){var e=$(this).attr("data-prodtype");console.log(e),"all"==e?$(".prd-bx-ct").removeClass("hide-bx "):($(".prd-bx-ct").addClass("hide-bx "),$(".prd-bx-ct[data-prodtype="+e+"]").removeClass("hide-bx "))}));