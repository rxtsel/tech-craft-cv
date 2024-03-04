import {
  Button,
  Icons,
  Input,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components";
import Link from "next/link";

export const SidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button
          variant="secondary"
          className="m-0 aspect-square appearance-none p-0 leading-none"
        >
          <Icons.menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col md:hidden">
        <SheetHeader className="text-left">
          <SheetTitle>Sidebar</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex w-full flex-grow flex-col gap-2 overflow-y-auto py-4">
          {[1, 2, 3, 4, 5].map(i => (
            <Link
              key={i}
              href="#"
              className="flex items-center gap-2 rounded-md px-4 py-4 transition-colors duration-150 hover:bg-secondary active:bg-secondary aria-pressed:bg-secondary"
            >
              <Icons.gh className="size-4" />
              Quick add
            </Link>
          ))}
        </nav>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Logout</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
