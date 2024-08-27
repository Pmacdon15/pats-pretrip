import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import ResponsiveAppBar from "@/components/appBar/appBar";
import LogInLogOuButtons from "@/components/appBar/loginLogoutButtons";
import { getUser } from '@workos-inc/authkit-nextjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pat's Pre-trips",
  description: "Away to complete commercial vehicle inspections, When you don't have access to your usual method of documenting the inspection.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getUser();

  return (
    <html lang="en">
      <body className={styles.body}>
        <ResponsiveAppBar email={user?.email||""}>
          <LogInLogOuButtons />
        </ResponsiveAppBar>       
        {children}
      </body>
    </html>
  );
}
