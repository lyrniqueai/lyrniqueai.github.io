import type { ReactNode } from "react";
import AcademyNav from "./AcademyNav";
import AcademyFooter from "./AcademyFooter";

interface AcademyLayoutProps {
  children: ReactNode;
}

export default function AcademyLayout({ children }: AcademyLayoutProps) {
  return (
    <div data-wing="academy" style={{ minHeight: "100vh" }}>
      <AcademyNav />
      <main>{children}</main>
      <AcademyFooter />
    </div>
  );
}
