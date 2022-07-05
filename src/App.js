import { createGlobalStyle } from 'styled-components';
import './App.css';
import { RenderForm } from './component/renderForm';

function App() {
  return (
    <>
      <GlobalStyle/>
      <RenderForm/>
    </>
  );
}


const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box
}
`

export default App;
