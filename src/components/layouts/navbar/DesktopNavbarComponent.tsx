
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import {  menuListData } from "./menu-list";
import { renderMenuItem } from "./RenderMenuItemComponent";

export default function DesktopNavbarComponent() {
  const {logo, menu, auth} = menuListData;
  return (
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo?.url} className="flex items-center gap-2">
              <Image
                width={500}
                height={500}
                src={logo?.src as string}
                className="max-h-8 dark:invert"
                alt={logo?.alt as string}
              />
              <span className="text-lg font-semibold tracking-tighter">
                {logo?.title}
              </span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu?.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" render={<a href={auth?.login.url} />} nativeButton={false}>{auth?.login.title}</Button>
            <Button size="sm" render={<a href={auth?.signup.url} />} nativeButton={false}>{auth?.signup.title}</Button>
          </div>
        </nav>
  
  )

  
}




