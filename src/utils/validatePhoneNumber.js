export function validatePhone(phoneNumber) {
  const regex =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  return regex.test(phoneNumber);
}
