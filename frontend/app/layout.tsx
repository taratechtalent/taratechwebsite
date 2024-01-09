/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import "/public/css/demo.css";
import "/public/css/bootstrap.min.css";
import "/public/css/flaticon.css";
import "/public/css/menu.css";
import "/public/css/dropdown-effects/fade-down.css";
import "/public/css/lunar.css";
import "/public/css/animate.css";
import "/public/css/pink-theme.css";
import "/public/css/responsive.css";

export const metadata: Metadata = {
  title: "Taratech talent",
  description: "Affordable Senior Talents for startups",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
