---
---
submitContactForm = (e) ->
	e.preventDefault()
	form = $(e.target);
	hide = -> 
		$(".status", form).fadeOut();
	onsuccess = ->
		$("input, textarea", form).val("");
		$(".status", form).html("Message sent!").show();
		window.setTimeout(hide, 3000);
	onerror = (a, b, c) -> 
		$(".status", form).html(c).show();
	command = 
		subject: "Contact Form"
		from: $("input[name='from']", form).val()
		name: $("input[name='from-name']", form).val(),
		address: $("input[name='ip']", form).val()
		message: $("textarea[name='message']", form).val()
	$.post('https://www.henrikbecker.se/api/contact-form', command).done(onsuccess).fail(onerror);
	return false;

setupContactForms = ->
	if $(".contact-form").length
		$.get('https://www.henrikbecker.se/api/ip').done((ip) -> $(".contact-form input[name='ip']").val(ip));
		$(".contact-form").submit(submitContactForm);
		
pageScroll = (target) ->
	$('html, body').stop().animate({
		scrollTop: $(target).offset().top
	}, 1500, 'easeInOutExpo');

$ ->
	setupContactForms();		
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