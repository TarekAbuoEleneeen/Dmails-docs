'use strict';

$(function() {


    /*
    |--------------------------------------------------------------------------
    | Configure your website
    |--------------------------------------------------------------------------
    |
    | We provided several configuration variables for your ease of development.
    | Read their complete description and modify them based on your need.
    |
    */

    page.config({

        /*
        |--------------------------------------------------------------------------
        | Google Analytics Tracking
        |--------------------------------------------------------------------------
        |
        | If you want to use Google Analytics, you can specify your Tracking ID in
        | this option. Your key would be a value like: UA-12345678-9
        |
        */

        googleAnalyticsId: '',

        /*
        |--------------------------------------------------------------------------
        | Smooth Scroll
        |--------------------------------------------------------------------------
        |
        | If true, the browser's scrollbar moves smoothly on scroll and gives your
        | visitor a better experience for scrolling.
        |
        */

        smoothScroll: true,

    });





    /*
    |--------------------------------------------------------------------------
    | Custom Javascript code
    |--------------------------------------------------------------------------
    |
    | Now that you configured your website, you can write additional Javascript
    | code below this comment. You might want to add more plugins and initialize
    | them in this file.
    |
    */

    // var frm = $('#contact-form');
    // frm.submit(function() {
    //     $.ajax({
    //         type: 'POST',
    //         url: 'https://dmail.online/contact/',
    //         data: frm.serialize(),
    //         success: function(json) {
    //             $('#results').show()
    //             $('#results').html(json.message);
    //             $('#results').delay(5000).fadeOut();
    //             $('#contact-form')[0].reset();
    //             alert(json.message)
    //         },
    //         error: function(xhr, ajaxOptions, thrownError) {

    //             $('#results').text(thrownError);
    //         }
    //     });
    //     return false;
    // });



});