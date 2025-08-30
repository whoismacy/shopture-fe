import { useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div>
      <h2>Something went wrong !</h2>
      <p>
        {error?.statusText || error?.message || "An unexpected error occurred."}
      </p>
    </div>
  );
}
