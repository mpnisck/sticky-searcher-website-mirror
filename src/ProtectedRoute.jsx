import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

import { useUserId } from "./context/userIdContext";

const ProtectedRoute = ({ element }) => {
  const { userId } = useUserId();
  const accessToken = localStorage.getItem("userAccessToken");

  if (userId || accessToken) {
    return <>{element}</>;
  }

  return (
    <Navigate
      to="/login"
      replace
    />
  );
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};
