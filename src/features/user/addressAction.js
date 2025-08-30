import { addAddress } from "../../store/slices/userSlice";
import { validatePhone } from "../../utils/validatePhoneNumber";
import store from "../../store/store";

export async function action({ request }) {
  const formData = await request.formData();
  const userInformation = Object.fromEntries(formData);
  store.dispatch(addAddress(userInformation));

  const errors = {};
  if (validatePhone(userInformation.phone)) {
    errors.phone = "Input a valid phone number";
  }
  if (Object.keys(errors).length > 0) return errors;
}
