import { addAddress } from "../../store/slices/userSlice";
import { validatePhone } from "../../utils/validatePhoneNumber";
import store from "../../store/store";
import { redirect } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const userInformation = Object.fromEntries(formData);

  const errors = {};
  if (!validatePhone(userInformation.phone)) {
    errors.phone = "Input a valid phone number";
  }
  if (Object.keys(errors).length > 0) return errors;

  store.dispatch(addAddress(userInformation));
  return redirect("/success-checkout");
}

// add the errors section, in branch tailwind
// add increase and decrease quantity in twcss branch
// fix deleteitem
