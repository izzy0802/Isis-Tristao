/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
/*const projects = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    imgURL: "",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    imgURL: "",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    imgURL: "",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    imgURL: "",
  },
];
*/
const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          width: "37.5%",
          margin: "3rem auto",
          alignItems: "flex-start",
          justifyContent: "left",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            maxWidth: "45%",
            paddingRight: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <h2 style={{ fontSize: "32px" }}>Trabalhos & Projetos</h2>
          </div>
        </div>
      </div>
      <div className="container">
        {[...Array(2)].map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            {[...Array(2)].map((_, colIndex) => (
              <div key={colIndex} className="box"></div>
            ))}
          </div>
        ))}
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
          VER MAIS
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
