require.config({

    　　　　paths: {

        　　　　　　"jquery": "jquery-1.10.1.min.js"
    　　　　}

　　});
require(['jquery'], function ($) {
    $('mian').text("Hello World" )
});