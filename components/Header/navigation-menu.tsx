"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const properties = [
  { title: "Residential", href: "/properties/residential" },
  { title: "Commercial", href: "/properties/commercial" },
  { title: "Under-Construction", href: "/properties/under-construction" },
]

export function MainNavigation({ isScrolled, isMobile = false }: { isScrolled: boolean; isMobile?: boolean }) {
  if (isMobile) {
    return (
      <div className="p-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="properties">
            <AccordionTrigger>Properties</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {properties.map((property) => (
                  <Link key={property.title} href={property.href} className="block py-2 text-sm">
                    {property.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Link href="/rewards" className="block py-2 mt-2">
          Rewards
        </Link>
        <Link href="/blogs" className="block py-2 mt-2">
          Blogs
        </Link>
        <Link href="/about" className="block py-2">
          About Us
        </Link>
        <Link href="/contact" className="block py-2">
          Contact Us
        </Link>
        <Link href="/login" className="block py-2">
          Login/Sign Up
        </Link>
      </div>
    )
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className={isScrolled ? "text-primary" : "text-black"}>Home</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <span className={isScrolled ? "text-primary" : "text-black"}>Properties</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/properties"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">Explore Properties</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Find your perfect home or investment opportunity.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {properties.map((property) => (
                <ListItem key={property.title} title={property.title} href={property.href}>
                  Browse our {property.title.toLowerCase()} properties.
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/rewards" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className={isScrolled ? "text-primary" : "text-black"}>Rewards</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blogs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className={isScrolled ? "text-primary" : "text-black"}>Blogs</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className={isScrolled ? "text-primary" : "text-black"}>About Us</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className={isScrolled ? "text-primary" : "text-black"}>Contact Us</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/login" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className={isScrolled ? "text-primary" : "text-black"}>Login/Sign Up</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

