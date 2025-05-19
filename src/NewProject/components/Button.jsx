

function Button({ icon, title = "Button" }) {
  return (
    <div
      className={` flex gap-2 items-center justify-center px-4 py-2 rounded-sm btn`}
    >
      <div>{title}</div>
      {icon && <i>{icon}</i>}
    </div>
  );
}

export default Button;
