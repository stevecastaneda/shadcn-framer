import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShadCN UI + Framer",
  description:
    "I wanted to be able to control animations using Framer Motion instead of the default tailwindcss-animate library. Here's my repo of experimentations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-lg flex justify-end mx-auto space-x-2.5 mt-2">
            <Button asChild variant="ghost" size="sm" className="w-9 px-0">
              <a href="https://github.com/stevecastaneda/shadcn-framer">
                <GithubIcon className="w-6 h-6" />
              </a>
            </Button>
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
