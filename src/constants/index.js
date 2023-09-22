export const users = JSON.parse(localStorage.getItem("users"));

export const mentors = JSON.parse(localStorage.getItem("mentors"));
export const navItems = [
  {
    label: "Bosh Sahifa",
    path: "/",
    active: "home",
  },
  {
    label: "Biz Haqimizda",
    path: "/about",
    active: "about",
  },
  {
    label: "Kurslar",
    path: "/courses",
    active: "courses",
  },
  {
    label: "Kontakt",
    path: "/contact",
    active: "contact",
  },
];

export const logo = "https://pc.uz/storage/publications/October2020/q.png";

export const homeImage = "https://it-park.uz/images/IT-Academy_%20Data.png";

export const aboutImage =
  "https://xojelitcenter.netlify.app/image/about-img.png";

export const operatorImg =
  "https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483601-2912018.png";
