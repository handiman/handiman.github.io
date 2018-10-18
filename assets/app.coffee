---
---
collapseNavbar = -> 
	if $(".navbar").offset().top > 50
		$(".navbar-fixed-top").addClass "top-nav-collapse" 
	else 
		$(".navbar-fixed-top").removeClass "top-nav-collapse"
	
hideContactForm = ->
	$("#contact-form #status").fadeOut();

contactFormSuccess = ->
	$("#contact-form input, #contact-form textarea").val("");
	$("#contact-form #status").html("Message sent!").show();
	window.setTimeout(hideContactForm, 3000);
	
contactFormError = (a, b, c) ->
	$("#contact-form #status").html(c).show();

submitContactForm = (e) ->
	e.preventDefault()
	form = $(e.target);
	fromAddress = $("#from", form).val()
	fromName = $("#from-name", form).val() or fromAddress
	command = 
		subject: "Contact Form",
		from: fromName + " <" + fromAddress + ">",
		ipAddress: $("#contact-form #ip").val(),
		message: $("#contact-form #message").val()
	$.post('https://www.henrikbecker.se/api/command', command).done(contactFormSuccess).fail(contactFormError);
	return false;

setupContactForm = ->
	if $("#contact-form").length
		$.get('https://www.henrikbecker.se/api/ip').done((ip) -> $("#contact-form #ip").val(ip));
		$("#contact-form").submit(submitContactForm);
		
$ -> 
    setupContactForm();		
	collapseNavbar();
	$(window).scroll(collapseNavbar);
	$('.navbar-collapse ul li a').click(-> 
		$(".navbar-collapse").collapse 'hide');

pageScroll = (target) ->
	$('html, body').stop().animate({
		scrollTop: $(target).offset().top
	}, 1500, 'easeInOutExpo');

$ ->
	$("li.project, section.content-section[data-next], header.intro").click((e) ->
		e.preventDefault();
		pageScroll($(this).data("next"));
	);
	$("a.page-scroll").click((e) ->
		e.preventDefault();
		pageScroll($(this).attr("href"));
	);
	$("a").click((e) ->
		e.stopPropagation();
	);
