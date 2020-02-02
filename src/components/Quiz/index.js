// == Import npm
import React from 'react';

// == Import
import QuizStyled from './QuizStyled';

const Quiz = () => (
  <QuizStyled>
    <div className="quiz-title">
      <div />
      <h1>no limit!</h1>
    </div>
    <form>
      <div className="quiz-content">
        <p className="quiz-info">#29 - Rubrique : contact</p>
        <h2 className="quiz-question">Chaque demande d'information fait-elle l'objet d'un accusé de réception ?</h2>
        <label>
          <input type="radio" value="option1" name="question" />
          oui
        </label>
        <label>
          <input type="radio" value="option2" name="question" />
          non
        </label>
        <div className="quiz-answer">
          <p>
            <span>Réponse :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cumque eaque neque sit! Error odio reiciendis debitis cumque expedita,
            porro tenetur, aperiam sunt.
          </p>
        </div>
      </div>
      <div className="quiz-button">
        <button type="submit" value="envoyer">valider</button>
      </div>
    </form>
  </QuizStyled>
);

export default Quiz;
