// import "./globals.css";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

// import "bootstrap/dist/css/bootstrap.css";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Lines from "../components/Lines";
// import { Providers } from "./providers";
// import { ThemeProvider } from '@mui/material/styles';
// import theme from './theme';
// export const metadata = {
//   title: "Editor js",
//   description: "React KazNIISA Editor js",
// };

// import AppThemeProvider from '../components/Themeprovider';
// import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//        <AppRouterCacheProvider>
//           <AppThemeProvider>

//         <Providers>
//           <Lines />
//           <Header />
//           <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>{children}</main>
//           <Footer />
//         </Providers>
//        </AppThemeProvider>

//        </AppRouterCacheProvider>
//       </body>
//     </html>
//   );
// }

"use client";

import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Lines from "../components/Lines";
import { Providers } from "./providers";
import AppThemeProvider from "../components/ThemeProvider"; // ← Правильно

import { ThemeProvider } from "next-themes";

import Map from "../components/map";

// export const metadata = {
//   title: 'Editor JS',
//   description: 'React KazNIISA Editor JS',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {/* <AppThemeProvider
    attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange> */}
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Providers>
            {/* <Lines /> */}
            <Header />
            <main
              style={{
                minHeight: "100vh",
              }}
            >
              {children}
            </main>

            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
