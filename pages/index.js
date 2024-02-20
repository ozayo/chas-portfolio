import Cta from "@/components/Cta";
import HomeProjects from "@/components/HomeProjects";
import MainHero from "@/components/MainHero";
import MarqueeHome from "@/components/MarqueeHome";

export const metadata = {
  title: "Chas Portfollio",
  description: "Chas portfollio uppgift",
};

export default function Home() {
  return (
    <>
      <MainHero />
      <MarqueeHome />
      <HomeProjects />
      <Cta />
    </>
  );
}
