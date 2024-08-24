import PropTypes from "prop-types";

const Course = ({ course }) => {
  const {
    title = "Kurs Başlığı",
    description = "Kurs açıklaması burada.",
    price = "Fiyat bilgisi mevcut değil",
    link = "#",
    image = "default-image-url.jpg",
  } = course;

  return (
    <article className="course-card">
      <img src={image} alt={title} className="course-card__image" />
      <h4 className="course-card__title">{title}</h4>
      <p className="course-card__description">{description}</p>
      <h3 className="course-card__price">{price} ₺</h3>
      <a href={link} className="course-card__link">
        Satın Almak İçin
      </a>
    </article>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Course;
