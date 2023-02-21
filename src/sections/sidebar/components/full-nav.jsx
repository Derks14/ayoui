import { Link, useMatch } from "react-router-dom";

export const FullNav = ({ value }) => {
  const match = useMatch(value.route);
  return (
    <div>
      <Link
        // className={({ isActive }) => {
        //   return isActive
        //     ? "cursor-pointer text-emerald-900 rounded"
        //     : undefined;
        // }}
        key={value.id}
        to={value.route}
      >
        <div
          className={`hover:bg-black cursor-pointer hover:text-antique rounded ${
            match ? "bg-black text-antique" : ""
          }`}
        >
          <div className="flex gap-2 py-1 my-2 pl-2 ">
            <div>{value.icon}</div>
            <div className="text-lg">{value.title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
