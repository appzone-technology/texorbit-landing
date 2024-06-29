(function() {
    window.onload = function() {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }
    window.onscroll = function() {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;
        var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
            logo.src = 'assets/images/logodark.png';
        } else {
            header_navbar.classList.remove("sticky");
            logo.src = 'assets/images/logodark.png';
        }
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    new WOW().init();
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function() {
        navbarToggler.classList.toggle("active");
    });



/** ToolTip **/
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


/** Search **/

$(function() {
	$('#search-menu').removeClass('toggled');

	$('#search-icon').click(function(e) {
		e.stopPropagation();
		$('#search-menu').toggleClass('toggled');
		$("#popup-search").focus();
	});
	
	$('#search-menu input').click(function(e) {
		e.stopPropagation();
	});

	$('#search-menu, body').click(function() {
		$('#search-menu').removeClass('toggled');
	});
});



/* info slider */
$('.infoSlideItem-img').click(function(){

	$('.infoSlideItem').removeClass('active');
	$('.infoSlideItemTitle').removeClass('hide');
	$(this).parent().parent('.infoSlideItem').addClass('active');
	$(this).parent().parent('.infoSlideItem').children('.infoSlideItemTitle').addClass('hide');

});

var slideCount = 0;
setInterval(function(){ 
	
	if(slideCount > 2) {
		slideCount = 0;
		moveslide(slideCount);
	}
	else {
		moveslide(slideCount);
		slideCount++;
	}
}, 8000);



/** Hero Owl Carousel **/

$(".hero-owl").on("initialized.owl.carousel", () => {
  setTimeout(() => {
    $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
    $("section").show();
  }, 200);
});

const $owlCarousel = $(".hero-owl").owlCarousel({
	items: 1,
	loop: true,
	nav: true,
	dots: false,
	rtl: true,
	autoplay:false,
	navText: [
		'<i class="las la-angle-left"></i>',
		'<i class="las la-angle-right"></i>'
	]
});



var owl = $('#latest_mettings');
  owl.owlCarousel({
	items: 3,
	pullDrag: true,
	margin: 20,
	loop: true,
	nav: true, 
	dots: false,
	responsiveClass:true,
	touchDrag: true,
	true:true,
	autoplayTimeout:3000,
	smartSpeed : 450,
	rtl: true,
	autoplay:true,
	lazyLoad:true, 
	navText: ['<i class="lni lni-chevron-left" aria-hidden="true"></i>', '<i class="lni lni-chevron-right" aria-hidden="true"></i>'],
	navContainer: '.custom-nav1',
	responsive: {
	  0: {
		items: 1,
		nav: false, 
		dots: true
	  },
	  700: {
		items: 1,
		nav: false,
	  },
	  1000: {      
		items: 2,
		nav: false, 
	  },
	  1200: {      
		items: 4,
		nav: false
	  }
	}
})



$('#js-grid-mosaic-flat').cubeportfolio({
	filters: '#js-filters-mosaic-flat',
	layoutMode: 'mosaic',
	defaultFilter: '*',
	animationType: 'scaleSides',
	gapHorizontal: -1,
	gapVertical: -1,
	gridAdjustment: 'responsive',
	caption: 'zoom',
	displayType: 'fadeIn',
	displayTypeSpeed: 100,
	sortByDimension: true,
	mediaQueries: [{
		width: 1500,
		cols: 4
	},{
		width: 1100,
		cols: 4
	}, {
		width: 768,
		cols: 2
	}, {
		width: 480,
		cols: 1
	}, {
		width: 320,
		cols: 1
	}],
	// lightbox
	lightboxDelegate: '.cbp-lightbox',
	lightboxGallery: true,
	lightboxTitleSrc: 'data-title',
	lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

	plugins: {
		loadMore: {
			element: '#js-loadMore-mosaic-flat',
			action: 'click',
			loadItems: 3,
		}
	},
})


if($("#calendar").length > 0){

	new Calendar({
		id: "#calendar",
		calendarSize: "small",
	  });
}
})();


function moveslide(index){
	$('.infoSlideItem').removeClass('active');
	$('.infoSlideItemTitle').removeClass('hide');
	$('.infoSlideItem:eq('+ index + ')').addClass('active');
	$('.infoSlideItem:eq('+ index + ')').children('.infoSlideItemTitle').addClass('hide');
}
