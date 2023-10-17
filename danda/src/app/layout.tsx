import { AOSInit } from "./components/aos";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body>
        {/* <header>header</header> */}
        {children}
      </body>
    </html>
  );
}
