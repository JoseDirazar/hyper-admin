"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function MainNav() {
  const routes = [
    {
      href: `/users`,
      label: "Users",
    },
    {
      href: `/sales`,
      label: "Sales",
    },
    {
      href: `/comments`,
      label: "Comments",
    },
    {
      href: `/events`,
      label: "Events",
    },
  ];

  return (
    <>
    <div className="w-19"></div>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className="text-sm font-medium transition-colors hover:text-primary text-white text-[1.1rem]" >
          {route.label}
        </Link>
      ))}
    </>
  );
}
