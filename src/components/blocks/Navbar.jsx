"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { AvatarDemo } from "./Icon"

const components = [
  {
    title: "Pomodoros",
    href: "#templates",
    description:
      "Tecnica de pomodoro visando maior contentração.",
  },
  {
    title: "Mais foco, menos ansiedade",
    href: "#templates",
    description:
      "Inspirado no pctheone!.",
  },

]

export function NavigationMenuDemo() {
  const pathname = usePathname()
  return (
    <NavigationMenu viewport={false} className="z-10">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenu className={"font-bold"}>
            <Link href="/">ZENITH</Link>
          </NavigationMenu>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {pathname === "/" ? (
            <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
          ) : pathname === "/planos" ? (
            <NavigationMenuTrigger>Planos</NavigationMenuTrigger>
          ) : null}
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] scroll-smooth">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            {pathname === "/" ? (
              <Link href="/planos">Planos</Link>
            ) : pathname === "/planos" ? (
              <Link href="/">Templates</Link>
            ) : null}
          </NavigationMenuLink>


        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>

    </li>
  )
}


