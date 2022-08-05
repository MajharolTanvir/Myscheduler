import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Shared/LoadingSpinner/Loading";

const AvailabilityDelete = ({ day }) => {
  return (
    <div>
      {/* <!-- The button to open modal --> */}
      {/* <label htmlFor="deleteModal" className="btn modal-button">
        open modal
      </label> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="deleteModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="deleteModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="deleteModal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityDelete;
