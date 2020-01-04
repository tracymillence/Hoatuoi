/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Gallery
6. Init Testimonials Slider
7. Init Lightbox


******************************/
// Material Select Initialization
$(document).ready(function() {
	$('.mdb-select').materialSelect();
	});
var catAndActs = {};
catAndActs['Classroom Instruction and Assessment'] = ['Assessment Day', 'Common Assessment Development', 'Data Team', 'Kindergarten Screening', 'Other'];
catAndActs['Curriculum Development and Alignment'] = ['Capstone Development', 'Course Of Study Development / Revision', 'Standards Alignment / Rollout', 'Other'];
catAndActs['District Committee'] = ['Curriculum Council', 'Grading & Assessment Task Force', 'Professional Development Planning Committee', 'Race To The Top Committee', 'Teacher Evaluation Committee', 'Other'];
catAndActs['Meeting'] = ['Academic Support Team', 'ELL / eKLIP Teachers', 'Gifted Intervention Specialist', 'Intervention Assistance Team', 'Intervention Teachers', 'Kindergarten Parent Conference', 'KLIP Teachers', 'Title I Teachers', 'Other'];
catAndActs['Other Category'] = ['Other'];
catAndActs['Professional Conference'] = ['Conference'];
catAndActs['Professional Workshop / Training'] = ['In-District', 'Out-Of-District'];
catAndActs['Pupil Services'] = ['IEP Meeting', 'IEP Writing'];

function ChangecatList() {
	var catList = document.getElementById("validationCustom03");
	var actList = document.getElementById("validationCustom04");
	var selCat = catList.options[catList.selectedIndex].value;
	while (actList.options.length) {
		actList.remove(0);
	}
	var cats = catAndActs[selCat];
	if (cats) {
		var i;
		for (i = 0; i < cats.length; i++) {
			var cat = new Option(cats[i], i);
			actList.options.add(cat);
		}
	}
}
function goTo(number) {
	$('ul.pager li:eq(' + number + ') a').tab('show');
	upgradePreNext(number);
}
function upgradePreNext(number) {
	if (number > 1) {
		$('ul.pager li:eq(0)').attr("onclick", "goTo(" + (number - 1) + ")");
		$('ul.pager li:eq(0)').attr("class", "previous");
	} else {
		$('ul.pager li:eq(0)').attr("class", "disabled");
	}
	if (number < 5) {
		$('ul.pager li:eq(6)').attr("onclick", "goTo(" + (number + 1) + ")");
		$('ul.pager li:eq(6)').attr("class", "next");
	} else {
		$('ul.pager li:eq(6)').attr("class", "disabled");
	}
}
$(document).ready(function () {
	$('li a').on('click', function (e) {
		goTo((e.target.innerHTML) - 0);
	});
});
$(document).ready(function () {
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var menuActive = false;
	var menu = $('.menu');
	var burger = $('.burger_container');

	setHeader();

	$(window).on('resize', function () {
		setHeader();
	});

	$(document).on('scroll', function () {
		setHeader();
	});

	initHomeSlider();
	initMenu();
	initGallery();
	initTestSlider();
	initLightbox();

	/* 

	2. Set Header

	*/

	function setHeader() {
		if ($(window).scrollTop() > 100) {
			header.addClass('scrolled');
		}
		else {
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu() {
		if ($('.menu').length) {
			var menu = $('.menu');
			if ($('.burger_container').length) {
				burger.on('click', function () {
					if (menuActive) {
						closeMenu();
					}
					else {
						openMenu();

						$(document).one('click', function cls(e) {
							if ($(e.target).hasClass('menu_mm')) {
								$(document).one('click', cls);
							}
							else {
								closeMenu();
							}
						});
					}
				});
			}
		}
	}

	function openMenu() {
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu() {
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	4. Init Home Slider

	*/

	function initHomeSlider() {
		if ($('.home_slider').length) {
			var homeSlider = $('.home_slider');

			homeSlider.owlCarousel(
				{
					items: 1,
					autoplay: true,
					loop: true,
					nav: false,
					smartSpeed: 1200
				});

			// Custom Navigation
			if ($('.home_slider_next').length) {
				var next = $('.home_slider_next');
				next.on('click', function () {
					homeSlider.trigger('next.owl.carousel');
				});
			}

			/* Custom dots events */
			if ($('.home_slider_custom_dot').length) {
				$('.home_slider_custom_dot').on('click', function (ev) {
					var dot = $(ev.target);
					$('.home_slider_custom_dot').removeClass('active');
					dot.addClass('active');
					homeSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
				});
			}

			/* Change active class for dots when slide changes by nav or touch */
			homeSlider.on('changed.owl.carousel', function (event) {
				$('.home_slider_custom_dot').removeClass('active');
				$('.home_slider_custom_dots li').eq(event.page.index).addClass('active');
			});
		}
	}

	/* 

	5. Init Gallery

	*/

	function initGallery() {
		if ($('.gallery_slider').length) {
			var gallerySlider = $('.gallery_slider');
			gallerySlider.owlCarousel(
				{
					items: 6,
					loop: true,
					margin: 22,
					autoplay: true,
					nav: false,
					dots: false,
					responsive:
					{
						0:
						{
							margin: 7,
							items: 3
						},
						575:
						{
							margin: 7,
							items: 6
						},
						991:
						{
							margin: 22,
							items: 6
						}
					}
				});
		}
	}
	$(document).ready(function () {
		$('#slider, #slider2').owlCarousel({
			margin: 10,
			items: 4
		});
	});
	/* 

	6. Init Testimonials Slider

	*/

	function initTestSlider() {
		if ($('.test_slider').length) {
			var testSlider = $('.test_slider');
			testSlider.owlCarousel(
				{
					items: 1,
					loop: true,
					autoplay: true,
					smartSpeed: 1200,
					nav: false,
					dots: false
				});
		}
	}

	/*

	7. Init Lightbox

	*/

	function initLightbox() {
		if ($('.gallery_item').length) {
			$('.colorbox').colorbox(
				{
					rel: 'colorbox',
					photo: true,
					maxWidth: '95%',
					maxHeight: '95%'
				});
		}
	}
});