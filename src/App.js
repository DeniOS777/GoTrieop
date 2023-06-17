import { AppBar } from './components/AppBar';
import { Hero } from './components/Hero';
import { Choice } from './components/Choice';
import { Feedback } from './components/Feedback';
import { Info } from './components/Info';
import { Subscribe } from './components/Subscribe';
import { FooterPage } from './components/FooterPage';

const App = () => {
  return (
    <>
      <AppBar />
      <main>
        <Hero />
        <Choice />
        <Feedback />
        <Info />
        <Subscribe />
      </main>
      <FooterPage footer />
    </>
  );
};

export default App;
