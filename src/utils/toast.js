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
      fontSize: "14px",
      backgroundColor: "#10B981",
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
      fontSize: "14px",
      backgroundColor: "#EF4444",
      color: "#ffffff",
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
      fontSize: "14px",
      backgroundColor: "#3B82F6",
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
