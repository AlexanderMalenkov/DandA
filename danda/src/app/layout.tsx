import { AOSInit } from "./components/aos";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <AOSInit />
      <body
        style={{
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
