import { useTheme } from "../context/ThemeContext";

export default function ToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      title="change theme"
      className="
      flex items-center
      w-8 h-5 bg-primary 
      border border-secondary rounded-full
      p-1 mr-1 
      cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <span
        className={`inline-block size-3 
        bg-secondary
        rounded-full
        transition-transform duration-300 
        ${theme === "dark" ? "translate-x-3" : ""}`}
      />
    </button>
  );
}
