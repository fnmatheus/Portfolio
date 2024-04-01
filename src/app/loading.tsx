import { Logo } from './components/svgs/Index';
import { HashLoader } from 'react-spinners';

function Loading() {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-top bg-darkGrey text-white gap-12 pt-2 overflow-clip">
      <Logo className="text-5xl" />
      <div className="h-full flex items-center">
        <HashLoader color="#04CDE8" />
      </div>
    </section>
  );
}

export default Loading;
