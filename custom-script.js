jQuery(document).ready(function($)
{
    $("body").append("<link id='fromScriptCustom' rel='stylesheet' href='https://vebmaster.github.io/test.css?nocache' type='text/css'>");
    $("ul.navbar-nav").before( '<i class="fa fa-bars" aria-hidden="true" class="menu-button" onclick="callback(\'bar\');"></i>' );

    $('body').append(`
  <article>
    <h2>Appended </h2>
    <p>Using 'single' and "double-quotes" without escaping!</p>
  </article>
  
  <article>
    <h2>Appended </h2>
    <p>Using 'single' and "double-quotes" without escaping!</p>
  </article>
`);
});
