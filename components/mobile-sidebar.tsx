import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import * as LucideIcons from "lucide-react";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4">
        <LucideIcons.Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 bg-secondary pt-20 w-32">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
