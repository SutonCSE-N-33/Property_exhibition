/* import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

export const PrivateOutlet = () => {
    const token = localStorage.getItem('token');
    const location = useLocation(); // Define location here
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    if (token) {
        return (
            <>
            <Outlet />
                {navigate(from, { replace: true })}
            </>
        );
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};
 */

import { Navigate, Outlet, useLocation } from "react-router-dom";

export const PrivateOutlet = () => {
  const token = localStorage.getItem("token");
  let location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
