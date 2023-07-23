import { FunctionalComponent } from 'preact';
import About from './about';
import Header from './header';
import Links from './links';
import { Projects, Works } from './works';

const App: FunctionalComponent = () => {
  return (
    <div>
      <Header />
      <About />
      <Works />
      <Projects />
      <Links />
    </div>
  );
};

export default App;
