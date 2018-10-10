---
---
collapseNavbar = -> 
	if $(".navbar").offset().top > 50
		$(".navbar-fixed-top").addClass "top-nav-collapse" 
	else 
		$(".navbar-fixed-top").removeClass "top-nav-collapse"

$ -> 		
	collapseNavbar();
	$(window).scroll(collapseNavbar);
	$('.navbar-collapse ul li a').click(-> 
		$(".navbar-collapse").collapse 'hide');
