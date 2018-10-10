---
---
collapseNavbar = -> 
	if $(".navbar").offset().top > 50
		$(".navbar-fixed-top").addClass "top-nav-collapse" 
	else 
		$(".navbar-fixed-top").removeClass "top-nav-collapse"

contactFormError = (a, b, c) ->
	$("#contact-form #status").html(c).show();
	
hideContactForm = ->
	$("#contact-form #status").fadeOut();

contactFormSuccess = ->
	$("#contact-form #from, #contact-form #message").val("");
	$("#contact-form #status").html("Message sent!").show();
	window.setTimeout(hideContactForm, 3000);

submitContactForm = (e) ->
	e.preventDefault();
	$.post('https://www.henrikbecker.se/api/command', {
		subject: "Contact Form",
		from: $("#contact-form #from").val(),
		ipAddress: $("#contact-form #ip").val(),
		message: $("#contact-form #message").val()
	}).fail(contactFormError).done(contactFormSuccess);
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
