import propTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./ArticleCard.module.css"

export function ArticleCard({ title, imageUrl, href, description }) {
    if (!title || !imageUrl || !href) {
        return null;
    }
    return (
        <Link
            to={href}
            className={style.card}
            style={{
                display: "flex",
                gap: 20,
                margin: 10,
                textDecoration: "none",
                color: "white",
            }}
        >
            <img
                src={imageUrl}
                className="ArticleCard_image"
                title={title}
                alt={title}
                width="130"
                height="130" />
            <div
                className="ArticleCard_content"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <h2 className={style.title}>{title}</h2>
                {!!description && (
                    <p className="ArticleCard_description">{description}</p>
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
