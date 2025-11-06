"use client";

import { Box, Container, Grid, Typography, Link as MuiLink, Divider, IconButton, useTheme } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, YouTube, Phone, Email, LocationOn } from '@mui/icons-material';
import { Stack } from '@mui/system';

// === 1. ДАННЫЕ КАРТЫ САЙТА (Расширенные данные из Header.js) ===

const menuData = [
  { title: "Главная", path: "/" },
  {
    title: "О клинике",
    path: "/o-klinike",
    submenu: [
      { title: "О клинике", path: "/o-klinike/" },
      { title: "Администрация", path: "/o-klinike/administraciya" },
      { title: "Структура клиники", path: "/o-klinike/struktura-kliniki" },
      { title: "Вакансии", path: "/o-klinike/vakansii" },
      { title: "Новости", path: "/o-klinike/novosti" },
      { title: "Служба поддержки пациентов", path: "/o-klinike/sluzhba-podderzhki" },
      { title: "Нормативно-правовая база", path: "/o-klinike/normativnaya-baza" },
      { title: "Лицензии", path: "/o-klinike/licenzii" },
      { title: "Противодействие коррупции", path: "/o-klinike/protivodeystvie-korrupcii" },
    ]
  },
  {
    title: "Медицинские услуги",
    path: "/uslugi",
    submenu: [
      { title: "Наши направления", path: "/uslugi/napravleniya" },
      { title: "Стационар", path: "/uslugi/stacionar" },
      { title: "Хирургия", path: "/uslugi/stacionar/hirurgiya" },
      { title: "Терапия", path: "/uslugi/stacionar/terapiya" },
      { title: "Диагностика (КТ, МРТ, УЗИ)", path: "/uslugi/diagnostika" },
      { title: "Физиотерапия", path: "/uslugi/fizioterapiya" },
      { title: "Прейскурант цен", path: "/uslugi/preyskurant" },
    ]
  },
  {
    title: "Государственные услуги",
    path: "/gosuslugi",
    submenu: [
      { title: "Реестр государственных услуг", path: "/gosuslugi/reestr" },
      { title: "Нормативно-правовые акты", path: "/gosuslugi/normativy" },
      { title: "Порядок обжалования", path: "/gosuslugi/obzhalovanie" },
    ]
  },
  {
    title: "Прочее",
    path: "/prochee",
    submenu: [
      { title: "Закупки", path: "/zakupki" },
      { title: "Вопрос-ответ", path: "/gostevaya/vopros-otvet" },
      { title: "Благодарности", path: "/gostevaya/blagodarnosti" },
      { title: "Контакты", path: "/kontakty" },
    ]
  },
];

// === 2. КОМПОНЕНТ FOOTER ===

const Footer = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();

  // Функция для разделения меню на 4 колонки
  const getFooterLinks = () => {
    const allLinks = menuData.flatMap(item => [
      { title: item.title, path: item.path, isMain: true },
      ...(item.submenu || []).map(sub => ({ title: sub.title, path: sub.path, isMain: false }))
    ]);

    // Разделяем все ссылки на 4 примерно равные части
    const chunkSize = Math.ceil(allLinks.length / 4);
    const chunks = [];
    for (let i = 0; i < allLinks.length; i += chunkSize) {
      chunks.push(allLinks.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const footerLinks = getFooterLinks();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        borderTop: `1px solid ${theme.palette.divider}`,
        pt: 8,
        pb: 3,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Колонка 1: Логотип и Контакты */}
          <Grid item xs={12} md={4} lg={3}>
            <Box sx={{ mb: 3 }}>
              <Link href="/" passHref>
                <Image
                  width={150}
                  height={60}
                  src="/images/logo/gkb7-logo.png" // Предполагаемый путь к логотипу
                  alt="Логотип ГКБ №7"
                  style={{ objectFit: 'contain' }}
                />
              </Link>
            </Box>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Городская клиническая больница №7 — ваш надежный партнер в заботе о здоровье.
            </Typography>

            <Stack spacing={1} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn color="primary" fontSize="small" />
                <Typography variant="body2" color="text.primary">
                  г. Алматы, микрорайон Калкаман, 20
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone color="primary" fontSize="small" />
                <MuiLink href="tel:+77273410666" color="text.primary" underline="hover" variant="body2">
                  Call-центр: 8 (727) 341-06-66
                </MuiLink>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email color="primary" fontSize="small" />
                <MuiLink href="mailto:info@gkb7.kz" color="text.primary" underline="hover" variant="body2">
                  info@gkb7.kz
                </MuiLink>
              </Box>
            </Stack>

            <Box sx={{ mt: 2 }}>
              <IconButton color="primary" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="primary" aria-label="YouTube">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>

          {/* Колонка 2-5: Карта сайта */}
        <Grid item xs={12} md={8} lg={9}>
  <Typography
    variant="h6"
    sx={{
      mb: 3,
      fontWeight: 700,
      color: 'text.primary',
      textAlign: 'left', // Выравнивание заголовка слева
    }}
  >
    Карта сайта
  </Typography>

  <Grid container spacing={2}>
    {footerLinks.map((column, colIndex) => (
      <Grid item xs={6} sm={4} md={3} lg={3} key={colIndex}>
        <Stack spacing={0.5} alignItems="flex-start">
          {column.map((item, itemIndex) => (
            <MuiLink
              component={Link}
              href={item.path}
              key={item.path + itemIndex}
              color={item.isMain ? 'text.primary' : 'text.secondary'}
              underline="hover"
              variant="body2"
              sx={{
                fontWeight: item.isMain ? 600 : 400,
                ml: item.isMain ? 0 : 1,
                textAlign: 'left', // Выравнивание текста слева
                width: '100%',
              }}
            >
              {item.title}
            </MuiLink>
          ))}
        </Stack>
      </Grid>
    ))}
  </Grid>
</Grid>


        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Нижняя часть (Копирайт и ссылки) */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © {year} ГКБ №7. Все права защищены.
          </Typography>
          <Stack direction="row" spacing={3}>
            <MuiLink component={Link} href="/privacy-policy" color="text.secondary" underline="hover" variant="body2">
              Политика конфиденциальности
            </MuiLink>
            <MuiLink component={Link} href="/terms-of-use" color="text.secondary" underline="hover" variant="body2">
              Условия использования
            </MuiLink>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;