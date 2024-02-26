export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-16 w-16 bg-indigo-300 rounded-md"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="flex h-16 w-16 bg-indigo-500 justify-center items-center rounded-md ">
          <Content
            style={{
              display: "inline-block",
              width: "75%",
              height: "75%",
              verticalAlign: "top",
            }}
            className="text-white flex justify-center items-center"
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="flex h-16 w-16 text-indigo-300 rounded-md justify-center items-center">
          <Content
            style={{
              display: "inline-block",
              width: "75%",
              height: "75%",
              verticalAlign: "top",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return <div onClick={flip} className={className}></div>;
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
