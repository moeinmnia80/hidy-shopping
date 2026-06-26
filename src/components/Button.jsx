function Button({ isLoading, text, clickHandler }) {
  return (
    <button
      className={`flex items-center justify-center
        w-36 h-12
        text-sm font-normal
        border border-secondary rounded-md
        cursor-pointer mt-10
        transition duration-200 delay-75
        `}
      onClick={clickHandler}
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
    </button>
  );
}

export default Button;
