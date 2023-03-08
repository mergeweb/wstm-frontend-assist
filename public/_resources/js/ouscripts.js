$(document).ready(function(){

	// FIND ACTIVE LINK 
	var $domain = OUC.globalProps['domain']
	var $currentPage = $domain + OUC.globalProps['path'] /* window.location */
	var $extension = OUC.globalProps['extension'] /* .html, .aspx, .php, etc */
	var $indexFile = OUC.globalProps['index-file'] /* default, index etc */

	// if the http root is not the same as domain
	var $trueHTTP = $domain
	var $no_index = "";

	$('nav.full-width-tabs a').each(function(index, anchorTag){
		$link =  $(this).attr('href')

		if ( $currentPage.indexOf($extension) == -1)
		{
			$currentPage = $currentPage + $indexFile + index
		}
		if ($no_index == $link){

			$link = $link + "index.html"

			//$no_index = "";
		}
		//console.log($link, $currentPage);
		// check if link matches current page
		if ($currentPage == $link || $trueHTTP+$link == $currentPage)
		{
			//console.log("reached this");


			//$(this).parent().addClass('active')
			$(this).addClass('active')
			//console.log(this);

			// break out of the loop
			return false
		}
	});

	$('.nav.navbar-nav a').each(function(index, anchorTag){
		$link =  $(this).attr('href')

		if ( $currentPage.indexOf($extension) == -1)
		{
			$currentPage = $currentPage + $indexFile + index
		}
		if ($no_index == $link){

			$link = $link + "index.html"

			//$no_index = "";
		}
		//console.log($link, $currentPage);
		// check if link matches current page
		if ($currentPage == $link || $trueHTTP+$link == $currentPage)
		{
			//console.log("reached this");


			$(this).parent().addClass('active')
			//$(this).addClass('active')
			//console.log(this);

			// break out of the loop
			return false
		}
	});

	$('a[href^="#"][href!="#"]').on('click',function(e){
		var headerHeight = 100;
		var fragmentid = $(this).attr('href').replace('#', '');
		var if_accordion = $(this).attr('data-parent');
		console.log(if_accordion);
		var $el = $('#' + fragmentid); // find fragment based on id attribute.
		if(!$el.length) $el = $('a[name="' + fragmentid + '"]'); // if no matching fragment found then find using the name attribute.
		if($el.length && if_accordion != '.westaccordion'){
			console.log("IF");
			e.preventDefault();
			$('html, body').animate({scrollTop:$el.offset().top - headerHeight}, 100);
		}
	});
	
	$(".panel-heading a").click(function (e) {
		e.preventDefault(); /*ignores actual link*/
	});

	$(".tab__item").click(function() {
		$(".tab__content").removeClass("tab__content--open");
		var t = $(this).attr("rel");
		$("#" + t).addClass("tab__content--open"), $(".tab__item").removeClass("tab--active"), $(this).addClass("tab--active"), $(".tab__title").removeClass("tab--open"), $(".tab__title[rel^='" + t + "']").addClass("tab--open")
	}), $(".tab__title").click(function() {
		$(this).toggleClass("tab--open");
		var t = $(this).attr("rel");
		$("#" + t).toggleClass("tab__content--open")
	}), $(".tab__item").last().addClass("tab--last"), $(".skip").click(function(t) {
		var e = "#" + this.href.split("#")[1];
		$(e).attr("tabindex", -1).on("blur focusout", function() {
			$(this).removAttr("tabindex")
		}).focus()
	})

	//Ratio Images JS

	$(".in_ratio_constraint").each(function(){
		// Uncomment the following if you need to make this dynamic
		var refH = $(this).height();
		var refW = $(this).width();
		var refRatio = refW/refH;

		var imgH = $(this).children("img").height();
		var imgW = $(this).children("img").width();

		if ( (imgW/imgH) < refRatio ) {
			$(this).addClass("portrait");
		} else {
			$(this).addClass("landscape");
		}
	});

});

function readMoreClick(id) {

	var dots = document.getElementById("dots_"+id);
	var moreText = document.getElementById("more_"+id);
	var btnText = document.getElementById("expand_"+id);

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}