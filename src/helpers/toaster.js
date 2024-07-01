import { toast } from "vue3-toastify";
// this function take the toast function and fill it with options and text
const toaster = ($toast, text) => {
  $toast(text, { position: toast.POSITION.BOTTOM_RIGHT });
};
export default toaster;
