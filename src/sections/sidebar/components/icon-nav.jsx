import { Link, useMatch } from "react-router-dom";
import * as Tooltip from "@radix-ui/react-tooltip";

export const IconNav = ({ value }) => {
  const match = useMatch(value.route);
  return (
    <div>
      <Link to={value.route}>
        <div
          className={`hover:bg-black cursor-pointer hover:text-antique rounded ${
            match ? "bg-black text-antique" : ""
          }`}
        >
          <div className="py-1 my-2 px-2">
            <Tooltip.Root>
              <Tooltip.Trigger>{value.icon}</Tooltip.Trigger>
              <Tooltip.Content
                sideOffset={10}
                className="bg-black px-2 pt-1 rounded"
                align="end"
                side="right"
              >
                {value.title}
                <Tooltip.Arrow className="ml-2" />
              </Tooltip.Content>
            </Tooltip.Root>
          </div>
        </div>
      </Link>
    </div>
  );
};
