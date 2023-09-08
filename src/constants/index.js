fetch("http://localhost:3001/courses")
  .then((res) => res.json())
  .then((data) => {
    localStorage.setItem("courses", JSON.stringify(data));
    return data
  });
fetch("http://localhost:3001/users")
  .then((res) => res.json())
  .then((data) => localStorage.setItem("users", JSON.stringify(data)));

export const courses = JSON.parse(localStorage.getItem('courses'))

export const users = JSON.parse(localStorage.getItem('users'))
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


export const teams = [
  {
    name: "Allayarov Otabek",
    job: "Android Dasturlash",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    social: {
      phone: "+998913990636",
      instagramm: "#",
      telegramm: "#",
    },
  },
  {
    name: "Abdullayev Sultonbek",
    job: "Kompyuter Savodxonligi",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    social: {
      phone: "+99891356469",
      instagramm: "#",
      telegramm: "#",
    },
  },
  {
    name: "Nurullayev Samandar",
    job: "Front End (Web Dasturlash)",
    image:
      "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=400",
    social: {
      phone: "+998907071563",
      instagramm: "#",
      telegramm: "https://t.me/@DevelopeR_0431",
    },
  },
  {
    name: "Nurillayev Samandar",
    job: "IT Matematika",
    image:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
    social: {
      phone: "+998907071563",
      instagramm: "#",
      telegramm: "https://t.me/@DevelopeR_0431",
    },
  },
  {
    name: "Asadbek",
    job: "Python",
    image:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
    social: {
      phone: "+998907071563",
      instagramm: "#",
      telegramm: "https://t.me/@DevelopeR_0431",
    },
  },
  {
    name: "Mamedova Nilufar",
    job: "1C Bug'alteria",
    image:
      "https://bootstrapmade.com/demo/templates/Arsha/assets/img/team/team-2.jpg",
    social: {
      phone: "+998907071563",
      instagramm: "#",
      telegramm: "https://t.me/@DevelopeR_0431",
    },
  },
  {
    name: "Undefined",
    job: "IT Enlish",
    image:
      "https://bootstrapmade.com/demo/templates/Arsha/assets/img/team/team-2.jpg",
    social: {
      phone: "+998907071563",
      instagramm: "#",
      telegramm: "https://t.me/@DevelopeR_0431",
    },
  },
  {
    name: "Batir",
    job: "Grafik Dizayner",
    image:
      "https://bootstrapmade.com/demo/templates/Arsha/assets/img/team/team-3.jpg",
    social: {
      phone: "+998907071563",
      instagramm: "#",
      telegramm: "https://t.me/@DevelopeR_0431",
    },
  },
];
export const courseInfo = [
  {
    title: users.length,
    desription: "Studenst",
    color: "coral",
    icon: "bi bi-camera-video",
  },
  {
    title: courses.length,
    desription: "courses",
    color: "coral",
    icon: "bi bi-camera-video",
  },
  {
    title: teams.filter((c, idx) => c.name !== teams[idx - 1].name),
    desription: "Mentors",
    color: "coral",
    icon: "bi bi-camera-video",
  },
];



