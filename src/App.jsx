import Header from "./Header.jsx";
import { courses } from "./data.jsx";
import "./css/Course.css";
import "./css/Header.css";

function App() {
  return (
    <div>
      <Header />
      <div className="course-main">
        {courses.map((course) => (
          <div className="course" key={course.id}>
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <h4 className="course-title">{course.title}</h4>
            <p className="course-desc">{course.description}</p>
            <h3 className="course-price">{course.price} ₺</h3>
            <div className="course-link">
              <a href={course.link}>Satın almak için</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
