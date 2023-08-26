/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
//import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import perfil from "../images/Perfil.jpeg";
import draw from "../images/Drawing.png";
/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

const Home = ({ title }) => {
  return (
    <section id="home" className="min-height">
      <div className="home-image">
        <img
          src={perfil}
          alt="Foto de perfil"
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex-box">
        <h2
          style={{
            fontSize: "26px",
          }}
        >
          Olá, eu me chamo Isis 👋
        </h2>
      </div>
      <div className="flex-box container-box">
        <img
          src={draw}
          alt="marcador"
          style={{
            height: "28px",
            width: "300px",
            display: "flex",
            position: "absolute",
            top: "365px",
            marginLeft: "-320px",
          }}
        />
        <h2
          style={{
            position: "relative",
          }}
        >
          {title}
        </h2>
        <div
          style={{
            height: "170px",
            width: "70px",
            position: "absolute",
            marginLeft: "1100px",
            marginTop: "65px",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              width: "51px",
              height: "51px",
              borderRadius: "100%",
              marginBottom: "15px",
            }}
            href={`https://github.com/izzy0802`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gitHubIcon}
              alt="GitHub"
              className="socialIcon"
              style={{
                height: "50px",
                width: "51px",
              }}
            />
          </div>
          <div
            style={{
              backgroundColor: "black",
              width: "51px",
              height: "52px",
              borderRadius: "30%",
              marginBottom: "15px",
            }}
            href={`https://instagram.com/isis_santos123_`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              alt="Intragram"
              className="socialIcon"
              style={{
                height: "50px",
                width: "51px",
                marginTop: "1px",
              }}
            />
          </div>
          <div
            style={{
              backgroundColor: "black",
              width: "51px",
              height: "52px",
              borderRadius: "5px",
            }}
            href={`https://linked.com/in/isis-tristao-54a862213/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedInIcon}
              alt="LinkedIn"
              className="socialIcon"
              style={{
                height: "50px",
                width: "51px",
                marginTop: "1px",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          Desenvolvedora Dynamics 365 apaixonada por
          <br />
          tecnologia e entusiasta em Big Data. Especializada
          <br />
          em data warehouse e data lake.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <button
          style={{
            width: "287px",
            height: "62px",
            borderRadius: "40px",
            backgroundColor: "black",
            color: "white",
            fontSize: "19px",
            fontWeight: "500",
          }}
        >
          FALE COMIGO!
        </button>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}></div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
