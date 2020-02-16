// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import QuizStyled from './QuizStyled';

const Quiz = ({ quiz }) => {
  const getRandomNb = (min, max) => {
    const randomNb = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNb;
  };

  const randomQuestion = quiz[getRandomNb(1, 5)];
  console.log(quiz);

  return (
    <QuizStyled>
      <div className="quiz-title">
        <div />
        <h1>no limit!</h1>
      </div>
      <form>
        <div className="quiz-content">
          {/* Début map */}
          <p className="quiz-info">#{randomQuestion.id} - Rubrique : {randomQuestion.rubrique}</p>
          <h2 className="quiz-question">{randomQuestion.questions}</h2>
          <label>
            <input type="radio" value="option1" name="question" />
            {randomQuestion.goodAnswer}
          </label>
          <label>
            <input type="radio" value="option2" name="question" />
            {randomQuestion.wrongAnswer}
          </label>
          <div className="quiz-answer">
            <p className="answer">
              <span>Réponse :</span> {randomQuestion.quote}
            </p>
            <p className="goals">
              <span>Objectifs :</span> {randomQuestion.goals}
            </p>
            <div className="quiz-link">
              <a href={randomQuestion.link}>Cliquer ici pour en savoir plus !</a>
            </div>
          </div>
          {/* Fin map */}
        </div>
        <div className="quiz-button">
          <button type="submit" value="envoyer">valider</button>
        </div>
      </form>
    </QuizStyled>
  );
};

Quiz.propTypes = {
  quiz: PropTypes.shape(
    PropTypes.number.isRequired,
  ).isRequired,
};

export default Quiz;
