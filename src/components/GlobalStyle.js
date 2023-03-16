import { injectGlobal } from '@emotion/css';
import 'modern-normalize';

injectGlobal`

  @font-face {
font-family: 'Karla', sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap");

  }

  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Karla'
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default injectGlobal;
