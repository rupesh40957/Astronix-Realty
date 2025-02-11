import { Link } from "wouter";
import { Home, Building, Users, Pen } from "lucide-react";

export function Sidebar() {
  const links = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Building, label: "Properties", href: "/properties" },
    { icon: Users, label: "Leads", href: "/leads" },
    { icon: Pen, label: "Blog Posts", href: "/blogs" },
  ];

  return (
    <div className="min-h-screen w-64 bg-sidebar border-r">
      <div className="p-4">
        <h1 className="text-xl font-bold text-sidebar-foreground">Real Estate Admin</h1>
      </div>
      <nav className="mt-8">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <a className="flex items-center px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent cursor-pointer">
              <link.icon className="w-5 h-5 mr-3" />
              {link.label}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
}