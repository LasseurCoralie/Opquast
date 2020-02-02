import styled from 'styled-components';

import theme from 'src/styles/theme';

const HomePageStyled = styled.div`
  margin: 0 8.3333%;

  div.hp-title{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-top: ${theme.standardSize * 10}em;
    margin-bottom: ${theme.standardSize * 8}em;

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

  div.hp-content{
    margin-bottom: ${theme.standardSize * 6}em;
    
    p{
      font-family: 'Roboto', sans-serif;
      font-size: ${theme.standardSize}em;
      line-height: ${theme.standardSize * 1.5}em;
      -webkit-column-count: 2;
      -moz-column-count: 2;
      column-count: 2;
      -webkit-column-gap: ${theme.standardSize * 5}em;;
      -moz-column-gap: ${theme.standardSize * 5}em;;
      column-gap: ${theme.standardSize * 5}em;
    }
  }
  div.hp-button{
    text-align: center;
    margin-bottom: ${theme.standardSize * 6}em;

    a{
      font-family: 'Roboto Slab', serif;
      font-weight: bold;
      font-size: ${theme.standardSize * 1.5}em;
      padding: ${theme.standardSize}em;
      background-color: ${theme.mainTextColor};
      color: ${theme.backgroundColor};
      border-radius: 5px;
    }
  }
  
`;

export default HomePageStyled;
