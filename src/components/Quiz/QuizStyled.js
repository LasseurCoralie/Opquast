import styled from 'styled-components';

import theme from 'src/styles/theme';

const QuizStyled = styled.div`
  margin: 0 8.3333%;

  div.quiz-title{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-top: ${theme.standardSize * 10}em;
    margin-bottom: ${theme.standardSize * 6}em;

    div{
      height: ${theme.standardSize * 3}em;
      width: ${theme.standardSize}em;
      background-color: ${theme.mainTextColor};
      border-radius: 5px;
      margin-right: ${theme.standardSize}em;
    }

    h1{
      font-size: ${theme.standardSize * 4}em;
      font-family: 'Roboto Slab', serif;
      font-weight: bold;
      color: ${theme.mainTextColor};
    }
  }

  div.quiz-content{
    margin: 0 15%;
    padding: ${theme.standardSize * 2}em;
    border:  ${theme.standardSize}em solid ${theme.mainTextColor};
    border-radius: 10px;

    p.quiz-info{
      margin-bottom: ${theme.standardSize}em;
      font-family: 'Roboto', sans-serif;
      font-weight: bold
    }

    h2.quiz-question{
      font-family: 'Roboto Slab', serif;
      font-size: ${theme.standardSize * 1.5}em;
      margin-bottom: ${theme.standardSize * 2}rem;
    }

    label{
      margin-bottom: ${theme.standardSize}em;
      font-family: 'Roboto', sans-serif;
      font-size: ${theme.standardSize}em;
      display: flex;
      align-items: center;

      input{
        margin: 0 ${theme.standardSize}em 0 0;
      }
    }

    div.quiz-answer{
      margin: ${theme.standardSize * 2}em ${theme.standardSize * 3}em 0 ${theme.standardSize * 3}em;
    
      p{
        border-top: 1px solid ${theme.mainTextColor};
        padding-top:${theme.standardSize}em;
      
        span{
          text-decoration: underline;
        }
      }
    }
  }

  div.quiz-button{
    text-align: center;
    margin-top:${theme.standardSize * 4}em;
    margin-bottom:${theme.standardSize * 6}em;
    
    button{
      font-family: 'Roboto Slab', serif;
      font-weight: bold;
      font-size: ${theme.standardSize * 1.5}em;
      padding: ${theme.standardSize}em;
      background-color: ${theme.mainTextColor};
      color: ${theme.backgroundColor};
      border-radius: 5px;
      border: none;
    }
  }
  
`;

export default QuizStyled;
