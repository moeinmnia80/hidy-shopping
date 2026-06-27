/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

export function useUrlSync(paramName, selectorFn, actionCreator) {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const value = useSelector(selectorFn);

  useEffect(() => {
    const urlValue = searchParams.get(paramName) || "";
    if (urlValue !== value[paramName]) {
      dispatch(actionCreator(urlValue));
    }
  }, []);

  const updateValue = (newValue) => {
    const params = new URLSearchParams(searchParams);
    if (value[paramName] === newValue) {
      paramName === "category" &&
        (params.delete(paramName), setSearchParams(params));
      return;
    }
    dispatch(actionCreator(newValue));
    newValue ? params.set(paramName, newValue) : params.delete(paramName);
    setSearchParams(params);
  };

  return [value, updateValue];
}
