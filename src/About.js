import React from "react";

function About() {
  document.title = "About";
  return (
    <main>
      <h2>About the Page</h2>
      <div className="profile-img-container">
        <img className="profile_img" src="./images/crysis.jpg" alt="crysis" />
      </div>

      <p style={{ textAlign: "center" }}>
        This site is intended as a way to demonstrate the working of React
        Router. Observe the change in the URL.
      </p>
    </main>
  );
}

export default About;
