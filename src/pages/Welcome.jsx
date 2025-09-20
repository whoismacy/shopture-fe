import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAllow } from "../store/slices/userSlice";
import Button from "../components/ui/Button";

export default function Welcome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="mx-auto flex h-screen max-w-[1200px] flex-col items-center justify-center gap-12">
      <div>
        <h1 className="mb-8 text-center text-4xl font-bold tracking-wide text-orange-400">
          Shopture Inc.
        </h1>
        <p className="tracking-wide">
          Welcome to{" "}
          <span className="border-b-2 text-2xl text-orange-400 uppercase italic hover:border-b-4">
            shopture
          </span>{" "}
          a not so professional e-commerce mock site, which I built to practice,
          React and its related frameworks.
        </p>
      </div>
      <Button
        type="primary"
        onClick={() => {
          navigate("/home");
          dispatch(setAllow());
        }}
      >
        Proceed
      </Button>
    </div>
  );
}
