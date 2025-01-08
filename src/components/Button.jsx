const Pad = ({ color, on, toggle, id }) => {
  return (
    <button
      className={on ? "on" : "button"}
      style={{
        backgroundColor: color,
        height: "100px",
        width: "100px",
        borderRadius: "5px",
        border: "3px solid white",
        cursor: "pointer",
      }}
      onClick={() => toggle(id)}
    ></button>
  );
};

export default Pad;
