
import React, { useState, useEffect } from "react";
import Bookscard from "../books/Bookscard";
import "./styles.css";
import "./Slider.css"; 
import { useSelector } from "react-redux";

const bsm = {
  eng:["Recommend for You"],
  jap: ["あなたにおすすめ"],

  french: ["Recommander pour vous"],

  german: ["Für Sie empfehlen"]
};



const Recommend = ({ sharedData }) => {
     const [books, setbooks] = useState([]);
        const [selectedc, setslectedc] = useState("choose a genre");
        const [currentSlide, setCurrentSlide] = useState(0);
        const nextSlide = () => {
          setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
        };
      
        const prevSlide = () => {
          setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
        };
      
        useEffect(() => {
            fetch(`books${sharedData}.json`).then(res =>  res.json()).then((data) => setbooks(data));
        
            
        }, [sharedData])
       
        const totalSlides = books.slice(8,18).length;
  return (
    <div className='py-7 md:ml-[1%]'>
        <h2 className='text-3xl font-semibold mb-6'>{bsm[sharedData]}</h2>
        <div className="slider">
        <div
          className="slides-container"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {books.length > 0 &&
            books.slice(8,18).map((book, index) => (
              <div className="slide" key={index}>
                <Bookscard book={book} />
              </div>
            ))}
        </div>
        <button className="prev-btn" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next-btn" onClick={nextSlide}>
          &#10095;
        </button>
        <div className="dots">
          {books.slice(8,18).map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Recommend
