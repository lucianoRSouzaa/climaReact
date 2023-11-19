import './index.css'

import Header from './components/Header'
import Main from './components/Main'
import { ThemeProvider } from './components/Theme/ThemeProvider';


function App() {
  return (
    <ThemeProvider>
      <main>
        <Header />
        <Main />
      </main>
    </ThemeProvider>
  );
}

export default App;
