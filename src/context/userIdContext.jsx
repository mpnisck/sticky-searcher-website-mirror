import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

import { addNewUserAndDefaultGroup, getUser } from "../firebase/user";

const UserIdContext = createContext();

export function UserIdProvider({ children }) {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    let ignore = false;

    async function initUserId() {
      const email = localStorage.getItem("userEmail");

      let userId = await getUser(email);
      if (!userId) {
        userId = await addNewUserAndDefaultGroup(email);
      }

      setUserId(userId);
    }
    if (!ignore && userId === "") {
      initUserId();
    }

    return () => {
      ignore = true;
    };
  }, [userId]);

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserIdContext.Provider>
  );
}

export const useUserId = () => useContext(UserIdContext);

UserIdProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
