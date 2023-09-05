import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";  

export const metadata = {
  title: "HiveHub",
  description:
    '"clone_threads" is a private web application project built using Next.js, a popular React framework for server-rendered applications. The project likely focuses on creating a dynamic and interactive web experience. It incorporates various dependencies, including Clerk (authentication system), Mongoose (for MongoDB database interaction), and Tailwind CSS (for styling). The application may have features related to user authentication and management, real-time data handling, and potentially involves file uploads (using "@uploadthing/react"). Additionally, it utilizes TypeScript for type checking and improved code quality. Overall, "clone_threads" seems to be a modern web application project designed for scalability and ease of development, leveraging the latest technologies in the JavaScript ecosystem.',

};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
