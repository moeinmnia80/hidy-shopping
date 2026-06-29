function SearchSVG({ className, ...rest }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="6.6001" cy="6.6001" r="6" strokeWidth="1.2" />
      <path
        d="M11 11L15.2426 15.2426"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SearchSVG;
