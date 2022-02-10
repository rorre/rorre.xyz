import { FunctionalComponent, h } from 'preact';
import About from './about';
import Loader from './general/loader';
import Header from './header';
import Links from './links';
import { Projects, Works } from './works';

const App: FunctionalComponent = () => {
  return (
    <div>
      <Loader>
        <Header />
        <About />
        <Works />
        <Projects />
        <Links />
      </Loader>
    </div>
  );
};

export default App;
