import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="h-16 border-b flex items-center justify-between px-6">
      <div></div>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Button variant="ghost">Admin</Button>
      </div>
    </header>
  );
}