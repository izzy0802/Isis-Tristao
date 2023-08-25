/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

import PowerApss from "../images/PowerApps_scalable.svg";
import PowerAutomate from "../images/PowerAutomate_scalable.svg";
import PowerBI from "../images/PowerBI_scalable.svg";
import PowerVirtualAgents from "../images/PowerVirtualAgents_scalable.svg";
import PowerPages from "../images/PowerPages_scalable.svg";
import PowerPlataform from "../images/PowerPlatform_scalable.svg";
import Dataverse from "../images/Dataverse_scalable.svg";
import DataWarehouse from "../images/synapse-data-warehouse-icon.png";
import DataLake from "../images/onelake-icon.png";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */

/**
 * Sort description that expands on your title on the Home component.
 */
const description = (
  <>
    E se não estiver listado eu aprendo <br /> incrivelmente rápido, então <br /> não se preocupe.😉
  </>
);

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const imageUrls = [
  PowerApss,
  PowerAutomate,
  PowerBI,
  PowerVirtualAgents,
  PowerPages,
  PowerPlataform,
  Dataverse,
  DataWarehouse,
  DataLake,
];

const About = () => {
  return (
    <section id="about">
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            maxWidth: "45%", // Adicione um limite de largura para a coluna de texto
            paddingRight: "20px", // Adicione um espaçamento à direita para separar a coluna de texto da matriz
          }}
        >
          <div
            style={{
              width: "100%", // Defina a largura como 100% para o título
            }}
          >
            <h2
              style={{
                fontSize: "32px",
              }}
            >
              Habilidades & Tecnologias
            </h2>
          </div>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginTop: "20px",
              textAlign: "initial",
            }}
          >
            {description}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {[...Array(3)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                display: "flex",
                marginBottom: "20px", // Adicione margem inferior para separar as linhas
              }}
            >
              {[...Array(3)].map((_, colIndex) => (
                <div
                  key={colIndex}
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "#EAF9FA",
                    backgroundImage: `url(${imageUrls[rowIndex * 3 + colIndex]})`,
                    backgroundSize: "cover",
                    marginRight: "20px", // Adicione margem à direita para separar as colunas
                  }}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
