jQuery(document).ready(function($)
{
    alert('11');
    $("head").append("<link id='fromScript' rel='stylesheet' href='https://vebmaster.github.io/test.css?nocache' type='text/css'>");
    $("ul.navbar-nav").before( '<i class="fa fa-bars" aria-hidden="true" class="menu-button" onclick="callback(\'bar\');"></i>' );
});

document.addEventListener("DOMContentLoaded", function(event)
{
    alert('22');
    $("head").append("<link id='fromScript2' rel='stylesheet' href='https://vebmaster.github.io/test.css?nocache' type='text/css'>");
    $("ul.navbar-nav").before( '<i class="fa fa-bars 222" aria-hidden="true" class="menu-button" onclick="callback(\'bar\');"></i>' );
});

$(document).ready(function () {
    alert('33');
});

(function($) {
    alert('44');
})(jQuery);

function callback(parameter)
{
    var callback_tag = document.getElementById(parameter);
    if (callback_tag.style.display == '') {
        callback_tag.style.display = 'none';
        return;
    }
    callback_tag.style.display = '';
}

