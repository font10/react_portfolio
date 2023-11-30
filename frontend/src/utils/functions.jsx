import { toast } from "react-toastify";

export const getToast = (action, message) => {
  return toast[action](message, {
    position: 'top-center',
    autoClose: 2000,
    closeOnClick: true,
    theme: "light",
  });
}