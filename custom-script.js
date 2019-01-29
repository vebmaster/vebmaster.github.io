jQuery(document).ready(function($)
{
    $("body").append("<link id='fromScriptCustom' rel='stylesheet' href='https://vebmaster.github.io/test.css?nocache' type='text/css'>");
    $("ul.navbar-nav").before( '<i class="fa fa-bars" aria-hidden="true" style="color: #FFF; cursor: pointer; font-size: 28px;" onclick="callback(\'bar\');"></i>' );

    $('body').append(`

        <div style="display: none;
                    position: absolute; 
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
        
                            <div class="null"></div>
                                
                        </div>
                </div>
        </div><!--/#bar-->


`);
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