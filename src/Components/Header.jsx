import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <div className="my-0 mr-md-auto font-weight-normal">
          <Link
            to={`/`}
            style={{ textDecoration: "none", color: "inherit",fontWeight:500 }}
          >
            ResumeBuilder.io
          </Link>
        </div>
        
       
      </div>
    </div>
  );
}

export default Header;
