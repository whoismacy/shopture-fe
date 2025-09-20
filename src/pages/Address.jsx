import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addAddress } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Address() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(data) {
    dispatch(addAddress(data));
    navigate("/success-checkout");
    reset();
  }

  return (
    <div className="mx-auto my-16 max-w-xl rounded-xl bg-white p-8 shadow-2xl md:p-12">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Delivery Details
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label
            className="mb-2 text-sm font-medium text-gray-600"
            htmlFor="county"
          >
            County
          </label>
          <input
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none"
            type="text"
            name="county"
            {...register("county", { required: "Input is required" })}
          />
          {errors?.county?.message ? (
            <p className="mt-2 rounded-md bg-red-100 px-4 py-2 text-center text-sm font-semibold text-red-500">
              {errors.county.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col">
          <label
            className="mb-2 text-sm font-medium text-gray-600"
            htmlFor="building"
          >
            Building & Building Number
          </label>
          <input
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none"
            type="text"
            name="building"
            {...register("building", { required: "Input is required" })}
          />
          {errors?.building?.message ? (
            <p className="mt-2 rounded-md bg-red-100 px-4 py-2 text-center text-sm font-semibold text-red-500">
              {errors.building.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col">
          <label
            className="mb-2 text-sm font-medium text-gray-600"
            htmlFor="street"
          >
            Street
          </label>
          <input
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none"
            type="text"
            name="street"
            {...register("street", { required: "Input is required" })}
          />
          {errors?.street?.message ? (
            <p className="mt-2 rounded-md bg-red-100 px-4 py-2 text-center text-sm font-semibold text-red-500">
              {errors.street.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col">
          <label
            className="mb-2 text-sm font-medium text-gray-600"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            className={`rounded-md border px-4 py-2 text-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none`}
            type="text"
            name="phone"
            {...register("phone", {
              required: "Phone number is required",
              validate: (value) =>
                /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
                  value,
                ) || "Input a valid phone number",
            })}
          />
          {errors?.phone?.message ? (
            <p className="mt-2 rounded-md bg-red-100 px-4 py-2 text-center text-sm font-semibold text-red-500">
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col">
          <label
            className="mb-2 text-sm font-medium text-gray-600"
            htmlFor="note"
          >
            Optional Note
          </label>
          <input
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none"
            type="text"
            name="note"
            {...register("note")}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <Button type="primary" className="w-full py-3">
            Complete Purchase
          </Button>
        </div>
      </form>
    </div>
  );
}
