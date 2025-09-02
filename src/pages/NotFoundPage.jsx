import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{ marginBottom: "48px" }}>404 Error: Page Not Found</h1>
      <Button onClick={() => navigate("/")} type="primary">
        Go Home
      </Button>
    </div>
  );
}
