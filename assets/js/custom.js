jQuery("#homecarousel").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    // animateOut: 'fadeOut',
    //      animateIn: 'fadeIn',
    nav: false,
    singleItem: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 1
      },
  
      1366: {
        items: 1
      }
    }
  });

  $(document).ready(function() {
    var bigimage = $("#products-img");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
       .owlCarousel({
       items: 1,
       slideSpeed: 2000,
       nav: false,
       // autoplay: true,
       dots: false,
       loop: true,
       responsiveRefreshRate: 200,
       // navText: [
       //    '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
       //    '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
       // ]
    })
       .on("changed.owl.carousel", syncPosition);

    thumbs
       .on("initialized.owl.carousel", function() {
       thumbs
          .find(".owl-item")
          .eq(0)
          .addClass("current");
    })
       .owlCarousel({
       items: 6,
       margin:10,
       dots: false,
       nav: true,
       navText: [
          '<img src="/assets/images/icons/thumb-owl-left-arrow.svg" />',
          '<img src="/assets/images/icons/thumb-owl-right-arrow.svg" />'
       ],

        responsive: {
        0: {
          items: 3
        },
    
        600: {
          items: 4
        },
    
        1024: {
          items: 6
        }
    
      },
       smartSpeed: 200,
       slideSpeed: 500,
       slideBy: 6,
       responsiveRefreshRate: 100,
    })
       .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
       //if loop is set to false, then you have to uncomment the next line
       //var current = el.item.index;

       //to disable loop, comment this block
       console.log(el);
       var count = el.item.count - 1;
       var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

       if (current < 0) {
          current = count;
       }
       if (current > count) {
          current = 0;
       }
       //to this
       thumbs
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");
       var onscreen = thumbs.find(".owl-item.active").length - 1;
       console.log(onscreen)
       var start = thumbs
       .find(".owl-item.active")
       .first()
       .index();
       var end = thumbs
       .find(".owl-item.active")
       .last()
       .index();
       console.log(end);
       if (current > end) {
          thumbs.data("owl.carousel").to(current, 100, true);
       }
       if (current < start) {
          thumbs.data("owl.carousel").to(current - onscreen, 100, true);
       }
    }

    function syncPosition2(el) {
       if (syncedSecondary) {
          var number = el.item.index;
          bigimage.data("owl.carousel").to(number, 100, true);
       }
    }

    thumbs.on("click", ".owl-item", function(e) {
       e.preventDefault();
       var number = $(this).index();
       bigimage.data("owl.carousel").to(number, 300, true);
    });
    });

  $(".search-click").click(function(){
      $(".search-box").animate({
        width: "toggle"
      });
      $(".search-click").hide();
    });
    
   //  $(".navbar-toggler").on("click", function () {
   //                    $(this).toggleClass("active");
   //              });


 $(function() {
    var pathname = window.location.pathname;
    // console.log(pathname);    
    var linkName = pathname.slice(15);
      if(linkName==0)
      {
        $('.navbar-nav > li > a[href="/index"]').parent().addClass('active'); 
      }
      // console.log(linkName);   
      $('.navbar-nav > li > a[href="'+linkName+'"]').parent().addClass('active');    
});

$(function () {
   'use strict';

   $('[data-toggle="offcanvas"]').on('click', function () {
      $('.offcanvas-collapse').toggleClass('open');
   })
})

$(document).ready(function () {    
   //Get CurrentUrl variable by combining origin with pathname, this ensures that any url appendings (e.g. ?RecordId=100) are removed from the URL
   var CurrentUrl = window.location.origin+window.location.pathname;
   //Check which menu item is 'active' and adjust apply 'active' class so the item gets highlighted in the menu
   //Loop over each <a> element of the NavMenu container
   $('#main-menu a').each(function(Key,Value)
       {
           //Check if the current url
           if(Value['href'] === CurrentUrl)
           {
               //We have a match, add the 'active' class to the parent item (li element).
               $(Value).parent().addClass('active');
           }
       });
});

var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var player;

      function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
         height: '315',
         width: '560',
         videoId: '9G63WbcUn7o',
         events: {
            'onReady': function() {
            $(".video-thumb").click(function() {
               var $this = $(this);
               if (!$this.hasClass("active")) {
                  player.loadVideoById($this.attr("data-video"));
                              $this.addClass("active").siblings().removeClass("active");
               }
            });
            }
         }
      });
      }

      $( ".prod-drp-filter" ).change(function() {
         var selectedEventType = this.options[this.selectedIndex].value;
         if (selectedEventType == "all") {
            $('.prd-bx-ct').removeClass('hide-bx');
         } else {
          console.log(selectedEventType);
            $('.prd-bx-ct').addClass('hide-bx');
            $('.prd-bx-ct[data-prodtype="' + selectedEventType + '"]').removeClass('hide-bx');
         }
         });
         $( '.js-filter' ).on( 'click', function() {

            var prodfilter = $(this).attr('data-prodtype');
            console.log(prodfilter)
            if ( prodfilter == 'all' ) {
               $( '.prd-bx-ct' ).removeClass( 'hide-bx ' );    
            } else {
               $( '.prd-bx-ct' ).addClass( 'hide-bx ' );
               $( '.prd-bx-ct[data-prodtype=' + prodfilter + ']' ).removeClass( 'hide-bx ' );
            }
            
            });