import styled from 'styled-components';

import theme from 'src/styles/theme';

const FooterStyled = styled.footer`
  font-family: 'Roboto Slab', serif;
  margin: ${theme.standardSize}em auto 0 auto;
  text-align: center;
  height: ${theme.standardSize * 2}em;
  position: fixed;
  bottom: 0;
  width: ${theme.screenSize}px;
  padding-bottom: ${theme.standardSize * 3}em;
  background-color: ${theme.backgroundColor};

  div{
    border-top: 1px ${theme.mainTextColor} solid;
    display: block;
    width: 50%;
    padding-top: ${theme.standardSize}em;
    margin:0 auto;

    a{
    font-size: ${theme.standardSize / 1.3333}em;
    }
  }
  
`;

export default FooterStyled;
