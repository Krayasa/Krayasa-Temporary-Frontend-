import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Route } from 'next';

export default function Logo({
  src,
  children,
}: {
  src: string | null;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={"/" as Route}
      aria-label="Back to homepage"
      className="flex items-center p-2"
    >
      {src && <Image src="/speedwings_logo.png" alt="SpeedWings HHuman Resource- Best Recruitment agency for blue collar jobs" width={250} height={90} />}
      <div className="ml-2">{children}</div>
    </Link>
  );
}