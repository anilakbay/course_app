// Görsellerin import edilmesi
import CsharpImage from "./images/csharp.png";
import JavaScriptImage from "./images/js.jpg";
import SqlImage from "./images/sql.png";
import ReactImage from "./images/react.png";

// Kurslar verisi
export const courses = [
  {
    id: 263,
    title: "C# Programming Language",
    description:
      "C# programlama dili üzerine kapsamlı bir eğitim. Bu eğitim ile C# dilinde uzmanlaşabilirsiniz.",
    price: 150,
    link: "https://www.udemy.com/course/c-sharp-programlama-dili-her-seviyeye-hitap-eden-egitim-seti/?kw=C%23+progra&src=sac&couponCode=SKILLS4SALE",
    image: CsharpImage,
  },
  {
    id: 340,
    title: "JavaScript Language",
    description:
      "JavaScript dili ile web geliştirme ve programlama üzerine detaylı bir eğitim. Modern JavaScript öğrenmek için bu eğitim seti idealdir.",
    price: 120,
    link: "https://www.udemy.com/course/javascript-egitimi/?couponCode=SKILLS4SALE",
    image: JavaScriptImage,
  },
  {
    id: 562,
    title: "SQL Server Training",
    description:
      "SQL Server üzerinde veritabanı yönetimi ve sorgulama işlemleri üzerine eğitim. SQL Server konusunda uzmanlaşın.",
    price: 130,
    link: "https://www.udemy.com/course/sql_kursu/#reviews",
    image: SqlImage,
  },
  {
    id: 650,
    title: "React.js and Redux Programming",
    description:
      "React.js ve Redux kütüphanesi ile modern web uygulamaları geliştirme üzerine eğitim. Frontend geliştirmede uzmanlaşın.",
    price: 170,
    link: "https://www.udemy.com/course/react-egitimi/?couponCode=SKILLS4SALE",
    image: ReactImage,
  },
];
