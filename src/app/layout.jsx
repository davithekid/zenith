import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/themes/theme-provider"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "zenith",
  description: "atividade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
     <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
