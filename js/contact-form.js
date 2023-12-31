$(document).ready(function() {
	$('form#newsletter-signup').submit(function() {
	$('form#newsletter-signup .error').remove();
	var hasError = false;
	$('.requiredField').each(function() {
	if(jQuery.trim($(this).val()) == '') {
    var labelText = $(this).prev('label').text();
    $(this).parent().append('<span class="error">Enter'+labelText+'</span>');
    $(this).addClass('inputError');
    hasError = true;
    } else if($(this).hasClass('email')) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(jQuery.trim($(this).val()))) {
    var labelText = $(this).prev('label').text();
    $(this).parent().append('<span class="error">Invalid'+labelText+'</span>');
    $(this).addClass('inputError');
    hasError = true;
    }
    }
    });
    if(!hasError) {
    $('form#newsletter-signup input.submit').fadeOut('normal', function() {
    $(this).parent().append('');
    });
    var formInput = $(this).serialize();
    $.post($(this).attr('action'),formInput, function(data){
    $('form#newsletter-signup').slideUp("fast", function() {
    $(this).before('<p class="success">Thank you for subscribing.</p>');
    });
    });
    }
    return false;
    });
});