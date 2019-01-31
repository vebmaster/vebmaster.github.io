jQuery(document).ready(function($)
{
    var randNum = Math.floor(Math.random() * 9999999999) + 100000000;
    var script = 'https://vebmaster.github.io/custom-script.js?v=' + randNum.toString();
    // $("body").append("<script defer type='text/javascript' src='" + script + "'></script>");
});
