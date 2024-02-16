import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="relative">
      <Outlet />
    </div>
  );
}

export default AppLayout;
