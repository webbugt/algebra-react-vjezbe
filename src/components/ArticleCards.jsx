import propTypes from "prop-types";

const articles = [
  {
    id: 18,
    title: "Neki naslov članka",
    description: "Neki opis članka malo dulje ide ovdje",
    slug: "neki-naslov-clanka-12ge4r",
    image: "https://via.assets.so/album.png?id=1&q=95&w=130&h=130&fit=fill",
  },
  {
    id: 19,
    title: "Istraživanje Svemira i Nove Tehnologije",
    description:
      "Otkrivamo kako nove tehnologije transformiraju naše istraživanje svemira",
    slug: "istrazivanje-svemira-i-nove-tehnologije-45rt56",
    image: "https://via.assets.so/album.png?id=2&q=95&w=130&h=130&fit=fill",
  },
  {
    id: 20,
    title: "Zaštita Okoliša i Održivi Razvoj",
    description:
      "Pregled najnovijih inicijativa za očuvanje okoliša i poticanje održivog razvoja",
    slug: "zastita-okolisa-i-odrzivi-razvoj-78ui89",
    image: "https://via.assets.so/album.png?id=3&q=95&w=130&h=130&fit=fill",
  },
  {
    id: 21,
    title: "Futurizam u Arhitekturi",
    description:
      "Istražujemo kako futurizam oblikuje moderne arhitektonske pothvate",
    slug: "futurizam-u-arhitekturi-90op0p",
  },
  {
    id: 22,
    title: "Umjetna Inteligencija u Medicini",
    description:
      "Dubinski pogled na ulogu umjetne inteligencije u revolucioniranju zdravstvene skrbi",
    slug: "umjetna-inteligencija-u-medicini-23gh67",
    image: "https://via.assets.so/album.png?id=4&q=95&w=130&h=130&fit=fill",
  },
  {
    id: 23,
    title: "Futurizam u Arhitekturi",
    description:
      "Istražujemo kako futurizam oblikuje moderne arhitektonske pothvate",
    slug: "futurizam-u-arhitekturi-90op0p",
    image: "https://via.assets.so/album.png?id=7&q=95&w=130&h=130&fit=fill"
  },
];

// const articleMapperArrow = ({id, title}) => <ArticleCard key={id} title={title} />

// function articleMapperFunction(article){
//     const {id, title} = article

//     return <ArticleCard key={id} title={title} />
// }

function ArticleCard({ title, imageUrl }) {
    if(!title || !imageUrl){
        return null
    }
  return (
    <div className="ArticleCard" style={{
        display:"flex",
        gap: 20,
        margin: 10
    }}>
        <img src={imageUrl} className="ArticleCard_image" title={title} alt={title} width="130" height="130" />
      <h2>{title}</h2>
    </div>
  );
}

ArticleCard.propTypes = {
  title: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
};

function ArticleCards() {
  return (
    <div className="ArticleCards">
      {articles.map(({ id, title, image }) => {
        return <ArticleCard 
            key={id} 
            title={title} 
            imageUrl={image}
        />;
      })}
    </div>
  );
}

export default ArticleCards;
