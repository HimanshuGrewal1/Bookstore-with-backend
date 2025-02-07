import React from 'react'
import "./styles.css";
import "./SSS.css"; 
import  { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import news1 from "../../assets/news/news-1.png"
import news2 from "../../assets/news/news-2.png"
import news3 from "../../assets/news/news-3.png"
import news4 from "../../assets/news/news-4.png"
import { useSelector } from "react-redux";

const nsm = {
  eng:["News"],
  jap: ["ニュース"],

  french: ["Nouvelles"],

  german: ["Nachricht"]
};

const NewData={

 eng :[
    {
        "id": 1,
        "title": "Global Climate Summit Calls for Urgent Action",
        "description": "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
        "image": news1
    },
    {
        "id": 2,
        "title": "Breakthrough in AI Technology Announced",
        "description": "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
        "image": news2
    },
    {
        "id": 3,
        "title": "New Space Mission Aims to Explore Distant Galaxies",
        "description": "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
        "image": news3
    },
    {
        "id": 4,
        "title": "Stock Markets Reach Record Highs Amid Economic Recovery",
        "description": "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
        "image": news4
    },
    {
        "id": 5,
        "title": "Innovative New Smartphone Released by Leading Tech Company",
        "description": "A leading tech company has released its latest smartphone model, featuring cutting-edge technology, improved battery life, and a sleek new design.",
        "image": news2
    }
],

 jap : [
    {
      "id": 1,
      "title": "世界気候サミット、緊急行動を呼びかけ",
      "description": "世界のリーダーが世界気候サミットに集まり、炭素排出の削減と再生可能エネルギーソリューションの促進に焦点を当てた気候変動対策を議論しました。",
      "image": news1
    },
    {
      "id": 2,
      "title": "AI技術の突破的進展が発表される",
      "description": "研究者たちによるAIの大きな進展が発表され、医療から金融業界に至るまでの業界に革命をもたらすことが期待されています。",
      "image": news2
    },
    {
      "id": 3,
      "title": "新しい宇宙ミッション、遠くの銀河を探索へ",
      "description": "NASAは遠くの銀河を探索し、宇宙の起源に関する洞察を明らかにすることを目的とした新しい宇宙ミッション計画を発表しました。",
      "image": news3
    },
    {
      "id": 4,
      "title": "経済回復の兆しに伴い株式市場が史上最高値を記録",
      "description": "世界的なパンデミックによる課題を乗り越えた後、経済回復の兆しとともに世界の株式市場は史上最高値を記録しました。",
      "image": news4
    },
    {
      "id": 5,
      "title": "主要技術企業、革新的な新型スマートフォンを発表",
      "description": "主要技術企業が最新のスマートフォンモデルを発表しました。最先端技術、改善されたバッテリー寿命、そして洗練された新デザインが特徴です。",
      "image": news2
    }
  ],
  
   french : [
    {
      "id": 1,
      "title": "Le Sommet Mondial sur le Climat appelle à une action urgente",
      "description": "Les dirigeants mondiaux se réunissent lors du Sommet Mondial sur le Climat pour discuter des stratégies urgentes visant à lutter contre le changement climatique, en se concentrant sur la réduction des émissions de carbone et la promotion des solutions énergétiques renouvelables.",
      "image": news1
    },
    {
      "id": 2,
      "title": "Annonce d'une avancée majeure en technologie IA",
      "description": "Une avancée majeure en intelligence artificielle a été annoncée par des chercheurs, avec des progrès promettant de révolutionner des secteurs tels que la santé et les finances.",
      "image": news2
    },
    {
      "id": 3,
      "title": "Nouvelle mission spatiale pour explorer des galaxies lointaines",
      "description": "La NASA a dévoilé des plans pour une nouvelle mission spatiale visant à explorer des galaxies lointaines, avec l'espoir de découvrir des informations sur les origines de l'univers.",
      "image": news3
    },
    {
      "id": 4,
      "title": "Les marchés boursiers atteignent des sommets historiques grâce à la reprise économique",
      "description": "Les marchés boursiers mondiaux ont atteint des sommets historiques alors que les signes de reprise économique continuent d'émerger après les défis posés par la pandémie mondiale.",
      "image": news4
    },
    {
      "id": 5,
      "title": "Nouvelle génération de smartphone lancée par une entreprise leader",
      "description": "Une entreprise technologique leader a lancé son dernier modèle de smartphone, doté de technologies de pointe, d'une durée de vie de batterie améliorée et d'un design élégant.",
      "image": news2
    }
  ],
  
   german : [
    {
      "id": 1,
      "title": "Weltklimagipfel ruft zu dringenden Maßnahmen auf",
      "description": "Weltführer versammeln sich auf dem Weltklimagipfel, um dringende Strategien zur Bekämpfung des Klimawandels zu diskutieren, mit Schwerpunkt auf der Reduzierung von Kohlenstoffemissionen und der Förderung erneuerbarer Energielösungen.",
      "image": news1
    },
    {
      "id": 2,
      "title": "Durchbruch in der KI-Technologie angekündigt",
      "description": "Ein bedeutender Durchbruch in der künstlichen Intelligenz wurde von Forschern angekündigt, mit neuen Fortschritten, die Branchen von der Gesundheitsversorgung bis zur Finanzwirtschaft revolutionieren sollen.",
      "image": news2
    },
    {
      "id": 3,
      "title": "Neue Weltraummission soll ferne Galaxien erkunden",
      "description": "Die NASA hat Pläne für eine neue Weltraummission vorgestellt, die ferne Galaxien erforschen soll, mit der Hoffnung, Einblicke in die Ursprünge des Universums zu gewinnen.",
      "image": news3
    },
    {
      "id": 4,
      "title": "Aktienmärkte erreichen Rekordhöhen durch wirtschaftliche Erholung",
      "description": "Die globalen Aktienmärkte haben Rekordhöhen erreicht, da sich weiterhin Anzeichen für eine wirtschaftliche Erholung nach den Herausforderungen der globalen Pandemie zeigen.",
      "image": news4
    },
    {
      "id": 5,
      "title": "Innovatives neues Smartphone von führendem Technologieunternehmen veröffentlicht",
      "description": "Ein führendes Technologieunternehmen hat sein neuestes Smartphone-Modell vorgestellt, das Spitzentechnologie, verbesserte Akkulaufzeit und ein schlankes neues Design bietet.",
      "image": news2
    }
  ],
};

const News = ({ sharedData }) => {
  const selectlan = useSelector((state) => state.language.selectedLan);
 
    const [currentSlide, setCurrentSlide] = useState(0);
    // const news=`news${sharedData}`
   
    const totalSlides =NewData[sharedData]?.length 
   

            const nextSlide = () => {
              setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
            };
          
            const prevSlide = () => {
              setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
            };   
          
  return (
      <div className='py-7 md:ml-[1%]'>
      <h2 className='text-3xl font-semibold mb-6'>{nsm[selectlan]}</h2>
      <div className="slider1">
        <div
          className="slides-container1"
          style={{
            transform: `translateX(-${currentSlide * 50}%)`,
          }}
        >
          {NewData[sharedData]?.length > 0 &&
            NewData[sharedData].map((item, index) => (
              <div className="slide1" key={index}>
                   <div className='flex justify-between '>
                    <div className='py-4 flex justify-center w-2/3 flex-col gap-6 justify-items-center ali'>
                        <Link to="/">
                        <h3 className='font-semibold'>{item.title}</h3>
                        </Link>
                        <p>{item.description}</p>
                    </div>
                    <div className='flex justify-center w-1/3'><img  src={item.image} alt="" /></div>
                   </div>
              </div>
            ))}
        </div>
        <button className="prev-btn1" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next-btn1" onClick={nextSlide}>
          &#10095;
        </button>
        
      </div>
    </div>
  )
}

export default News
