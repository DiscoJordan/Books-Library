import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { clearError, selectErrorMessage } from "../Redux/slices/errorSlice";

function Error() {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.warn(errorMessage);
      dispatch(clearError());
    }
  }, [errorMessage, dispatch]);

  return <ToastContainer position="top-right" autoClose={3000} />;
}

export default Error;
