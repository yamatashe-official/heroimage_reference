import Hero1 from "../components/Hero/Hero1/Hero1";
import Hero2 from "../components/Hero/Hero2/Hero2";
import Hero3 from "../components/Hero/Hero3/Hero3";
import Hero4 from "../components/Hero/Hero4/Hero4";
import Hero5 from "../components/Hero/Hero5/Hero5";
import BackgroundLayout from "../layouts/BackgroundLayout";
import { useSelector } from "react-redux";

export default function Homepage() {
  const pageState = useSelector((state) => state.pageState);
  const HeroSelection = [
    <Hero1 key={"herok1"} />,
    <Hero2 key={"herok2"} />,
    <Hero3 key={"herok3"} />,
    <Hero4 key={"herok4"} />,
    <Hero5 key={"herok5"} />,
  ];

  const renderedHeroSection = HeroSelection.map((hero, index) => {
    return index === pageState.page ? hero : null;
  });

  return (
    <BackgroundLayout>
      <header>
        <title>Hero Image References</title>
        <meta
          name="description"
          content="Hero Image References. Used as demo react project and for production use"
        />
        {renderedHeroSection}
      </header>
    </BackgroundLayout>
  );
}
