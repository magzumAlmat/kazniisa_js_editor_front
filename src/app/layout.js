
// "use client";

// import "./globals.css";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// import Header from "../components/Header";
// import Breadcrumbs from "../components/Breadcrumbs";
// import Footer from "../components/Footer";
// import Lines from "../components/Lines";
// import { Providers } from "./providers";
// import AppThemeProvider from "../components/ThemeProvider"; // ← Правильно

// import { ThemeProvider } from "next-themes";

// import Map from "../components/map";



// export default function RootLayout({ children }) {
//   return (
//     <html lang="ru">
//       <body>
     
//         <ThemeProvider
//           enableSystem={false}
//           attribute="class"
//           defaultTheme="light"
//         >
//           <Providers>
//             {/* <Lines /> */}
//             <Header />
//             <div style={{ padding: '9rem' }}>
//             <Breadcrumbs />
//             </div>
//             <main
//               style={{
//                 minHeight: "100vh",
//               }}

//             >
            
           

//               {children}
//             </main>

//             <Footer />
//           </Providers>
//         </ThemeProvider>
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
// Удаляем bootstrap, так как мы используем MUI для UI/UX
// import "bootstrap/dist/css/bootstrap.min.css"; 

import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import Lines from "../components/Lines";
import { Providers } from "./providers";
import AppThemeProvider from "../components/ThemeProvider"; // Предполагаем, что это ваш MUI ThemeProvider

import Map from "../components/map"; // Не используется в layout, но оставлен на всякий случай
import { Box, CssBaseline } from "@mui/material"; // Добавляем MUI компоненты для стилизации
import { ThemeProvider } from "next-themes";
// export const metadata = {
//   title: 'Editor JS',
//   description: 'React KazNIISA Editor JS',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {/* CssBaseline сбрасывает CSS и применяет базовые стили MUI */}
        <CssBaseline /> 
        
        {/* Используем NextThemesProvider для поддержки темной/светлой темы */}
        {/* <NextThemesProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        > */}
          {/* Используем AppThemeProvider для применения настроек MUI темы */}
          <ThemeProvider>
            <Providers>
              {/* <Lines /> - Оставлено закомментированным, если не используется */}
              
              <Header />
              
              {/* Box для основного контента. Используем Box вместо div для стилизации MUI */}
              <Box component="main" sx={{ 
                minHeight: "100vh",
                // Добавляем отступ сверху, чтобы контент не перекрывался фиксированным Header
                // 80px - примерный размер Header, можно настроить
                pt: { xs: '64px', md: '120px' }, 
              }}>
                
                {/* Хлебные крошки и отступ. Убираем жесткий padding: '9rem' */}
                <Box sx={{ 
                  maxWidth: 'xl', 
                  mx: 'auto', 
                  px: { xs: 2, md: 3 }, // Адаптивные горизонтальные отступы
                  py: 0, // Вертикальный отступ
                }}>
                  <Breadcrumbs />
                </Box>
                
                {/* Основное содержимое страницы */}
                {children}
                
              </Box>

              <Footer />
              
            </Providers>
          </ThemeProvider>
        {/* </NextThemesProvider> */}
      </body>
    </html>
  );
}