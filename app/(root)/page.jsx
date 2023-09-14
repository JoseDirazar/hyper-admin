"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-40  bg-pinkChip ">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ y: "-50%", x: "0%", opacity: 0 }}
        animate={{ y: 0, x: "0%", opacity: 1 }}
        transition={{duration: 1}}
      >
        Hyper Admin
      </motion.h1>
      <motion.div
        className="flex flex-col items-center space-y-4"
        initial={{ y: "50%", x: "0%", opacity: 0 }}
        animate={{ y: 0, x: "0%", opacity: 1 }}
        transition={{duration: 1}}
      >
        <Link
          href="/users"
          className="text-purpleNav border-spacing-2 text-bold hover:underline"
        >
          Users
        </Link>
        <Link
          href="/sales"
          className="text-purpleNav border-spacing-2 text-bold hover:underline"
        >
          Sales
        </Link>
        <Link
          href="/events"
          className="text-purpleNav border-spacing-2 text-bold hover:underline"
        >
          Events
        </Link>
        <Link
          href="/comments"
          className="text-purpleNav border-spacing-2 text-bold hover:underline"
        >
          Comments
        </Link>
      </motion.div>
    </main>
  );
}
