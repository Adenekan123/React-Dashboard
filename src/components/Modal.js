import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { modalClose } from "../features/modal/modalSlice";

//components
import SamllProfile from "./Profile/SmallProfile";
import RegularProfile from "./Profile/RegularProfile";

const ModalContent = () => {
  const { componentdetail } = useSelector((store) => store.modal);
  switch (componentdetail.name) {
    case "smallprofile":
      return (
        <RegularProfile component={SamllProfile} userid={componentdetail.id} />
      );

    default:
      break;
  }
};

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="modal-container w-full h-screen bg-slate-900 bg-opacity-50 flex justify-center items-center fixed z-10">
      <div className="modal-content bg-white shadow rounded w-3/6">
        <div className="modal-body p-4">
          <h1>Modal content</h1>
          <div className="p-3">
            <ModalContent />
          </div>
        </div>
        <div className="modal-footer p-4 border-t">
          <button
            className="btn btn bg-red-600 text-gray-100 px-4 py-2 rounded"
            onClick={() => dispatch(modalClose())}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
