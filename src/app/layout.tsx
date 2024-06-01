import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import ResponsiveAppBar from "@/app/appBar/appBar";
import LogInLogOuButtons from "@/app/appBar/loginLogoutButtons";
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
        <ResponsiveAppBar email="test">
          <LogInLogOuButtons />
        </ResponsiveAppBar>
        <div>
          {user?.firstName}<br/>
          {user?.lastName}<br/>
          {user?.email}<br/>
        </div>
        {children}
      </body>
    </html>
  );
}
