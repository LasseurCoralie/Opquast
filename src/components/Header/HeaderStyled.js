import styled from 'styled-components';

import theme from 'src/styles/theme';

const HeaderStyled = styled.header`
  font-family: 'Roboto Slab', serif;

  nav{
    display: flex;
    flex-direction: column; 
    position: fixed;
    top: ${theme.standardSize * 4}rem;
    right: 8.33333%;
  }

  a{
    color: ${theme.mainTextColor};
    padding-bottom: ${theme.standardSize}rem;

    &:hover{
      text-decoration: underline;
      font-weight: bold;
    }

    &:active{
      text-decoration: underline;
    }
  }
`;

export default HeaderStyled;
