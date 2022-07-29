import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard: any = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <h1 className="text-3xl font-bold text-center py-6">Your Dashboard</h1>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side w-48">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Event Type</Link>
          </li>
          <li>
            <Link to="/dashboard/scheduling">Scheduling event</Link>
          </li>
          <li>
            <Link to="/dashboard/workflow">Workflows</Link>
          </li>
          <li>
            <Link to="/dashboard/routingForms">Routing forms</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
