import React, { useState } from "react";
import { Link } from "react-router-dom";

const routesData = [
  {
    path: "/logout",
    name: "Logout",
  },
  {
    path: "/dashboard/edit",
    name: "Edit",
  },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  return (
    <div className="topnav">
      {routesData.length &&
        routesData.map((item) => {
          return (
            <Link
              key={item.name}
              className={item.name === activeLink ? "active" : ""}
              to={item.path}
              onClick={() => setActiveLink(item.name)}
            >
              {item.name}
            </Link>
          );
        })}
    </div>
  );
};

export default Header;
