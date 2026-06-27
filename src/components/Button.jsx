function Button({ isLoading = false, text = "button", className, ...props }) {
  return (
    <button
      className={`
      items-center
      text-sm font-normal
      cursor-pointer 
      ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <span
          className="inline-block size-5 
            border-4 rounded-full
            border-b-secondary
            border-t-muted
            border-l-muted
            border-r-muted
            loader-spinner
            "
        ></span>
      ) : (
        text
      )}
      {props.children}
    </button>
  );
}

export default Button;
