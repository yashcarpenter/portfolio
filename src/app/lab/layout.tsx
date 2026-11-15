import type { Metadata } from "next";
import LabNav from "./_components/LabNav";
import "./lab.css";

export const metadata: Metadata = {
  title: "Motion Lab · Yash Carpenter",
  description: "Sample pages previewing proposed motion designs.",
  robots: { index: false, follow: false },
};

/** Sandbox for previewing motion ideas. Not linked from the main site. */
export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <LabNav />
    </>
  );
}
