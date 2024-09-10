import { useEffect } from "react";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, toast, ToastContainer } from "react-toastify";

const ReactToast = () => {
  // Get the status and message from user slice
  const { status: userStatus, message: userMessage } = useSelector(
    (state) => state.user
  );

  // Get the status from contact slice
  const { status: contactStatus, message: contactMessage } = useSelector(
    (state) => state.contact
  );

  const successToast = (msg) => {
    toast.success(`${msg}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const errorToast = (msg) => {
    toast.error(`${msg}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  useEffect(() => {
    // Check user slice status
    if (userStatus === "success") {
      successToast(userMessage);
    } else if (userStatus === "error") {
      errorToast(userMessage);
    }

    // Check contact slice status
    if (contactStatus === "success") {
      successToast(contactMessage);
    } else if (contactStatus === "error") {
      errorToast(contactMessage);
    }
  }, [userStatus, contactStatus]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default ReactToast;
