import Hero from "@/components/pages/Hero";
import About from "@/components/pages/About";
import Quotes from "@/components/pages/Quotes";
import Service from "@/components/pages/Service";
import Feature from "@/components/pages/Feature";
import Team from "@/components/pages/Team";

import Client from "@/components/pages/Client";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Quotes/>
      <Service/>
      <Feature/>
      <Team/>

      <Client/>

    </>
  );
}
