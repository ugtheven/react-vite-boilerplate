import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import { Sun, Moon, ExternalLink, Code2 } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { Button } from "../ui/button";

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="w-full flex items-center justify-between py-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink>
                <div className="flex items-center justify-center mb-1">
                  <div className="p-1 rounded-md mr-2 bg-black dark:bg-white">
                    <Code2 className="h-[1.2rem] w-[1.2rem] text-white dark:text-black" />
                  </div>
                  <h1 className="text-md font-bold text-black dark:text-white">
                    React Vite Boilerplate
                  </h1>
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-2">
        <Button className="gap-2">
          <ExternalLink className="h-4 w-4" />
          Voir sur GitHub
        </Button>
        <Button onClick={handleThemeToggle}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
