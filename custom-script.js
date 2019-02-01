jQuery(document).ready(function($)
{
    $("body").append("<link id='scriptCustom' rel='stylesheet' href='https://vebmaster.github.io/test.css?nocache' type='text/css'>");

    headerBackground();
    addMenu();
    addSlider();
});


function headerBackground()
{
    if ($('#bgCover').css('background-image') == 'none') {
        $('#headerBlock').css({
            "background": "#000 url(https://static.ex-in.online/users/2/20628/fon1_5c531237.jpg) no-repeat 30% 40%",
            "padding-top": "30px",
            "padding-bottom": "30px",
        });
    }
}
// headerBackground()


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


/* enhance $.getSctipt to handle mutiple scripts */
// var getScript = jQuery.getScript;
// jQuery.getScript = function( resources, callback )
// {
//     var // reference declaration & localization
//         length = resources.length,
//         handler = function() { counter++; },
//         deferreds = [],
//         counter = 0,
//         idx = 0;
//
//     for ( ; idx < length; idx++ ) {
//         deferreds.push(
//             getScript( resources[ idx ], handler )
//         );
//     }
//
//     jQuery.when.apply( null, deferreds ).then(function() {
//         callback && callback();
//     });
// };

function loadScripts(arrayScripts)
{
    var length = resources.length,
        idx = 0;
    for ( ; idx < length; idx++ ) {
        $.holdReady( true );
        $.getScript( arrayScripts[idx], function() {
            $.holdReady( false );
        });
    }
}


function addSlider()
{
    $("body").append("<link id='scriptCustom' rel='stylesheet' href='https://vebmaster.github.io/lightslider/css/lightslider.css' type='text/css'>");

    $.ajaxSetup({
        cache: true
    });

    // $.holdReady( true );
    var scripts = ['https://vebmaster.github.io/slider.js',
                    'https://vebmaster.github.io/lightslider/js/lightslider.js',
                   ];
    // $.getScript(scripts, function(data, textStatus) {
    //     $.holdReady( false );
    // });

    loadScripts(scripts);

    // $(document).ready(function()
    // {
    //     if(document.getElementById('promotion')){
    //
    //         var promotion = $('#promotion .slides').lightSlider({
    //             item: 3,
    //             loop: true,
    //             auto: false,
    //             speed: 1000,
    //             pause: 10000,
    //             pager: true,
    //             enableTouch: true,
    //             enableDrag: true,
    //             //galleryMargin: 0,
    //             controls: false,
    //             slideMove:1,
    //             easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    //             slideMargin: 0,
    //             responsive : [
    //                 {
    //                     breakpoint:1050,
    //                     settings: {
    //                         item: 2,
    //                         // slideMargin: 5,
    //                     }
    //                 },
    //                 {
    //                     breakpoint:700,
    //                     settings: {
    //                         item: 1,
    //                         //slideMargin: 10,
    //                     }
    //                 },
    //             ]
    //         });
    //         $('#promotion .prev').click(function(e){
    //             promotion.goToPrevSlide();
    //         });
    //         $('#promotion .next').click(function(e){
    //             promotion.goToNextSlide();
    //         });
    //
    //     }
    // });
}
// addSlider()