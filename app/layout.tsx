import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <html lang="ja">
        <body>
          {children}
          <Toaster />
        </body>
      </html>
    </React.Fragment>
  );
}
