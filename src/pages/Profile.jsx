import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Profile({ data }) {
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!data || Object.keys(data).length < 1) {
        navigate("/login", { replace: true });
      }
    },
    [data, navigate]
  );

  return (
    <div>
      <p styles={{ fontSize: "24px", fontStyle: "italic" }}>
        Welcome Back: {data?.email || data?.id}{" "}
      </p>
    </div>
  );
}
