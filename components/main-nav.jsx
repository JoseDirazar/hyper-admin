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
      href: `/events`,
      label: "Events",
    },
  ];

  return (
    <>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className="text-sm font-medium transition-colors hover:text-primary" >
          {route.label}
        </Link>
      ))}
    </>
  );
}
