import ArticleCards from "../components/ArticleCards.jsx";
import Header from "../components/Header.jsx";
import InteractiveSvg from "../components/InteractiveSvg.jsx";
import { FancyTitle } from "../components/Titles.jsx";

export function Primjeri() {
  return (
    <div>
      <Header />
      <FancyTitle title="Primjeri" />
      <ArticleCards />
      <InteractiveSvg
        circles={["#0ff000", "red", "maroon", "magenta", "green", "blue"]}
      />
    </div>
  );
}
