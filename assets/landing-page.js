/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
(function($) {
    "use strict";

    function setupContactForm() {
        if ($("#contact-form").length) {
            $.get('http://www.henrikbecker.se/api/ip')
                .done(function (ip) {
                    $("#contact-form #ip").val(ip);
                });
            $("#contact-form").submit(function (e) {
                e.preventDefault();
                $.post('http://www.henrikbecker.se/api/command', {
                    subject: "Contact Form",
                    from: $("#contact-form #from").val(),
                    ipAddress: $("#contact-form #ip").val(),
                    message: $("#contact-form #message").val()
                }).fail(function (a, b, c) {
                    $("#contact-form #status").html(c).show();
                }).done(function() {
                    $("#contact-form #from, #contact-form #message").val("");
                    $("#contact-form #status").html("Message sent!").show();
                    window.setTimeout(function () { $("#contact-form #status").fadeOut(); }, 3000);
                });
                return false;
            });
        }
    }

    // jQuery to collapse the navbar on scroll
    function collapseNavbar() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }

    function pageScroll(target) {
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 1500, 'easeInOutExpo');
    }

    $(window).scroll(collapseNavbar);
    $(collapseNavbar);
    $(setupContactForm);
    $("li.project").click(function (event) {
        event.preventDefault();
        pageScroll($(this).data("next"));
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            event.preventDefault();
            pageScroll($(this).attr('href'));
        });
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });
})(jQuery);