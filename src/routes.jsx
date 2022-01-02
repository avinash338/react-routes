import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./Common/protectedRoute";
import Login from "./Common/login";
import Register from "./Common/register";
import Dashboard from "./Common/dashboard";
import AdminProfile from "./Admin/adminProfile";
import AdminConnections from "./Admin/adminConnections";
import UserProfile from "./User/userProfile";
import UserConnections from "./User/userConnections";
import Edit from "./Common/edit";
import Logout from "./Common/logout";

class RouteComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/register" exact component={Register} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/dashboard/edit" component={Edit} />
        <ProtectedRoute path="/dashboard/admin/profile" component={AdminProfile} />
        <ProtectedRoute path="/dashboard/admin/connections" component={AdminConnections} />
        <ProtectedRoute path="/dashboard/user/profile" component={UserProfile} />
        <ProtectedRoute path="/dashboard/user/connections" component={UserConnections} />
      </BrowserRouter>
    );
  }
}

export default RouteComponent;
