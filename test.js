jQuery(document).ready(function($)
{
    $("head").append("<link id='fromScript' rel='stylesheet' href='https://vebmaster.github.io/test.css?nocache' type='text/css'>");
    $("ul.navbar-nav").before( '<i class="fa fa-bars" aria-hidden="true" class="menu-button" onclick="callback(\'bar\');"></i>' );
});



function callback(parameter)
{
    var callback_tag = document.getElementById(parameter);
    if (callback_tag.style.display == '') {
        callback_tag.style.display = 'none';
        return;
    }
    callback_tag.style.display = '';
}

