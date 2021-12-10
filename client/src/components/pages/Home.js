import React, { useContext, useEffect } from "react";
import Cards from "../layouts/Cards/Cards";
import CardFilter from "../layouts/Cards/CardFilter";
import CardForm from "../layouts/Cards/CardForm";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="grid-2">
      <div>
        <CardFilter />
        <Cards />
      </div>
      <div>
        <CardForm />
      </div>
    </div>
  );
};
export default Home;
