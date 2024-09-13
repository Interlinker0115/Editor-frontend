import Image from "next/image";
import Header from "./component/header/header"
import Innovation from "./component/innovation/innovation"
import Benefit from "./component/benefit/benefit.js"
import Step from "./component/step/step"
import PriceCard from "./component/pricecard/pricecard"
import Faq from "./component/faq/faq"
import Testmonial from './component/testmonial/testmonial';
import Footer from './component/footer/footer';

export default function Home() {

  return (
    <div>
      <Header />
      <Innovation />
      <Benefit />
      <Step />
      <PriceCard />
      <Faq />
      <Testmonial />
      <Footer />
    </div>
  );
}
