import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* { 
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  font-style: normal;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  position: relative;
}

body {
  font-family: 'Lato', sans-serif;
  background-color: #E5E5E5;
}

p {
  font-size: 16;
}

section {
  border-radius: 8px;
  background-color: white;
}

.bg-primary-color {
  background-color: rgb(15,82,186);
}
`;

export default GlobalStyles;
