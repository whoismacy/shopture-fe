export default function FormButton({ type = "", info = "Submit" }) {
  return (
    <button type={type} className="btn btn-acc">
      {info}
    </button>
  );
}
