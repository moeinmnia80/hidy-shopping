export const getInitialQuery = (searchParams) => {
  const queryHistory = { search: "", category: "" };
  const searchHistory = searchParams.get("search");
  const categoryHistory = searchParams.get("category");
  if (searchHistory) queryHistory.search = searchHistory;
  if (categoryHistory) queryHistory.category = categoryHistory;
  return queryHistory;
};

export const themeValidation = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

export const filterProducts = (cache, search) => {
  return cache.filter((product) => {
    const searchWords = search.trim().toLowerCase().split(/\s+/);
    const productText = product.title.toLowerCase();
    return !search
      ? cache
      : searchWords.some((word) => productText.includes(word));
  });
};
