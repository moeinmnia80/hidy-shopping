function Error({ message = "Somethings went wrong ... sorry", ...props }) {
  return (
    <div
      className="fixed inset-0 w-full h-dvh 
      flex flex-col items-center justify-center 
     bg-primary 
      z-9"
    >
      <span className="text-[175px] text-muted font-bold">503</span>
      {message}
      {props.children}
    </div>
  );
}

export default Error;
