import ArticleCards from "../containers/ArticleCards.jsx";
import Header from "../components/layout/Header.jsx";
import InteractiveSvg from "../containers/InteractiveSvg.jsx";
import { YellowTitle } from "../components/Titles.jsx";

export function Primjeri() {
  return (
    <div>
      <Header />
      <YellowTitle title="Primjeri" className="PrimjeriPage_title" />
      <ArticleCards />
      <InteractiveSvg
        circles={["#0ff000", "red", "maroon", "magenta", "green", "blue"]}
      />
    </div>
  );
}
