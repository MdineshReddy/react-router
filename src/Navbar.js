import react from "react";
import { Link } from "react-router-dom";

const data = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "products",
    link: "/products",
  },
  {
    name: "about us",
    link: "/about",
  },
];

function Navbar() {
  return (
    <nav>
      <header>
        <h1>
          <Link to="/">Crystal Explains</Link>{" "}
        </h1>
      </header>
      <ul>
        {data.map((item) => {
          return (
            <li>
              {" "}
              <Link to={item.link}> {item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
