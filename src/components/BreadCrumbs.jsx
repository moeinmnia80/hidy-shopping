/* eslint-disable no-unused-vars */
import { useLocation, Link, useNavigate } from "react-router";
import ChevronRIght from "../assets/ChevronRIght";

function BreadCrumbs({ path, title }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center gap-2 mt-10 
      text-sm uppercase "
    >
      <Link to={() => navigate(-1)}>{path}</Link>
      <ChevronRIght className="size-4 stroke-secondary" />
      <span className="font-light select-none">{title}</span>
    </div>
  );
}

export default BreadCrumbs;
