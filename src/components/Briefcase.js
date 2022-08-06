import React from "react";
import clima from "../images/clima.PNG";
import rickandmorty from "../images/rickandmorty.PNG";
import pokeapi from "../images/pokeapi.PNG";
import frases from "../images/frases.PNG";

const Briefcase = () => {
  return (
    <div>
      <section class="portfolio-section">
        <div class="portfolio-container">
          <article class="portfolio-title">
            <h3 className="title-works">My Work</h3>
          </article>
          <article class="portfolio-inner">
            <ul className="list-works">
              <li>
                <figure class="portfolio-img-container">
                  <img className="img-works" src={clima} alt="Clima" />
                </figure>
              </li>
              <li className="img-works">
                <figure class="portfolio-img-container">
                  <img className="img-works" src={pokeapi} alt="Poke-Api" />
                </figure>
              </li>
              <li className="img-works">
                <figure class="portfolio-img-container">
                  <img
                    className="img-works"
                    src={rickandmorty}
                    alt="Rick-and.Morty"
                  />
                </figure>
              </li>
              <li className="img-works">
                <figure class="portfolio-img-container">
                  <img className="img-works" src={frases} alt="phrases" />
                </figure>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Briefcase;
