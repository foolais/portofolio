import { Home, GitBranch, CodeXml, Contact } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";

const icons = [
  {
    icon: Home,
    name: "Home",
  },
  {
    icon: GitBranch,
    name: "Carrer",
  },
  {
    icon: CodeXml,
    name: "Projects",
  },
  {
    icon: Contact,
    name: "Contact",
  },
];

const Navbar = () => {
  return (
    <div className="fixed bottom-6 w-full">
      <div className="w-max mx-auto">
        <div className="w-full h-5 bg-primary/50 rounded-t-2xl" />
        <div className="bg-primary gap-3 sm:gap-6 flex items-center justify-center rounded-b-2xl px-6 pt-2 pb-1">
          {icons.map(({ icon: Icon, name }, index) => (
            <React.Fragment key={index}>
              <Button id={name} variant="ghost" size={"iconText"}>
                <div className="flex flex-col items-center justify-center gap-1 icon-wrapper">
                  <Icon className="icon-size" />
                  <p className="text-xs sm:text-sm">{name}</p>
                </div>
              </Button>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
