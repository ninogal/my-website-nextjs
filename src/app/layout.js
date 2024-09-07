import "./globals.css";

export const metadata = {
  title: "Antonino Galati - Software Developer",
  description: "Software developer based in Catania (IT)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-secondary antialiased"
      >
        {children}
      </body>
    </html>
  );
}
