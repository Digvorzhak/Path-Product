import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <main>
        <h3>404 404 404 404</h3>
        <p>YOU’VE TRIED TO SEARCH FOR A PAGE THAT DOESN’T EXIST MATE.</p>
        <p>NOT SURE WHAT A 404 ERROR ACTUALLY IS BUT YOU’VE GOT YOURSELF ONE.</p>
        <p>SORRY FOR THAT.</p>
        <p>
          GET BACK TO THE SHOP BY CLICKING <Link to="/">HERE</Link> AND BUY YOURSELF OUT OF TROUBLE!
        </p>
      </main>
    </div>
  );
};

export default ErrorPage;
