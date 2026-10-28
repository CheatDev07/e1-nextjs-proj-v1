
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";


import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { menuListData, NavbarComponentProps } from "./menu-list";
import { renderMobileMenuItem } from "./RenderMenuItemComponent";



export default function MobileNavbarComponent( ) {
  const {logo,menu,auth}:NavbarComponentProps = menuListData;
  return (
     <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo?.url} className="flex items-center gap-2">
              <Image
                width={500}
                height={500}
                src={logo?.src as string}
                className="max-h-8 dark:invert"
                alt={logo?.alt as string}
              />
            </a>
            <Sheet>
              <SheetTrigger render={<Button variant="outline" size="icon" />}><Menu className="size-4" /></SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo?.url} className="flex items-center gap-2">
                      <Image 
                        width={500}
                        height={500}
                        src={logo?.src as string}
                        className="max-h-8 dark:invert"
                        alt={logo?.alt as string}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion className="flex w-full flex-col gap-4">
                    {menu?.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button variant="outline" render={<a href={auth?.login.url} />} nativeButton={false}>{auth?.login.title}</Button>
                    <Button render={<a href={auth?.signup.url} />} nativeButton={false}>{auth?.signup.title}</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
  )
}
