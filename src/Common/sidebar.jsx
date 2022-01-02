import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { getRoutesByRole } from "../Utils/utils";

const Sidebar = (props) => {
  const [activeLink, setActiveLink] = useState("");
  const [routesData, setRoutesData] = useState([]);

  useEffect(() => {
    setRoutesData(getRoutesByRole(props.role));
    setActiveLink(routesData[0]?.name);
  }, [props.role, routesData]);

  return (
    <div>
      <div className="sidenav">
        {routesData.length
          ? routesData.map((item) => {
              return (
                <Link
                  key={item.name}
                  className={item.name === activeLink ? "active" : ""}
                  to={item.basePath + item.path}
                  onClick={() => setActiveLink(item.name)}
                >
                  {item.name}
                </Link>
              );
            })
          : null}
      </div>
      <Switch>
        {routesData.length > 0 && routesData.map((item, key) => <Route key={key} path={item.basePath + item.path} />)}
      </Switch>
    </div>
  );
};

export default Sidebar;
