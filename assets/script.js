/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
(function($) {
    "use strict";

    function setupContactForm() {
        if ($("#contact-form").length) {
            $.get('https://www.henrikbecker.se/api/ip')
                .done(function (ip) {
                    $("#contact-form #ip").val(ip);
                });
            $("#contact-form").submit(function (e) {
                e.preventDefault();
                $.post('https://www.henrikbecker.se/api/command', {
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
})(jQuery);