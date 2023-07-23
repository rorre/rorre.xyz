import { Fragment, FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Button from '../general/button';

const ROLES = [
  'Software Engineer',
  'Full Stack Engineer',
  'Computer Science Student',
];
const PAUSE_DELAY = 1000;
const TYPE_DELAY = 75;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Header: FunctionalComponent = () => {
  const [word, setWord] = useState('');
  const onButtonClick = (target: string) => {
    document.querySelector(target)!.scrollIntoView({
      behavior: 'smooth',
    });
  };

  async function writeWord(word: string) {
    for (let i = 0; i < word.length; i++) {
      const newWord = word.substring(0, i + 1);
      setWord(newWord);
      await sleep(TYPE_DELAY);
    }
    await sleep(PAUSE_DELAY);
    for (let i = word.length; i >= 0; i--) {
      const newWord = word.substring(0, i);
      setWord(newWord);
      await sleep(TYPE_DELAY);
    }
  }

  useEffect(() => {
    async function start() {
      let i = 0;
      while (true) {
        await sleep(PAUSE_DELAY);
        await writeWord(ROLES[i]);
        i = (i + 1) % ROLES.length;
      }
    }
    start();
  }, []);

  return (
    <Fragment>
      <div className="h-screen md:h-auto md:min-h-[16rem] md:max-h-screen bg-teal-800 py-16 px-8 sm:px-16 md:px-32 lg:px-64 2xl:px-96 3xl:px-[30rem] ">
        <div
          className="flex flex-col md:flex-row items-center justify-center md:gap-24
                     text-white text-xl font-montserrat font-bold container m-auto h-full"
        >
          <div className="w-full">
            <img
              src="/assets/shizu.png"
              className="mx-auto md:mx-0 md:float-right"
              width={336}
              height={400}
            />
          </div>

          <div className="flex flex-col space-y-2 pt-4 md:pt-0 w-full">
            <div className="text-2xl flex flex-col border-l-4 pl-2">
              <h1 className="font-bold">Hello, I'm Ren.</h1>
              <p className="font-assistant font-normal text-lg">
                I am a {word}
                <span className="border-l-2 border-l-gray-500 h-full animate-pulse transition-all" />
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 pl-3">
              <Button
                onClick={() => onButtonClick('#about')}
                className="transition hover:cursor-pointer hover:bg-teal-700"
              >
                About
              </Button>
              <Button
                onClick={() => onButtonClick('#works')}
                className="transition hover:cursor-pointer hover:bg-teal-700"
              >
                Works
              </Button>
              <a href="https://blog.rorre.xyz">
                <Button className="transition hover:cursor-pointer hover:bg-teal-700 w-full">
                  Blog
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
