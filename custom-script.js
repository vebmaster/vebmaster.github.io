jQuery(document).ready(function($)
{
    $("body").append("<link id='scriptCustom' rel='stylesheet' href='https://vebmaster.github.io/test.css?nocache' type='text/css'>");

    urlParser();

    customHeader();
    addMenu();
    customFooter();
    addMap();
    addSlider();
    customMain();
});


function urlParser()
{
    if (window.location.href.indexOf("/about") > -1)
    {
        console.log('OK=/about');
    }

    if (window.location.href.indexOf("/contants") > -1)
    {
        console.log('OK=/contants');
    }
}


function customHeader()
{
    if ($('#bgCover').css('background-image') == 'none') {
        $('#headerBlock').css({
            "background": "#000 url(https://static.ex-in.online/users/2/20628/fon1_5c531237.jpg) no-repeat 30% 40%",
            "padding-top": "30px",
            "padding-bottom": "30px",
        });
    }

    $('#lpLogoImage').css('max-height', 'none');

    $('#headerBlock #lpEmailBlock').html(`
        <a href="tel:74842404343" id="" style="color: #ffffff">
            <span style="font-size: 18px; font-weight: bold;">+7(4842)40-43-43</span>
        </a>
    `);

    $('#headerBlock #lpPhoneBlock').html(`
        <span style="font-size: 12px; color: #ffffff">Калуга и Калужская область</span>
    `);
}
// customHeader()


function callback(parameter)
{
    if ( $('#'+parameter).css('display') == 'none' ) {
        $('#siteLayout').css("display", "none");
        $('#'+parameter).css("display", "block");
        return;
    }
    $('#siteLayout').css("display", "block");
    $('#'+parameter).css("display", "none");
}
// callback(parameter)


// Ожидание появление элемента на странице
var waitForElement = function(selector, callbackFunc, count) {
    if (jQuery(selector).length) {
        callbackFunc();
    } else {
        setTimeout(function() {
            if(!count) {
                count = 0;
            }
            count++;
            //console.log("count: " + count);
            if(count < 20) {
                waitForElement(selector,callbackFunc,count);
            } else {return;}
        }, 100);
    }
};


