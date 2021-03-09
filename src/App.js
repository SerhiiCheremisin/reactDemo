import React from 'react';
import {useState} from 'react'


function App() {
const [jobs,setJobs] = useState(true);

let hidden = jobs ? "hidden-jobs-wrapper--hidden":"hidden-jobs-wrapper";
const jobAppear = () =>{
    setJobs(false)
}
const jobHidder = () =>{
    setJobs(true)
}

    return (
       <div className="App">
<div className="resume-block">
<div className="resume-block__left">
<div className="wrap-block"> Контакты</div>
    <div className="contacts u--lists">
        <ul>
            <li><i className="fas fa-phone-volume"></i>Телефон:<a href="tel:+380977978279"> +380977978279</a></li>
            <li><i className="fas fa-envelope-open"></i>E-mail: <a href="mailto:sebanho@gmail.com">sebanho@gmail.com</a></li>
            <li><i className="fab fa-telegram-plane"></i>Телеграмм: <a href="https://t.me/SerjCheremisin" target="_blank">SerjCheremisin</a></li>
        </ul>
    </div>
<div className="wrap-block">Языки</div>
    <div className="languages u--lists">
        <ul>
            <li>Русский и Украинский - Родной</li>
            <li>Анлгийский - Средний уровень</li>
            <li>Испнанский - Начальный уровень</li>
        </ul>
    </div>
    <div className="wrap-block">Навыки</div>
    <div className="skills u--lists">
        <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Javascript, ReactJS</li>
            <li>CMS: Joomla, OneBox, Modx, Wezom4.0, 1С Битрикс.</li>
            <li>Visual Studio, Visual Studio Code, WebStorm</li>
            <li>Счетчики метрик Google Analytics и Яндекс Метрика</li>
            <li>Умения работать с инструментами для вебмастеров от Google и Яндекс</li>
            <li>Работа с биржами покупки ссылок</li>
            <li>Начальные знания C++, C#, WForms, WPF</li>
        </ul>
        <div className="wrap-block">Еще парочка сайтов-примеров</div>
            <ul>
            <li><a target="_blank" href="http://naturecheremisin.zzz.com.ua/">naturecheremisin.zzz.com.ua</a></li>
            <li><a target="_blank" href="http://metinvestcheremisin.zzz.com.ua/">metinvestcheremisin.zzz.com.ua</a>/</li>
            <li><a target="_blank" href="http://cheremisintest.ho.ua/">cheremisintest.ho.ua</a></li>
            <li><a target="_blank" href="https://github.com/SerhiiCheremisin/reactDemo.git">Git данного демо </a></li>
        </ul>
    </div>
</div>


<div className="resume-block__right">
    <div className="resume-block__right--top">
<div className="name">
<h1>Черемисин Сергей Александрович</h1>
</div>
<div className="age-loc">
   <div className="location">
       <i className="fas fa-map-marker-alt"></i> г. Херсон Украина
   </div>
    <div className="age">
        <i className="fas fa-male"></i> 29 лет
    </div>
</div>
<div className="photo">
<div className="photo-block">

</div>
</div>



    </div>

    <div onClick={jobAppear} className="wrap-block isClickable">Опыт работы <i className="fas fa-briefcase"></i> </div>
    <div className="years">
        24.07.2017 – Н.В
    </div>
    <div className="have-jobs">
        <strong> Фрилансер, SEO оптимизатор </strong>
        <ul>
            <li>Работа со структурой и семантическим ядром сайта</li>
            <li>Составление мета тегов для сайта</li>
            <li>Составление ТЗ для копирайтеров/программистов</li>
            <li>Работа со счетчиками аналитики Google Analytics, Яндекс Метрика.</li>
            <li>Работа с вебмастерами Google и Яндекс</li>
            <li>Подбор доноров и закупка вечных ссылок на биржах: Миралинкс, Гогетлинкс. PRNews</li>
            <li>Настройка и ведение PPC рекламы для ПС Google</li>
        </ul>

    </div>
    <div className="years">
        07.02.2017 – 23.07.2017
    </div>
    <div className="have-jobs">
        <strong> SEO оптимизатор, вэб студия «Wezom»</strong>
        <ul>
            <li>Работа со структурой и семантическим ядром сайта</li>
            <li>Написание мета тегов для сайта</li>
            <li>Составление ТЗ для авторов/программистов</li>
            <li>Работа со счетчиками аналитики Google Analytics, Яндекс Метрика.</li>
            <li>Работа с вебмастерами Google и Яндекс</li>
        </ul>

    </div>

<div className={hidden}>
    <div className="hidden-jobs">
        <button onClick={jobHidder} value="&times;" name="close-jobs" className="close-jobs">X</button>
        <div className="years">
            04.01.2016 – 11.01.2017

        </div>
        <div className="have-jobs">
            <strong> Контент-менеджер Интернет магазин «евга кидс»</strong>
            <ul>
                <li>Наполнение сайта контентом</li>
                <li>Тестирование сайта на этапе разработки</li>
                <li>Работа со счетчиками аналитики Google Analytics, Яндекс Метрика</li>
                <li>Работа в качестве вебмастера сайта</li>
            </ul>

        </div>
        <div className="years">
            02.06 2015 – 30.12.2015

        </div>
        <div className="have-jobs">
            <strong>SEO оптимизатор. prodvigaem.com.ua </strong>
            <ul>
                <li>Закупка и "зачистка" вечных и арендных рекламных ссылок для сайтов.</li>
                <li>Отбор площадок для размещения рекламных ссылок</li>
                <li>Написание около ссылочных текстов для размещения рекламы на сайтах</li>
                <li>Подбор ключевых слов для продвижения сайта</li>
                <li>Ведения переговоров с вебмастерами сайтов</li>
                <li>Работа с биржами арендных и вечных ссылок Sape, GoGetLinks.</li>

            </ul>

        </div>
        <div className="years">
            01.02.2015 – 30.05.2015

        </div>
        <div className="have-jobs">
            <strong>Контент-менеджер, копирайтер интернет магазина спортивного питания и автомобильного форума. Рерайтер
                на различный проектах </strong>
            <ul>
                <li>Написание обзорных статей об автомобилях, их комплектующих.</li>
                <li>Описание товаров</li>
                <li>Описание категорий и подкатегорий товаров.</li>
                <li>Написание информативных статей о спорте, спортивном питании.</li>
            </ul>

        </div>
        <div className="years">
            07.07.2014 – 23.01.2015

        </div>
        <div className="have-jobs">
            <strong>Интернет магазин «евга кидс» SMM, менеджер по таргетинговой рекламе </strong>
            <ul>
                <li>Работа с таргетинговой рекламой</li>
                <li>Контроль за рекламными объявлениями в социальной сети VK.com</li>
                <li>Определение целевой аудитории а работа с ней</li>
                <li>Создание объявлений для социальной сети VK.com</li>
            </ul>

        </div>
        <div className="years">
            20.12.2013 – 07.07.2014
        </div>
        <div className="have-jobs">
            <strong>Интернет магазин «Евга кидс» - менеджер – консультант </strong>
            <ul>
                <li>Ведение переговоров, консультирование клиентов</li>
                <li>Прием заказов, ведение их до момента отправки</li>
                <li>Предоставление логистической информации</li>
            </ul>

        </div>
    </div>

</div>




</div>
</div>
    </div>
  );
}

export default App;
