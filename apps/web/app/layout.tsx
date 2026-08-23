import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "InventAI – Autonomous Engineering Platform",
  description: "From idea to Patent, 3D CAD and Physics Simulation in minutes. Powered by 7 AI agents.",
  keywords: "AI engineering, CAD generation, patent analysis, physics simulation, invention tool",
};

import Providers from "../providers/query-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Instrument+Serif:ital@0;1&display=swap');
            
            html, body, div, span, applet, object, iframe,
            h1, h2, h3, h4, h5, h6, p, blockquote, pre,
            a, abbr, acronym, address, big, cite, code,
            del, dfn, em, img, ins, kbd, q, s, samp,
            small, strike, strong, sub, sup, tt, var,
            b, u, i, center,
            dl, dt, dd, ol, ul, li,
            fieldset, form, label, legend,
            table, caption, tbody, tfd, th, thead, tr, td,
            article, aside, canvas, details, embed,
            figure, figcaption, footer, header, hgroup,
            menu, nav, output, ruby, section, summary,
            time, mark, audio, video, button, input, textarea, select {
              font-family: "Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
              font-optical-sizing: auto;
              font-weight: 500;
              font-style: normal;
              font-variation-settings: "GRAD" 0;
            }

            * {
              font-family: "Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
            }

            /* Google Sans CSS Classes */
            .google-sans-400 {
              font-family: "Google Sans", sans-serif;
              font-optical-sizing: auto;
              font-weight: 400;
              font-style: normal;
              font-variation-settings: "GRAD" 0;
            }

            .google-sans-500 {
              font-family: "Google Sans", sans-serif;
              font-optical-sizing: auto;
              font-weight: 500;
              font-style: normal;
              font-variation-settings: "GRAD" 0;
            }

            .google-sans-600 {
              font-family: "Google Sans", sans-serif;
              font-optical-sizing: auto;
              font-weight: 600;
              font-style: normal;
              font-variation-settings: "GRAD" 0;
            }

            .google-sans-700 {
              font-family: "Google Sans", sans-serif;
              font-optical-sizing: auto;
              font-weight: 700;
              font-style: normal;
              font-variation-settings: "GRAD" 0;
            }

            /* Instrument Serif CSS Classes */
            .instrument-serif {
              font-family: "Instrument Serif", serif !important;
              font-optical-sizing: auto;
              font-style: italic !important;
              font-variation-settings: "GRAD" 0;
            }

            .instrument-serif-regular {
              font-family: "Instrument Serif", serif !important;
              font-weight: 400;
              font-style: normal;
            }

            .instrument-serif-regular-italic {
              font-family: "Instrument Serif", serif !important;
              font-weight: 400;
              font-style: italic !important;
            }
          `}
        </style>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: '"Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', background: '#000000' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