function addMenu()
{
    $("ul.navbar-nav").before( '<i class="fa fa-bars" aria-hidden="true" style="color: #FFF; cursor: pointer; font-size: 28px;" onclick="callback(\'bar\');"></i>' );

    $('body').append(`
        <div style="display:none;
                    position:absolute; 
                    top:0; 
                    left:0; 
                    right:0; 
                    bottom:0; 
                    overflow-y:scroll; 
                    background: url(https://vebmaster.github.io/images/double_pixel.png); 
                    z-index: 9999999999; 
                    " 
            id="bar" class="">

                <i class="fa fa-times" aria-hidden="true" style="color: #818492; font-size: 56px; line-height: 36px; top: 40px; right: 40px; position: absolute; cursor: pointer;" onclick="callback('bar');"></i>

                <div style="padding: 20px 44px;">

                        <div style="text-align: center; font-size: 30px; font-weight: 900; color: #d57787; margin: 0px 50px 36px 0px;">У нас есть много чего интересного</div>
                        
                        <div class="flex-wrap">
    
                            <ul class="footer_class">
                                <li><a href="/produkciya/natyazhnye-potolki/">Натяжные потолки</a>
                                    <ul>
                                        <li><a href="/produkciya/natyazhnye-potolki/klassicheskie/">Классические потолки</a></li>
                                        <li><a href="/produkciya/natyazhnye-potolki/tkanevye-potolki/">Тканевые потолки</a></li>
                                        <li><a href="/produkciya/natyazhnye-potolki/dizaynerskie-potolki/natyazhnye-potolki-s-fotopechatyu/">С фотопечатью</a></li>
                                        <li><a href="/produkciya/natyazhnye-potolki/dizaynerskie-potolki/mnogourovnevye-natyazhnye-potolki/">Многоуровневые</a></li>
                                        <!--li><a href="/produkciya/natyazhnye-potolki/dizaynerskie-potolki/reznye-potolki/">Резные потолки</a></li-->
                                        <li><a href="/produkciya/natyazhnye-potolki/potolki-zvezdnoe-nebo/">Звездное небо</a></li>
                                        <li><a href="/produkciya/natyazhnye-potolki/dizaynerskie-potolki/3d-natyazhnye-potolki/">3Д потолки</a></li>
                                        <li><a href="/produkciya/natyazhnye-potolki/dizaynerskie-potolki/potolki-double-vision/">Double Vision</a></li>
                                        <li><a href="/produkciya/natyazhnye-potolki/svetovye-potolki/potolki-new-vision/">Потолки New Vision</a></li>
                                        <li><a href="/produkciya/natyazhnye-potolki/dizaynerskie-potolki/natyazhnye-potolki-s-kristallami/">Потолки с кристаллами</a></li>
                                        <li><a href="/produkciya/natyazhnye-potolki/dizaynerskie-potolki/potolki-inkrustirovannye/">Потолки инкрустированные</a></li>
                                        <li><a href="/produkciya/natyazhnye-potolki/dizaynerskie-potolki/paryaschie-natyazhnye-potolki/">Парящие потолки</a></li>
                                        <li><a href="/produkciya/natyazhnye-potolki/svetovye-potolki/paryaschaya-liniya/">Парящая линия</a></li>
                                        <li><a href="/produkciya/natyazhnye-potolki/svetovye-potolki/vitrazhnye-potolki/">Витражные потолки</a></li>
                                    </ul>
                                </li>
                            </ul>
        
                            <ul class="footer_class">
                                <li><a href="#">Клиентам</a>
                                    <ul>
                                        <li><a href="#">Блог</a></li>
                                        <li><a href="/ceny/">Цены</a></li>
                                        <li><a href="#">Каталоги</a></li>
                                        <li><a href="/gotovye-raboty/">Готовые работы</a></li>
                                        <li><a href="/specialnye-predlozheniya/">Наши продукты</a></li>
                                        <li><a href="/akcii-i-skidki/">Акции и скидки</a></li>
                                        <li><a href="#">Гарантии</a></li>
                                        <li><a href="#">Служба сервиса</a></li>
                                        <li><a href="#">Полезная информация</a></li>
                                        <li><a href="#">Видео</a></li>
                                    </ul>
                                </li>
                            </ul>
        
                            <ul class="footer_class">
                                <li><a href="/o-kompanii/">О компании</a>
                                    <ul>
                                        <li><a href="/otzyvy/">Отзывы</a></li>
                                        <li><a href="/novosti/">Новости</a></li>
                                        <li><a href="/proizvodstvo/">Наше производство</a></li>
                                        <li><a href="http://sofito.ru/">Дилерам</a></li>
                                        <li><a href="#">Sofito Life</a></li>
                                        <li><a href="/vakansii/">Вакансии</a></li>
                                    </ul>
                                </li>
                            </ul>
        
                            <ul class="footer_class">
                                <li><a href="/kontakty/">Контакты</a>
                                    <ul>
                                        <li><a href="/kontakty/">Контакты производства</a></li>
                                    </ul>
                                </li>
                            </ul>
        
                        </div>
                </div>
        </div><!--/#bar-->
    `);
}
// addMenu()


function addMap()
{
    $('.custom-footer').before(`
        <div id="maps"></div>
    `);
}
// addMap()


function addSlider()
{
    $("body").append("<link id='scriptCustom' rel='stylesheet' href='https://vebmaster.github.io/lightslider/css/lightslider.css' type='text/css'>");

    $.ajaxSetup({
        cache: true
    });

    $.getScript('https://vebmaster.github.io/slider.js')
    .then(
        function(){
            //console.log('OK 1');
            return $.getScript('https://vebmaster.github.io/lightslider/js/lightslider.js');
        },
        function(){
            console.log('slider.js not found');
            return $.Deferred();
        }
    ).then(
        function(){
            //console.log('OK 2');
        }, function(){
            console.log('lightslider.js not found');
        }
    );
}
// addSlider()


function customFooter()
{
    $( ".block-txt07:has(.footer-wrap)" ).addClass( "custom-footer" );
}
// customFooter()


function customMain()
{
    if(window.location.pathname.length == 1 || window.location.pathname.length == 0 || window.location.pathname === "/") {
        $('.first-page form').each(function () {
            if (!$(this).parent().hasClass('wrapForm-main'))
                $(this).wrap('<div class="wrapForm-main"></div>');
        });
        $('.wrapForm-main > form').addClass('form-main');
        $('#lpLogoImage').hide();

        $.getScript('https://vebmaster.github.io/products.js')
        .then(
            function(){
                waitForElement("#promotion", function () {
                    //console.log('OK #promotion');
                    addProducts();
                }, 20);
            },
            function(){
                console.log('products.js not found');
                return $.Deferred();
            }
        )
    }
}
// customMain()