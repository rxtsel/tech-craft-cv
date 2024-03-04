import { cn } from "@/lib/utils";

interface Props {
  className: string;
}

export const SidebarDesktop: React.FC<Props> = ({ className }) => {
  return (
    <aside
      className={cn(
        "fixed bottom-0 left-0 hidden border-r-2 border-muted md:block",
        className
      )}
    >
      SidebarDesktop
    </aside>
  );
};
