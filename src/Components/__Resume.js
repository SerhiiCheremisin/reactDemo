import React from 'react';
import {useState, useEffect} from 'react'
import {motion,AnimatePresence} from "framer-motion";

function Resume({darkTheme,lightTheme,ruTheme}) {
    const [jobs,setJobs] = useState(true);


 const myAge = () => {
     let birthDate = new Date(1991,4,31);
     let today = new Date();

    if (today.getMonth() > birthDate.getMonth()){
        return today.getFullYear() - birthDate.getFullYear();
    } else if(today.getMonth() === birthDate.getMonth()) {
        if (today.getDate() === birthDate.getDate()){
            return today.getFullYear() - birthDate.getFullYear();
        } else {
            return today.getFullYear() - birthDate.getFullYear() - 1;
        }
    }
    else{
        return today.getFullYear() - birthDate.getFullYear() - 1;
    }

 }

    let hidden = jobs ? "hidden-jobs-wrapper--hidden":"hidden-jobs-wrapper";
    const jobAppear = () =>{
        setJobs(false)
    }
    const jobHidder = () =>{
        setJobs(true)
    }
if (ruTheme){
    return (

        <motion.div className="resume"
                    exit = {{x:"-100vw"}}>

            <div className="resume-block">
                <motion.div className="resume-block__left"
                            initial = {{x:-1000}}
                            animate = {{x:0}}
                            transition={{duration:.4}}
                >
                    <div className="wrap-block">Контакты</div>
                    <div className="contacts u--lists">
                        <ul>
                            <li><i className="fas fa-phone-volume"></i>Телефон:<a href="tel:+380977978279"> +380977978279</a></li>
                            <li><i className="fas fa-envelope-open"></i>E-mail: <a href="mailto:sebanho@gmail.com">sebanho@gmail.com</a></li>
                            <li><i className="fab fa-telegram-plane"></i>Телеграм: <a href="https://t.me/SerjCheremisin" target="_blank">SerjCheremisin</a></li>
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
                            <li>Html, CSS</li>
                            <li>Javascript, ReactJS , Next.js, Typescript</li>
                            <li>CMS: Joomla, OneBox, Modx, Wezom4.0, 1С Битрикс.</li>
                            <li>Visual Studio, Visual Studio Code, WebStorm</li>
                            <li>Счетчики метрик Google Analytics и Яндекс Метрика</li>
                            <li>Работа с инструментами для вебмастеров от Google и Яндекс</li>
                            <li>Работа с биржами покупки ссылок</li>
                            <li>Начальные знания C++, C#, WForms, WPF</li>
                        </ul>
                        <div className="wrap-block">Еще парочка сайтов-примеров</div>
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href="http://naturecheremisin.zzz.com.ua/">Лендинг с курсов по CSS</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://music-build.vercel.app/">Музыкальное приложение</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://next-js-demo-sepia.vercel.app/">Next.js Демо</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://tsdemo.vercel.app/">TypeScript Demo </a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://games-and-quiz-build-sigma.vercel.app/">Игры на JS</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://github.com/SerhiiCheremisin/reactDemo.git">Git данного демо </a></li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div className={lightTheme ? "resume-block__right light-theme" : "resume-block__right dark-theme"}
                            initial={{x:1000}}
                            animate={{x:0}}
                            transition={{duration:.4}}
                >
                    <div className="resume-block__right--top">
                        <div className="name">
                            <h1>Черемисин Сергей Александрович</h1>
                        </div>
                        <div className="age-loc">
                            <div className="location">
                                <i className="fas fa-map-marker-alt"></i> г. Херсон Украина
                            </div>
                            <div className="age">
                                <i className="fas fa-male"></i> {myAge()} лет
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
                </motion.div>
            </div>
        </motion.div>

    )
}
else {
    return (

        <motion.div className="resume"
                    exit = {{x:"-100vw"}}>

            <div className="resume-block">
                <motion.div className="resume-block__left"
                            initial = {{x:-1000}}
                            animate = {{x:0}}
                            transition={{duration:.4}}
                >
                    <div className="wrap-block">Contacts</div>
                    <div className="contacts u--lists">
                        <ul>
                            <li><i className="fas fa-phone-volume"></i>Telephone:<a href="tel:+380977978279"> +380977978279</a></li>
                            <li><i className="fas fa-envelope-open"></i>E-mail: <a href="mailto:sebanho@gmail.com">sebanho@gmail.com</a></li>
                            <li><i className="fab fa-telegram-plane"></i>Telegram: <a href="https://t.me/SerjCheremisin" target="_blank">SerjCheremisin</a></li>
                        </ul>
                    </div>
                    <div className="wrap-block">Languages</div>
                    <div className="languages u--lists">
                        <ul>
                            <li>Russian and Ukrainian - Native</li>
                            <li>English - Intermediate</li>
                            <li>Spanish - Beginner</li>
                        </ul>
                    </div>
                    <div className="wrap-block">Skills</div>
                    <div className="skills u--lists">
                        <ul>
                            <li>Html, CSS</li>
                            <li>Javascript, ReactJS , Next.js, Typescript</li>
                            <li>CMS: Joomla, OneBox, Modx, Wezom4.0, 1С Bitrix.</li>
                            <li>Visual Studio, Visual Studio Code, WebStorm</li>
                            <li>Metric counters Google Analytics и Yandex Metric</li>
                            <li>Work with tools for webmasters from Google and Yandex</li>
                            <li>Working with link buying exchanges</li>
                            <li>Initial knowledge of C++, C#, WForms, WPF</li>
                        </ul>
                        <div className="wrap-block">A couple more example sites</div>
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href="http://naturecheremisin.zzz.com.ua/">Landing page from CSS courses</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://music-build.vercel.app/">Music app</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://next-js-demo-sepia.vercel.app/">Next.js Demo</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://games-and-quiz-build-sigma.vercel.app/">Games with JS</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://tsdemo.vercel.app/">TypeScript Demo </a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://github.com/SerhiiCheremisin/reactDemo.git">Git of this demo</a></li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div className={lightTheme ? "resume-block__right light-theme" : "resume-block__right dark-theme"}
                            initial={{x:1000}}
                            animate={{x:0}}
                            transition={{duration:.4}}
                >
                    <div className="resume-block__right--top">
                        <div className="name">
                            <h1>Serhii Cheremisin</h1>
                        </div>
                        <div className="age-loc">
                            <div className="location">
                                <i className="fas fa-map-marker-alt"></i> Kherson Ukraine
                            </div>
                            <div className="age">
                                <i className="fas fa-male"></i> {myAge()} years old
                            </div>
                        </div>
                        <div className="photo">
                            <div className="photo-block">
                            </div>
                        </div>
                    </div>
                    <div onClick={jobAppear} className="wrap-block isClickable">Work experience <i className="fas fa-briefcase"></i> </div>
                    <div className="years">
                        24.07.2017 – Now
                    </div>
                    <div className="have-jobs">
                        <strong> Freelancer, SEO </strong>
                        <ul>
                            <li>Working with the structure and semantic core of the site</li>
                            <li>Composing meta tags for the site</li>
                            <li>Drawing up technical specifications for copywriters / programmers</li>
                            <li>Working with analytics counters Google Analytics, Yandex Metrica</li>
                            <li>Working with Google and Yandex webmasters</li>
                            <li>Selection of donors and purchase of eternal links on exchanges: Miralinks, Gogetlinks. PRNews</li>
                            <li>Setting up and maintaining PPC advertising for Google search engines</li>
                        </ul>

                    </div>
                    <div className="years">
                        07.02.2017 – 23.07.2017
                    </div>
                    <div className="have-jobs">
                        <strong> SEO, web studio "Wezom"</strong>
                        <ul>
                            <li>Working with the structure and semantic core of the site</li>
                            <li>Writing meta tags for the site</li>
                            <li>Drawing up technical tasks for authors / programmers</li>
                            <li>Working with analytics counters Google Analytics, Yandex Metrica</li>
                            <li>Working with Google and Yandex webmasters</li>
                        </ul>

                    </div>

                    <div className={hidden}>
                        <div className="hidden-jobs">
                            <button onClick={jobHidder} value="&times;" name="close-jobs" className="close-jobs">X</button>
                            <div className="years">
                                04.01.2016 – 11.01.2017

                            </div>
                            <div className="have-jobs">
                                <strong>Content manager Internet store "evga kids"</strong>
                                <ul>
                                    <li>Filling the site with content</li>
                                    <li>Testing the site at the development stage</li>
                                    <li>Working with analytics counters Google Analytics, Yandex Metrica</li>
                                    <li>Work as a website webmaster</li>
                                </ul>

                            </div>
                            <div className="years">
                                02.06 2015 – 30.12.2015

                            </div>
                            <div className="have-jobs">
                                <strong>SEO, prodvigaem.com.ua </strong>
                                <ul>
                                    <li>Purchase and "cleanup" of eternal and rental advertising links for websites</li>
                                    <li>Selection of sites for placing advertising links</li>
                                    <li>Writing about link texts for advertising on sites</li>
                                    <li>Selection of keywords for website promotion</li>
                                    <li>Negotiating with webmasters of sites</li>
                                    <li>Working with rental and perpetual link exchanges Sape, GoGetLinks</li>

                                </ul>

                            </div>
                            <div className="years">
                                01.02.2015 – 30.05.2015

                            </div>
                            <div className="have-jobs">
                                <strong>Content manager, copywriter of an online sports nutrition store and an automobile forum. Rewriter
                                    on various projects </strong>
                                <ul>
                                    <li>Writing review articles about cars, their components</li>
                                    <li>Description of goods</li>
                                    <li>Description of categories and subcategories of goods</li>
                                    <li>Writing informative articles about sports, sports nutrition</li>
                                </ul>

                            </div>
                            <div className="years">
                                07.07.2014 – 23.01.2015

                            </div>
                            <div className="have-jobs">
                                <strong>Online store "evga kids" SMM, targeted advertising manager</strong>
                                <ul>
                                    <li>Working with targeted advertising</li>
                                    <li>Control over advertisements on the VK.com social network</li>
                                    <li>Defining the target audience and working with it</li>
                                    <li>Creation of ads for the social network VK.com</li>
                                </ul>

                            </div>
                            <div className="years">
                                20.12.2013 – 07.07.2014
                            </div>
                            <div className="have-jobs">
                                <strong>Online store "Evga kids" - manager - consultant</strong>
                                <ul>
                                    <li>Negotiating, advising clients</li>
                                    <li>Acceptance of orders, maintaining them until they are sent</li>
                                    <li>Providing logistic information</li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </motion.div>

    )
}

}

export default Resume;
