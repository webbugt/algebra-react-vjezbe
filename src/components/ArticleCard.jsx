import propTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./ArticleCard.module.css";

export function ArticleCard({ title, imageUrl, href, description }) {
  if (!title || !imageUrl || !href) {
    return null;
  }
  return (
    <Link to={href} className={style.card}>
      <img
        src={imageUrl}
        title={title}
        alt={title}
        width="130"
        height="130"
      />
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        {!!description && (
          <p>{description}</p>
        )}
      </div>
    </Link>
  );
}
ArticleCard.propTypes = {
  title: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  href: propTypes.string.isRequired,
  description: propTypes.string,
};
ArticleCard.defaultProps = {
  description: undefined,
};
