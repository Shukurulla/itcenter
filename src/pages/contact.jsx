import { useContext, useEffect, useState } from "react";
import { operatorImg } from "../constants";
import "../styles/contact.css";
import { courses } from "../constants";
import Button from "../ui/button";
import { Context } from "../context";
import Modal from "../components/modal";
import failurePng from "../../public/pngegg.png";
// import {useNavigate} from 'react-router-dom'

const Contact = () => {
  document.title = "IT Center | Kontact";

  const [couseIndex, setCourseIndex] = useState(0);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [course, setCourse] = useState("Android");
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState([]);
  const [open, setOpen] = useState(false);

  const msg = [
    {
      status: "success",
      message: "Tez orada hodimlarimiz siz bilan boglanishadi",
      label: "Bosh sahifaga qaytish",
      path: "/",
      image:
        "https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png",
    },
    {
      status: "danger",
      message: "Notogri malumot kirittingiz",
      label: "Qayta urunish",
      path: "/contact",
      image: failurePng,
    },
  ];

  const { setActive } = useContext(Context);
  useEffect(() => {
    setActive(3);
  }, []);

  const postUser = (e) => {
    e.preventDefault();
    if (isNaN(tel) && name.length < 2) {
      return <Modal msg={message[1]} />;
    } else {
      fetch("http://localhost:3001/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone: tel, course }),
      })
        .then((res) => res.json())
        .then((data) => (data && setModal(true), setMessage(msg[0])))
        .catch(
          (err) => (err && setModal(true), setMessage(msg[1]), console.log(err))
        );
    }
  };

  return modal ? (
    <Modal msg={message} setModal={setModal} />
  ) : (
    <div className="container py-5">
      <h2 className="text-center py-3">Contact</h2>

      <div className="row align-items-center">
        <div className="col-lg-5 col-md-12 mt-3">
          <div className="retseption-box">
            <div className="operator-image">
              <img src={operatorImg} className="w-100" alt="OperatorImage" />
            </div>
            <div className="contact-us">
              <h3>Contact Us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti labore magnam perspiciatis temporibus aliquid ducimus
                at optio expedita totam rerum!
              </p>
            </div>
            <div>
              <h3>Biz Bilan Bog`lanish</h3>
              <ul className="m-0 p-0">
                <li>
                  <a href="tel:+998901234567">
                    <i className="bi bi-phone"></i> Telefon: +998 91 123 45 67
                  </a>
                </li>
                <li>
                  <a href="mailto:example@gmail.com">
                    <i className="bi bi-envelope"></i> Gmail: example@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://goo.gl/maps/Nv1biWyfVKdQWaAr5">
                    <i className="bi bi-geo-alt"></i> Manzil: Pochta Binosi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 mt-3">
          <div className="form-box">
            <h3>Yozilmoqchi bo`lgan kursni belgilang</h3>
            <form onSubmit={(e) => postUser(e)}>
              <div className="row ">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <input
                    className="w-100"
                    required
                    type="text"
                    name="name"
                    placeholder="Ismingizni kiriting"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id=""
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <input
                    className="w-100"
                    required
                    type="text"
                    name="tel"
                    placeholder="Telefon raqamingizni kiriting"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    id=""
                  />
                </div>
              </div>
              <div className="selection-course">
                <div className="seletced-course" onClick={() => setOpen(!open)}>
                  <p className="m-0">{courses[couseIndex].name}</p>
                  <i className="bi bi-chevron-down"></i>
                </div>
                {open ? (
                  <div className="select-course">
                    <ul className="p-0 m-0">
                      {courses.map((item, idx) => (
                        <li
                          key={item.name}
                          onClick={() => {
                            setCourseIndex(idx);
                            setOpen(!open);
                            setCourse(courses[idx].name);
                          }}
                        >
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="selected-course-info">
                <div className="info-item">
                  <b>Kurs:</b>
                  <span>{courses[couseIndex].name}</span>
                </div>
                <div className="info-item">
                  <b>Mentor:</b>
                  <span>{courses[couseIndex].mentor}</span>
                </div>
                <div className="info-item">
                  <b>Texnologiyalar:</b>
                  <span>{courses[couseIndex].tech}</span>
                </div>
                <div className="info-item">
                  <b>Narx:</b>
                  <span>{courses[couseIndex].price}</span>
                </div>
                <div className="info-item">
                  <b>Davomiyligi:</b>
                  <span>{courses[couseIndex].duration}</span>
                </div>
              </div>
              <div className="text-center">
                <Button>Kursga Yozilish</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
