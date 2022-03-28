import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import characters from "../characters";
import "../styles/Cover.css";
import cover from "../images/cover.jpg";

const Cover = () => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
      left: window.innerWidth / 2 - rect.left - el.offsetWidth,
      top: window.innerHeight / 2 - rect.top - window.innerHeight / 3,
    };
  };

  const handleClick = (e) => {
    let card = e.target;
    while (!card.classList.contains("card")) card = card.parentElement;
    if (card.classList.contains("expanded")) return;
    card.classList.add("expanded");
    document.getElementById("background").classList.add("active");
    let transform = getOffset(card);
    card.style.transform = `translate(${transform.left}px, ${transform.top}px)`;
    console.log(card.id);
    card.children[1].children[1].innerHTML =
      characters[card.id].bio + characters[card.id].description;
    window.addEventListener("click", handleClose);
  };

  const handleClose = (e) => {
    if (e.target.id === "background") {
      window.removeEventListener("click", handleClose);
      let card = document.getElementsByClassName("card expanded")[0];
      card.classList.remove("expanded");
      card.style.transform = "";
      card.children[1].children[1].innerHTML =
        characters[card.id].bio + " Click on me for more details.";
      document.getElementById("background").classList.remove("active");
    }
  };

  useEffect(() => {
    let cards = document.getElementById("characters").children;
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", handleClick);
    }
  }, []);

  const handleStart = async (e) => {
    e.target.style.display = "hidden";
    let chapterBtns = document.getElementsByClassName("chapter-btn");
    for (let btn of chapterBtns) {
      btn.classList.add("active");
      await delay(100);
    }
  };

  return (
    <>
      <div className="main-header">Princess and the Frog</div>
      <div className="group-members">
        Mario Markovic, Jenna Rae Dela Cruz, Daniel Quizon
      </div>
      <div className="synopsis">
        <div className="syn-header">Original Synopsis</div>
        <div className="syn-text">
          Tiana, a driven African-American woman, aspires to open a restaurant
          in honor of her deceased father in New Orleans. However, she meets a
          frog-turned Prince Naveen who kisses her after mistaking her for a
          princess in an attempt to turn back human, which turns her into a
          frog. Prince Naveen and Tiana then embark on a journey to turn back
          humans through seeking the help of Mama Odie, a voodoo witch with the
          help of Louis, a jazz-loving alligator, and Ray, a cajun firefly.
          However, their adventure is threatened by the forces of the Shadowman,
          Dr. Facilier, who turned Naveen into a frog and Lawrence, Naveen’s
          former servant, into Naveen’s image so that he may marry Charlotte,
          the daughter of a wealthy New Orlean’s resident and both would inherit
          a large sum of money through the marriage.
        </div>
      </div>
      <div className="synopsis">
        <div className="syn-header">Twisted Synopsis</div>
        <div className="syn-text">
          Tiana, a driven African-American woman, aspires to open a restaurant
          in honor of her deceased father in New Orleans. However, she meets a
          frog-turned Prince Naveen who kisses her after mistaking her for a
          princess in an attempt to turn back human, which turns her into a
          frog. Prince Naveen and Tiana then embark on a journey to turn back
          humans through seeking the help of Mama Odie, a voodoo witch with the
          help of Louis, a jazz-loving alligator, and Ray, a cajun firefly.
          However, their adventure is threatened by the forces of the Shadowman,
          Dr. Facilier, who turned Naveen into a frog and Lawrence, Naveen’s
          former servant, into Naveen’s image so that he may marry Charlotte,
          the daughter of a wealthy New Orlean’s resident and both would inherit
          a large sum of money through the marriage.
        </div>
      </div>
      <img src={cover} className="cover" />
      <div className="characters-title">Meet the Characters</div>
      <div className="characters" id="characters">
        {characters.map((character) => {
          return (
            <div className="card-container" key={character.id}>
              <div className="card" id={character.id}>
                <img className="img" src={character.img} />
                <div className="container">
                  <h1 className="name">{character.name}</h1>
                  <p className="bio">
                    {character.bio} Click on me for more details.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="start-btn" onClick={(e) => handleStart(e)}>
        Start Reading
      </button>
      <div className="btn-group" id="btn-group">
        <Link to="/chapter1" className="chapter-btn" id="0">
          Chapter 1
        </Link>
        <Link to="/chapter2" className="chapter-btn" id="1">
          Chapter 2
        </Link>
        <Link to="/chapter3" className="chapter-btn" id="2">
          Chapter 3
        </Link>
        <Link to="/chapter4" className="chapter-btn" id="3">
          Chapter 4
        </Link>
        <Link to="/chapter5" className="chapter-btn" id="4">
          Chapter 5
        </Link>
        <Link to="/chapter6" className="chapter-btn" id="5">
          Chapter 6
        </Link>
        <Link to="/chapter7" className="chapter-btn" id="6">
          Chapter 7
        </Link>
        <Link to="/chapter8" className="chapter-btn" id="7">
          Chapter 8
        </Link>
        <Link to="/chapter9" className="chapter-btn" id="8">
          Chapter 9
        </Link>
        <Link to="/chapter10" className="chapter-btn" id="9">
          Chapter 10
        </Link>
        <Link to="/chapter11" className="chapter-btn" id="10">
          Chapter 11
        </Link>
      </div>
      <div id="background" className="background"></div>
    </>
  );
};

export default Cover;
