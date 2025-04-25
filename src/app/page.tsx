import Header from "./components/Header"
import Feature from "./components/Feature"
import Stats  from './components/Stats';
import CTA from './components/CTA';
import QuickLinks from './components/QuickLinks';
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header/>
      <Feature/>
      <Stats/>
      <CTA/>
      <QuickLinks/>
    </div>
  );
}
