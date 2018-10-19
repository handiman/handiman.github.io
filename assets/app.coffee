---
---
collapseNavbar = -> 
	if $(".navbar").offset().top > 50
		$(".navbar-fixed-top").addClass "top-nav-collapse" 
	else 
		$(".navbar-fixed-top").removeClass "top-nav-collapse"

submitContactForm = (e) ->
	e.preventDefault()
	form = $(e.target);
	hide = -> 
		$("#status", form).fadeOut();
	onsuccess = ->
		$("input, textarea", form).val("");
		$("#status", form).html("Message sent!").show();
		window.setTimeout(hide, 3000);
	onerror = (a, b, c) -> 
		$("#status", form).html(c).show();
	command = 
		subject: "Contact Form"
		from: $("#from", form).val()
		name: $("#from-name", form).val(),
		address: $("#ip", form).val()
		message: $("#message", form).val()
	$.post('https://www.henrikbecker.se/api/contact-form', command).done(onsuccess).fail(onerror);
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


ko.applyBindings(new (->
	that = this
	that.deploymentIsSlow = ko.observable(false)
	that.deploymentIsManual = ko.observable(false)
	that.deploymentIsScary = ko.observable(false)
	that.testingIsManual = ko.observable(false)
	that.testsFailIntermittently = ko.observable(false)
	that.testsAreHardToUnderstand = ko.observable(false)
	that.testsGivePoorFeedback = ko.observable(false)
	that.showResults = ko.observable(false)
	that.showForm = ko.observable(true)
	that.submit = ->
		that.showResults(true)
		that.showForm(false)
	that.goodMatch = ko.computed(->
		that.deploymentIsSlow() || 
		that.deploymentIsManual() || 
		that.deploymentIsScary() || 
		that.testingIsManual() || 
		that.testsFailIntermittently() ||
		that.testsAreHardToUnderstand() || 
		that.testsGivePoorFeedback();
	)
	that.poorMatch = ko.computed(-> !that.goodMatch())
	return that
));