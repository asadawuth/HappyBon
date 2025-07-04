"use client";

import Header from "@/component/for-header/Header";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
      </div>
      {children}
    </>
  );
}
