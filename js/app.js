$(function () {

	var header = $("#header");
	var introH = $("#intro").innerHeight();
	var scrollOffset = $(window).scrollTop;

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		/* Fixed header */

		checkScroll (scrollOffset);


	});


	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH ) {
			header.addClass("fixed");
		} 

		else {
			header.removeClass("fixed");
		}
	}

	/* Smooth scroll */

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
		blockId = $(this).data("scroll"),
		blockOffset = $(blockId).offset().top;

		console.log(blockOffset);

		$("#nav a").removeClass("active");
		$this.addClass("active");


		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);

	});


	/* Menu nav-togle */

	$("#nav_togle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");

	});


	/* Collaps */

	$("[data-collaps]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
		blockId = $(this).data("collaps");

		$(blockId).slideToggle();

	});


	/* Slider */

	$("[data-slider]").slick ({
		infinite: true,
		fade: false,
  		slidesToScroll: 1,
		slidesToShow: 1
	});


});