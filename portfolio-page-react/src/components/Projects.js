import styles from "../scss/Projects.module.scss";
import Button from "./UI/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ProjectButton from "./UI/ProjectButton";
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <>
      <div className={styles.projects}>
        <div className={styles.header}>
          <p className={styles.title}>Projects</p>
          <Button name="Contact Me" />
        </div>
        <Swiper
          style={{
            "--swiper-pagination-color": "#4EE1A0",
            "--swiper-pagination-bullet-inactive-color": "#4EE1A0",
          }}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={1}
          spaceBetween={25}
          grabCursor={true}
          fadeEffect={true}
          pagination={{
            type: "bullets",
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 2,
          }}
          modules={[Pagination]}
          className={styles.mySwiper}
        >
          {" "}
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.imagecontent}>
                <img
                  src={require(`../assets/gallery/projects/invoiceapp-preview.jpg`)}
                  alt="photo1"
                  className={styles.img}
                />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.description}>
                  Fully responsive MEVN stack application. The backend is based
                  on JWT Tokens. Once registered and logged in, you can add
                  invoices, edit, delete, change status and filter invoices.
                  Application developed in Nuxt2 using Vuetify.js.
                </p>
                <div className={styles.buttons}>
                  <ProjectButton
                    live={
                      "https://main--dazzling-bienenstitch-1eab4c.netlify.app/"
                    }
                    text={"live"}
                  />
                  <ProjectButton
                    code={"https://github.com/dominiak92/invoice-app"}
                    text={"code"}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.imagecontent}>
                <img
                  src={require(`../assets/gallery/projects/entertainment-preview.jpg`)}
                  alt="photo1"
                  className={styles.img}
                />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.description}>
                  App built in React, data fetched from REST API which I created
                  in json-server and hosted on heroku. You can bookmark
                  elements, and search directly in subpages. The site is
                  available in mobile, tablet and desktop versions
                </p>
                <div className={styles.buttons}>
                  <ProjectButton
                    live={"https://dominiak92.github.io/entertainment-web-app/"}
                    text={"live"}
                  />
                  <ProjectButton
                    code={
                      "https://github.com/dominiak92/entertainment-web-app"
                    }
                    text={"code"}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.imagecontent}>
                <img
                  src={require(`../assets/gallery/projects/devjobs-preview.jpg`)}
                  alt="photo1"
                  className={styles.img}
                />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.description}>
                  Application created in React using Redux Toolkit, dark and
                  light theme saved in local storage. Data fetched from API
                  which I put on json-server, hosted on heroku. Site available
                  in mobile, tablet and desktop versions with different filter
                  components.
                </p>
                <div className={styles.buttons}>
                  <ProjectButton
                    live={"https://dominiak92.github.io/devjobs-app/"}
                    text={"live"}
                  />
                  <ProjectButton
                    code={"https://github.com/dominiak92/devjobs-app"}
                    text={"code"}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.imagecontent}>
                <img
                  src={require(`../assets/gallery/projects/countries-preview.jpg`)}
                  alt="photo1"
                  className={styles.img}
                />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.description}>
                  Application built using React with Vite.js, I also used
                  Typescript, React Router and Redux Toolkit for state
                  managment. Data fetched from REST COUNTRIES API. Style data
                  stored in local storage.
                </p>
                <div className={styles.buttons}>
                  <ProjectButton
                    live={"https://dominiak92.github.io/countries-app/"}
                    text={"live"}
                  />
                  <ProjectButton
                    code={"https://github.com/dominiak92/countries-app"}
                    text={"code"}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.imagecontent}>
                <img
                  src={require(`../assets/gallery/projects/space-page-preview.jpg`)}
                  alt="photo1"
                  className={styles.img}
                />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.description}>
                  Single page application (SPA) written in React with React
                  Router, React Spring, different menu versions for different
                  resolutions. The site is available in mobile, tablet and
                  desktop versions
                </p>
                <div className={styles.buttons}>
                  <ProjectButton
                    live={
                      "https://dominiak92.github.io/space-tourism-multi-page-website-react"
                    }
                    text={"live"}
                  />
                  <ProjectButton
                    code={
                      "https://github.com/dominiak92/space-tourism-multi-page-website-react"
                    }
                    text={"code"}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.imagecontent}>
                <img
                  src={require(`../assets/gallery/projects/dictionary-preview.jpg`)}
                  alt="photo1"
                  className={styles.img}
                />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.description}>
                  Dictionary Web APP is an English dictionary created with
                  Vanilla JS, data is fetched from the Free Dictionary API.
                  Ability to change fonts and enable night style. The site is
                  responsive for mobile, tablet and desktop devices
                </p>
                <div className={styles.buttons}>
                  <ProjectButton
                    live={"https://dominiak92.github.io/dictionary-web-app/"}
                    text={"live"}
                  />
                  <ProjectButton
                    code={"https://github.com/dominiak92/dictionary-web-app"}
                    text={"code"}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.imagecontent}>
                <img
                  src={require(`../assets/gallery/projects/calculator-preview.jpg`)}
                  alt="photo1"
                  className={styles.img}
                />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.description}>
                  A calculator APP created in JavaScript, SCSS and using BEM,
                  there is an option to change the style to three different
                  ones. The site is responsive for mobile and desktop devices
                </p>
                <div className={styles.buttons}>
                  <ProjectButton
                    live={"https://dominiak92.github.io/calculator-app-main/"}
                    text={"live"}
                  />
                  <ProjectButton
                    code={"https://github.com/dominiak92/calculator-app-main"}
                    text={"code"}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.imagecontent}>
                <img
                  src={require(`../assets/gallery/projects/password-preview.jpg`)}
                  alt="photo1"
                  className={styles.img}
                />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.description}>
                  Password generator APP, create your unique password. You can
                  use lowercase and uppercase letters, numbers and symbols,
                  there is also a password strength indicator and copy ability.
                  The site is responsive for mobile and desktop devices.
                </p>
                <div className={styles.buttons}>
                  <ProjectButton
                    live={
                      "https://dominiak92.github.io/password-generator-app/"
                    }
                    text={"live"}
                  />
                  <ProjectButton
                    code={
                      "https://github.com/dominiak92/password-generator-app"
                    }
                    text={"code"}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.line} />
    </>
  );
};

export default Projects;
