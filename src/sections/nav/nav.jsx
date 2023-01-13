import { UserCorner } from "@/sections/nav/components/user-section.jsx";

export const Nav = () => {
  return (
    <nav>
      <div className="">
        <div className="w-full flex justify-between items-center">
          <div>
            <div>Home</div>
          </div>
          <div>
            <div className="flex gap-5 ">
              <div className="">notifications</div>
              <div className="">
                <UserCorner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
