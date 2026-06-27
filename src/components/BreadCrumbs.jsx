/* eslint-disable no-unused-vars */
import { useLocation, Link, useNavigate } from "react-router";
import ChevronRIght from "../assets/ChevronRIght";

function BreadCrumbs({ path, title }) {
  let navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-2 mt-10 
      text-sm uppercase "
    >
      <button className="cursor-pointer" onClick={() => navigate(-1)}>
        {path}
      </button>
      <ChevronRIght className="size-4 stroke-secondary" />
      <span className="font-light select-none">{title}</span>
    </div>
  );
}

export default BreadCrumbs;
