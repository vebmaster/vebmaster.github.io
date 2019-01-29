alert('custom-script');

$("body").append("<link id='fromScript' rel='stylesheet' href='https://vebmaster.github.io/test.css?nocache' type='text/css'>");
$("ul.navbar-nav").before( '<i class="fa fa-bars" aria-hidden="true" class="menu-button" onclick="callback(\'bar\');"></i>' );
