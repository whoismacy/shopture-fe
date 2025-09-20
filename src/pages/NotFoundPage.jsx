import { useNavigate } from "react-router-dom";
import { FcCancel } from "react-icons/fc";
import Button from "../components/ui/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-8 rounded-md p-12 shadow-lg">
      <FcCancel className="text-4xl" />
      <div>
        <h1 className="text-center text-2xl font-semibold text-stone-900 uppercase">
          404 Error: Page Not Found
        </h1>
        <p className="text-base text-stone-700 italic">
          OOPS, the page you are looking for could not be found{" "}
        </p>
      </div>
      <Button onClick={() => navigate("/")} type="primary">
        Go Home
      </Button>
    </div>
  );
}
