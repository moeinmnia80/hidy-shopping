function Error({ message = "Somethings went wrong ... sorry", ...props }) {
  return (
    <div className="w-full h-[75dvh] grid place-items-center">
      {message}
      {props.children}
    </div>
  );
}

export default Error;
