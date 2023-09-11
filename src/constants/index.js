fetch("http://localhost:3001/courses")
  .then((res) => res.json())
  .then((data) => {
    localStorage.setItem("courses", JSON.stringify(data));
    return data;
  });
fetch("http://localhost:3001/users")
  .then((res) => res.json())
  .then((data) => localStorage.setItem("users", JSON.stringify(data)));
fetch("http://localhost:3001/mentors")
  .then((res) => res.json())
  .then((data) => localStorage.setItem("mentors", JSON.stringify(data)));

export const courses = JSON.parse(localStorage.getItem("courses"));

export const users = JSON.parse(localStorage.getItem("users"));

export const mentors = JSON.parse(localStorage.getItem("mentors"));
export const navItems = [
  {
    label: "Bosh Sahifa",
    path: "/",
  },
  {
    label: "Biz Haqimizda",
    path: "/about",
  },
  {
    label: "Kurslar",
    path: "/courses",
  },
  {
    label: "Kontakt",
    path: "/contact",
  },
];

export const logo = "https://pc.uz/storage/publications/October2020/q.png";

export const homeImage = "https://it-park.uz/images/IT-Academy_%20Data.png";

export const aboutImage =
  "https://xojelitcenter.netlify.app/image/about-img.png";

export const operatorImg =
  "https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483601-2912018.png";

export const courseInfo = [
  {
    title: users.length,
    desription: "Studenst",
    color: "coral",
    icon: "bi bi-person",
  },
  {
    title: courses.length,
    desription: "courses",
    color: "coral",
    icon: "bi bi-camera-video",
  },
  {
    title: mentors.length,
    desription: "Mentors",
    color: "coral",
    icon: "bi bi-person-circle`",
  },
];
