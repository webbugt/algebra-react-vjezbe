const defaultCatImageUrl =
  "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg";

function CatImage({ src = defaultCatImageUrl, className, width = 200 }) {
  return (
    <img
      className={className}
      src={src}
      alt="Cat"
      title="Mačak"
      width={width + "px"}
    />
  );
}

export default CatImage;
