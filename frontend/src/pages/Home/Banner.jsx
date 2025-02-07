// import React from 'react'
// import bannerImg from "../../assets/banner.png"

// const Banner = () => {
//   return (
//     <div className='flex h-[30vh] w-[100vw] md:mx-[10%] my-[5%] md:flex-row flex-col relative'>
//        <div className='md:w-1/2 mt-[5%] h-[30vh] w-full'>
//             <h1 className='font-bold md:text-5xl text-xl mb-7'>New Release This Week</h1>
//             <p className='mb-10'>It's time to update your reading list with some of the latest
//                  and greatest releases in the literary world. From heart-pumping thrillers to 
//                  captivating memoirs, this week's new releases offer something for everyone</p>
//             <button className='btn-primary absolute right-[0%] bottom-[] md:left-[0%] md:w-1/5 md:bottom-[-45%] p-0 m-0 '>Subscribe</button>
//        </div>
//        <div className=''>
//          <img src={bannerImg} alt="" className='size-60 md:size-auto ' />
//        </div>
//     </div>
//   )
// }

// export default Banner

import React from 'react';
import bannerImg from "../../assets/banner.png";
import { useSelector } from "react-redux";
const ntr = {
  eng: [
    "New Release This Week!",
    "It's time to update your reading list with some of the latest and greatest releases in the literary world.",
    "From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.",
    "Subscribe"
  ],

  jap: [
    "今週の新刊！",
    "あなたの読書リストを最新の素晴らしい本で更新する時が来ました。",
    "スリリングな小説から魅力的な回想録まで、今週の新刊は誰にでも楽しめるものがあります。",
    "購読する"
  ],

  french: [
    "Nouvelle sortie cette semaine !",
    "Il est temps de mettre à jour votre liste de lecture avec les dernières et meilleures sorties du monde littéraire.",
    "Des thrillers palpitants aux mémoires captivants, les nouveautés de cette semaine offrent quelque chose pour tout le monde.",
    "s'abonner"
  ],

  german: [
    "Neue Veröffentlichung diese Woche!",
    "Es ist Zeit, Ihre Leseliste mit einigen der neuesten und besten Veröffentlichungen in der literarischen Welt zu aktualisieren.",
    "Von nervenaufreibenden Thrillern bis hin zu fesselnden Memoiren – die Neuerscheinungen dieser Woche haben für jeden etwas zu bieten.",
    "abonnieren"
  ]
};


const Banner = () => {
   const selectlan = useSelector((state) => state.language.selectedLan);
  return (
    <div className="flex flex-col md:flex-row h-auto w-screen md:ml-[10%] my-[5%]  relative md:h-[30vh] md:w-[100%]">
      {/* Left Content */}
      <div className="md:w-1/2 w-full p-5 md:mt-0 mt-5 flex flex-col justify-center items-start">
        <h1 className="font-bold text-2xl md:text-5xl mb-5">{ntr[selectlan][0]}</h1>
        <p className="text-sm md:text-base mb-5">
        {ntr[selectlan][1]}{ntr[selectlan][2]}
        </p>
        <button className="btn-primary md:w-2/5 w-2/3 py-2 px-4 md:mt-8 ">{ntr[selectlan][3]}</button>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img 
          src={bannerImg} 
          alt="Banner" 
          className="w-5/6 md:w-full h-auto object-contain" 
        />
      </div>
    </div>
  );
};

export default Banner;
