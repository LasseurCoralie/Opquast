import { connect } from 'react-redux';

import Quiz from 'src/components/Quiz';

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
  };
};

const mapDispatchToProps = {};

const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quiz);

export default QuizContainer;
