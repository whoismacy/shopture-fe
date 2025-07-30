import { toast, Zoom } from "react-toastify";

const defaultOptions = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition: Zoom,
};

export const showSuccessToast = (message) => {
  toast.success(message, {
    ...defaultOptions,
    theme: "dark",
    style: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "500",
      fontSize: "15px",
      backgroundColor: "#008000",
      color: "#ffffff",
    },
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    ...defaultOptions,
    theme: "dark",
    style: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "500",
      fontSize: "15px",
      backgroundColor: "#ff4545",
      color: "#fff1f1",
    },
  });
};

export const showInfoToast = (message) => {
  toast.info(message, {
    ...defaultOptions,
    theme: "light",
    style: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "400",
      fontSize: "15px",
      backgroundColor: "#4052d6",
      color: "#ffffff",
    },
  });
};

export const notify = (message, type = "info") => {
  switch (type) {
    case "success":
      showSuccessToast(message);
      break;
    case "error":
      showErrorToast(message);
      break;
    default:
      showInfoToast(message);
  }
};
