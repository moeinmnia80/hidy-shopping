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
    if (urlValue !== value) {
      dispatch(actionCreator(urlValue));
    }
  }, []);

  const updateValue = (newValue) => {
    if (value[paramName] === newValue) return;

    dispatch(actionCreator(newValue));

    const params = new URLSearchParams(searchParams);

    newValue ? params.set(paramName, newValue) : params.delete(paramName);
    setSearchParams(params);
  };

  return [value, updateValue];
}
