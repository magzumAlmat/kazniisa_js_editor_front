// components/Hero.js
'use client';

import { useState, useEffect } from 'react';
import {
  Box, Container, Typography, Button, Stack, Grid, Card, CardContent,
  IconButton, Paper, Chip, useTheme, alpha, ImageList, ImageListItem,
  ImageListItemBar
} from '@mui/material';
import {
  ChevronLeft, ChevronRight, PlayArrow, VolumeUp,
  LocalHospital, AccessTime, PeopleAlt
} from '@mui/icons-material';
import Link from 'next/link';

// === ФУНКЦИЯ ДЛЯ srcset ===
function srcset(image,size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

// === ДАННЫЕ ДЛЯ ImageList (с заглушками) ===
const itemData = [
  { img: '/api/placeholder/400/300', title: 'Оборудование', rows: 2, cols: 2 },
  { img: '/api/placeholder/300/200', title: 'Лаборатория' },
  { img: '/api/placeholder/300/200', title: 'Хирургия' },
  { img: '/api/placeholder/400/200', title: 'Реабилитация', cols: 2 },
  { img: '/api/placeholder/400/300', title: 'Специалисты', cols: 2 },
  { img: '/api/placeholder/400/300', title: 'Пациенты', rows: 2, cols: 2 },
  { img: '/api/placeholder/300/200', title: 'Консультация' },
  { img: '/api/placeholder/300/200', title: 'Анализы' },
  { img: '/api/placeholder/400/300', title: 'Диагностика', rows: 2, cols: 2 },
  { img: '/api/placeholder/300/200', title: 'Операционная' },
  { img: '/api/placeholder/300/200', title: 'Палата' },
  { img: '/api/placeholder/400/200', title: 'Фасад', cols: 2 },
];

export default function Hero() {
  const theme = useTheme();
  const [slide, setSlide] = useState(0);

  const slides = [
    { title: "Современное оборудование позволяет проводить максимально точные исследования.", text: "Подробнее о наших специалистах и технике..." },
    { title: "Клинико-лабораторные исследования", text: "Химические, микроскопические и другие исследования крови, выделений и патологических веществ." },
    { title: "Лапароскопия – минимально инвазивная хирургия", text: "Операции через точечные проколы без широких разрезов." },
    { title: "Ортохирургия и механотерапия", text: "Реабилитация начинается на 1-й день после операции." },
    { title: "Цифровая энциклопедия о Казахстане", text: "Доступ к медицинским знаниям и стандартам." }
  ];

  const services = [
    { title: "Приемный покой", text: "В круглосуточном режиме врачи ведут прием ургентных больных.", icon: <LocalHospital fontSize="large" /> },
    { title: "Отделение плановой хирургии", text: "Центр гепатопанкреатобилиарной хирургии", icon: <AccessTime fontSize="large" /> },
    { title: "Урологическое отделение", text: "Полный спектр урологических операций", icon: <PeopleAlt fontSize="large" /> }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setSlide((s) => (s + 1) % slides.length);
  const prevSlide = () => setSlide((s) => (s - 1 + slides.length) % slides.length);

  return (
    <Box component="section" sx={{ bgcolor: 'grey.50' }}>

      {/* === СЛАЙДЕР НА ВСЮ ШИРИНУ === */}
      <Box sx={{ position: 'relative', height: { xs: 400, sm: 500, md: 600 }, overflow: 'hidden', mb: 12 }}>
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'grey.200', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'grey.600' }}>
          <LocalHospital sx={{ fontSize: 100, mb: 2, opacity: 0.3 }} />
          <Typography variant="h5" sx={{ fontWeight: 500 }}>Слайд {slide + 1}</Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>Заглушка изображения</Typography>
        </Box>

        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)' }} />

        <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', px: { xs: 2, md: 4 } }}>
          <Container maxWidth="lg">
            <Box sx={{ color: 'white', maxWidth: 700 }}>
              <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem' }, lineHeight: 1.2 }}>
                {slides[slide].title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, opacity: 0.95, fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 }}>
                {slides[slide].text}
              </Typography>
              <Button component={Link} href="/zapis-na-priem" variant="contained" size="large" startIcon={<LocalHospital />}
                sx={{
                  bgcolor: 'linear-gradient(135deg, #006bff 0%, #0056cc 100%)', color: 'white', px: { xs: 4, md: 5 }, py: 1.8,
                  borderRadius: 2, fontWeight: 700, fontSize: '1.1rem', textTransform: 'none',
                  boxShadow: '0 8px 25px rgba(0, 107, 255, 0.3)', transition: 'all 0.3s ease',
                  '&:hover': { bgcolor: 'linear-gradient(135deg, #0056cc 0%, #004099 100%)', boxShadow: '0 12px 30px rgba(0, 107, 255, 0.4)', transform: 'translateY(-3px)' }
                }}>
                Записаться на приём
              </Button>
            </Box>
          </Container>
        </Box>

        <IconButton onClick={prevSlide} sx={{ position: 'absolute', left: 0, top: 0, height: '100%', width: { xs: 60, md: 80 }, borderRadius: 0, bgcolor: 'rgba(0,0,0,0.4)', color: 'white', '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' }, zIndex: 10 }} size="large">
          <ChevronLeft sx={{ fontSize: { xs: 32, md: 40 } }} />
        </IconButton>

        <IconButton onClick={nextSlide} sx={{ position: 'absolute', right: 0, top: 0, height: '100%', width: { xs: 60, md: 80 }, borderRadius: 0, bgcolor: 'rgba(0,0,0,0.4)', color: 'white', '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' }, zIndex: 10 }} size="large">
          <ChevronRight sx={{ fontSize: { xs: 32, md: 40 } }} />
        </IconButton>

        <Stack direction="row" spacing={1} sx={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
          {slides.map((_, i) => (
            <Box key={i} onClick={() => setSlide(i)} sx={{ width: i === slide ? 36 : 12, height: 12, borderRadius: 6, bgcolor: i === slide ? 'white' : 'rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'all 0.3s ease' }} />
          ))}
        </Stack>
      </Box>

      {/* === ImageList — ИСПРАВЛЕННЫЙ, С ПОДПИСЯМИ === */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>
          Фото из жизни больницы
        </Typography>

        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={160}
          gap={12}
          sx={{
            borderRadius: 2,
            overflow: 'hidden',
            bgcolor: 'background.paper',
            p: 1,
            boxShadow: 1,
          }}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              {/* ИСПРАВЛЕНО: img без детей */}
              <Box
                component="img"
                {...srcset(item.img, 160, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  bgcolor: 'grey.300',
                }}
              />
              {/* ПОДПИСЬ ПОД ФОТО */}
              <ImageListItemBar
                title={item.title}
                position="below"
                sx={{
                  '& .MuiImageListItemBar-title': {
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'text.primary',
                    textAlign: 'center',
                    py: 0.5,
                  },
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      {/* === ОСТАЛЬНОЕ В КОНТЕЙНЕРЕ === */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        {/* ГОРИЗОНТАЛЬНОЕ МЕНЮ */}
        <Paper elevation={0} sx={{ borderRadius: 2, overflow: 'hidden', mb: 8, bgcolor: 'primary.main', color: 'white' }}>
          <Grid container>
            {[
              { icon: <LocalHospital sx={{ fontSize: 32 }} />, title: "Прикрепление к поликлинике", href: "/pacientam/prikreplenie" },
              { icon: <AccessTime sx={{ fontSize: 32 }} />, title: "Запись на прием к врачу", href: "/zapis-na-priem" },
              { icon: <PeopleAlt sx={{ fontSize: 32 }} />, title: "Вызов врача на дом", href: "/pacientam/vyzov-vracha" },
              { icon: <VolumeUp sx={{ fontSize: 32 }} />, title: "Заказать рецепт онлайн", href: "/pacientam/retsept" },
            ].map((item, i) => (
              <Grid item xs={6} sm={3} key={i} component={Link} href={item.href}
                sx={{
                  textDecoration: 'none', color: 'inherit', p: { xs: 2, sm: 3 }, textAlign: 'center',
                  borderRight: i < 3 ? '1px solid' : 'none', borderRightColor: 'rgba(255,255,255,0.2)',
                  bgcolor: i % 2 === 0 ? 'primary.dark' : 'primary.main', transition: 'all 0.2s ease',
                  '&:hover': { bgcolor: 'primary.dark', transform: 'translateY(-2px)' }
                }}>
                <Box sx={{ mb: 1 }}>{item.icon}</Box>
                <Typography variant="body2" sx={{ fontWeight: 500, fontSize: { xs: '0.85rem', sm: '1rem' }, lineHeight: 1.3 }}>
                  {item.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* УСЛУГИ */}
        <Typography variant="h4" sx={{ mb: 5, fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>Наши услуги</Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {services.map((service, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card elevation={0} sx={{ height: '100%', border: '1px solid', borderColor: 'grey.200', borderRadius: 3, transition: 'all 0.3s ease', '&:hover': { borderColor: 'primary.main', boxShadow: '0 8px 25px rgba(0,0,0,0.08)' } }}>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 3 }}>{service.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>{service.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{service.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* ЖЕСТОВЫЙ ЯЗЫК */}
        <Paper elevation={0} sx={{ border: '1px solid', borderColor: 'grey.200', borderRadius: 3, p: { xs: 4, md: 5 }, mb: 8, bgcolor: 'primary.50' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Chip label="Доступность" size="small" color="primary" sx={{ mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>Онлайн-услуга жестового языка</Typography>
              <Typography variant="body1" color="text.secondary">
                Больница была построена в 1991 году как медицинское учреждение на случай... Услуга доступна для пациентов с нарушениями слуха.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              <Button variant="contained" size="large" startIcon={<VolumeUp />} sx={{ borderRadius: 2, px: 5, py: 1.5, fontWeight: 600, textTransform: 'none' }}>
                Подключиться
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* ВИДЕО */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>Больше видеоматериалов</Typography>
          <Paper elevation={0} sx={{ position: 'relative', height: { xs: 240, md: 380 }, borderRadius: 3, overflow: 'hidden', border: '1px solid', borderColor: 'grey.200', bgcolor: 'grey.200' }}>
            <Box sx={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'grey.600' }}>
              <PlayArrow sx={{ fontSize: 80, mb: 1, opacity: 0.3 }} />
              <Typography variant="body1" sx={{ fontWeight: 500 }}>Видео недоступно</Typography>
            </Box>
            <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IconButton size="large" sx={{ bgcolor: 'white', '&:hover': { bgcolor: '#f5f5f5' } }}>
                <PlayArrow sx={{ fontSize: 40, color: 'primary.main' }} />
              </IconButton>
            </Box>
          </Paper>
        </Box>

        {/* ФУТЕР */}
        <Paper elevation={0} sx={{ borderTop: '1px solid', borderColor: 'grey.200', pt: 5 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" color="text.secondary">
                © «Городская клиническая больница №7».<br />
                Сайт разработан в компании AlmaWeb
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Мы находимся:<br />
                <strong>Казахстан, г. Алматы, микрорайон «Калкаман»</strong>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}