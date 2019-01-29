jQuery(document).ready(function($)
{
    alert('11');

    $("body").append("<script defer type=\"text/javascript\" src=\"https://vebmaster.github.io/custom-script.js\"></script>");
    $("body").append("<link id='fromScriptTest' rel='stylesheet' href='https://vebmaster.github.io/test.css?nocache' type='text/css'>");
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

