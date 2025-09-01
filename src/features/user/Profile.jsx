import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/context/useAuthContext";
import { showSuccessToast } from "../../utils/toast";
import instance from "../../provider/axiosConfig";

export default function Profile() {
  const navigate = useNavigate();
  const { email, id, dropCredentials } = useAuth();

  async function logOut() {
    //eslint-disable-next-line
    const response = await instance.post("/logout");
    dropCredentials();
    navigate("/", { replace: true });
    showSuccessToast("Successfully logged out.");
  }

  return (
    <div className="mx-60 my-auto flex flex-col items-center justify-center gap-8 bg-white p-12">
      <h1>Welcome Back {email?.split("@")[0]} 🥳 🥳 🥳</h1>
      <p className="text-2xl font-semibold">
        Email: <span className="text-sm font-light italic">{email}</span>{" "}
      </p>
      <p className="text-2xl font-semibold">
        id: <span className="text-sm font-light italic">{id}</span>
      </p>
      <button className="btn" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
}
