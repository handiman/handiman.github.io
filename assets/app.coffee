---
---
setupContactForms = ->
	submitContactForm = (e) ->
		e.preventDefault()
		form = $(e.target);
		hide = -> 
			$(".status", form).html("")
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
	$.get('https://www.henrikbecker.se/api/ip').done((ip) -> $(".contact-form input[name='ip']").val(ip));
	$(".contact-form").submit(submitContactForm);
	$("#modal-contact-form").on("hidden.bs.modal", (e) ->
		form = $(e.target);
		$("input, textarea", form).val("");
		$(".status", form).html("");
	);
		
setupPageScroll = ->
	pageScroll = (target) ->
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, 1500, 'easeInOutExpo');
	$("a.page-scroll").click((e) ->
		e.preventDefault();
		pageScroll($(this).attr("href"));
	);
	$("li.project, section.content-section[data-next], header.intro").click((e) ->
		e.preventDefault();
		pageScroll($(this).data("next"));
	);

ko.applyBindings(new (->
	that = this
	that.deployment_slow = ko.observable(false)
	that.deployment_manual = ko.observable(false)
	that.deployment_errorprone = ko.observable(false)
	that.testing_manual = ko.observable(false)
	that.testing_failing = ko.observable(false)
	that.testing_hardtounderstand = ko.observable(false)
	that.testing_poorfeedback = ko.observable(false)
	that.showResults = ko.observable(false)
	that.showForm = ko.observable(true)
	that.submit = ->
		that.showResults(true)
		that.showForm(false)
	that.goodMatch = ko.computed(->
		that.deployment_slow() || 
		that.deployment_manual() || 
		that.deployment_errorprone() || 
		that.testing_manual() || 
		that.testing_failing() ||
		that.testing_hardtounderstand() || 
		that.testing_poorfeedback();
	)
	that.poorMatch = ko.computed(-> !that.goodMatch())
	return that
));

$ ->
	setupContactForms();		
	setupPageScroll();
	$("*[data-href]").click((e) ->
		e.preventDefault();
		document.location = $(this).data("href");
	);