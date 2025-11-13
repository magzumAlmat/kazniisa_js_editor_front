// // components/Hero.js
// 'use client';

// import { useState, useEffect } from 'react';
// import {
//   Box, Container, Typography, Button, Stack, Grid, Card, CardContent,
//   IconButton, Paper, Chip, useTheme, alpha, ImageList, ImageListItem,
//   ImageListItemBar, Avatar, Rating
// } from '@mui/material';
// import {
//   ChevronLeft, ChevronRight, PlayArrow, VolumeUp,
//   LocalHospital, AccessTime, PeopleAlt, Star, AccessibilityNew
// } from '@mui/icons-material';
// import Link from 'next/link';

// // === ФУНКЦИЯ ДЛЯ srcset ===
// function srcset(image, size, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

// export default function Hero() {
//   const theme = useTheme();
//   const [slide, setSlide] = useState(0);

//   const slides = [
//     { title: "Современное оборудование позволяет проводить максимально точные исследования.", text: "Подробнее о наших специалистах и технике..." },
//     { title: "Клинико-лабораторные исследования", text: "Химические, микроскопические и другие исследования крови, выделений и патологических веществ." },
//     { title: "Лапароскопия – минимально инвазивная хирургия", text: "Операции через точечные проколы без широких разрезов." },
//     { title: "Ортохирургия и механотерапия", text: "Реабилитация начинается на 1-й день после операции." },
//     { title: "Цифровая энциклопедия о Казахстане", text: "Доступ к медицинским знаниям и стандартам." }
//   ];

//   const services = [
//     { title: "Приемный покой", text: "В круглосуточном режиме врачи ведут прием ургентных больных.", icon: <LocalHospital fontSize="large" /> },
//     { title: "Отделение плановой хирургии", text: "Центр гепатопанкреатобилиарной хирургии", icon: <AccessTime fontSize="large" /> },
//     { title: "Урологическое отделение", text: "Полный спектр урологических операций", icon: <PeopleAlt fontSize="large" /> }
//   ];

//   const team = [
//     { name: "Доктор Иванов А.В.", role: "Главный врач", rating: 4.9, avatar: "/api/placeholder/80/80" },
//     { name: "Доктор Петрова Е.С.", role: "Хирург", rating: 5.0, avatar: "/api/placeholder/80/80" },
//     { name: "Доктор Сидоров К.П.", role: "Уролог", rating: 4.8, avatar: "/api/placeholder/80/80" },
//   ];

//   const reviews = [
//     { name: "Айгуль М.", text: "Спасибо за профессионализм! Операция прошла быстро и без боли.", rating: 5 },
//     { name: "Марат К.", text: "Внимательные врачи, современное оборудование. Рекомендую!", rating: 5 },
//     { name: "Гульнара Т.", text: "Онлайн-запись — очень удобно. Доктор принял вовремя.", rating: 4 },
//   ];

//   const photos = [
//     { img: '/api/placeholder/400/300', title: 'Оборудование', rows: 2, cols: 2 },
//     { img: '/api/placeholder/300/200', title: 'Лаборатория' },
//     { img: '/api/placeholder/300/200', title: 'Хирургия' },
//     { img: '/api/placeholder/400/200', title: 'Реабилитация', cols: 2 },
//     { img: '/api/placeholder/400/300', title: 'Специалисты', cols: 2 },
//     { img: '/api/placeholder/400/300', title: 'Пациенты', rows: 2, cols: 2 },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSlide((prev) => (prev + 1) % slides.length);
//     }, 7000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => setSlide((s) => (s + 1) % slides.length);
//   const prevSlide = () => setSlide((s) => (s - 1 + slides.length) % slides.length);

//   return (
//     <Box component="section" sx={{ bgcolor: 'grey.50' }}>

//       {/* === СЛАЙДЕР === */}
//       <Box sx={{ position: 'relative', height: { xs: 400, sm: 500, md: 600 }, overflow: 'hidden', mb: 12 }}>
//         <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'grey.200', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'grey.600' }}>
//           <LocalHospital sx={{ fontSize: 100, mb: 2, opacity: 0.3 }} />
//           <Typography variant="h5" sx={{ fontWeight: 500 }}>Слайд {slide + 1}</Typography>
//         </Box>

//         <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)' }} />

//         <Container maxWidth="lg" sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
//           <Box sx={{ color: 'white', maxWidth: 700 }}>
//             <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem' }, lineHeight: 1.2 }}>
//               {slides[slide].title}
//             </Typography>
//             <Typography variant="body1" sx={{ mb: 4, opacity: 0.95, fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 }}>
//               {slides[slide].text}
//             </Typography>
//             <Button component={Link} href="/zapis-na-priem" variant="contained" size="large" startIcon={<LocalHospital />}
//               sx={{
//                 bgcolor: 'linear-gradient(135deg, #006bff 0%, #0056cc 100%)', color: 'white', px: { xs: 4, md: 5 }, py: 1.8,
//                 borderRadius: 2, fontWeight: 700, fontSize: '1.1rem', textTransform: 'none',
//                 boxShadow: '0 8px 25px rgba(0, 107, 255, 0.3)', transition: 'all 0.3s ease',
//                 '&:hover': { bgcolor: 'linear-gradient(135deg, #0056cc 0%, #004099 100%)', boxShadow: '0 12px 30px rgba(0, 107, 255, 0.4)', transform: 'translateY(-3px)' }
//               }}>
//               Записаться на приём
//             </Button>
//           </Box>
//         </Container>

//         <IconButton onClick={prevSlide} sx={{ position: 'absolute', left: 0, top: 0, height: '100%', width: { xs: 60, md: 80 }, borderRadius: 0, bgcolor: 'rgba(0,0,0,0.4)', color: 'white', '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' }, zIndex: 10 }} size="large">
//           <ChevronLeft sx={{ fontSize: { xs: 32, md: 40 } }} />
//         </IconButton>

//         <IconButton onClick={nextSlide} sx={{ position: 'absolute', right: 0, top: 0, height: '100%', width: { xs: 60, md: 80 }, borderRadius: 0, bgcolor: 'rgba(0,0,0,0.4)', color: 'white', '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' }, zIndex: 10 }} size="large">
//           <ChevronRight sx={{ fontSize: { xs: 32, md: 40 } }} />
//         </IconButton>

//         <Stack direction="row" spacing={1} sx={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
//           {slides.map((_, i) => (
//             <Box key={i} onClick={() => setSlide(i)} sx={{ width: i === slide ? 36 : 12, height: 12, borderRadius: 6, bgcolor: i === slide ? 'white' : 'rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'all 0.3s ease' }} />
//           ))}
//         </Stack>
//       </Box>

//       <Container maxWidth="lg" sx={{ pb: 10 }}>

//         {/* === НАША КОМАНДА === */}
//         <Typography variant="h4" sx={{ mb: 5, fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>
//           Наша команда
//         </Typography>
//         <Grid container spacing={4} sx={{ mb: 8 }}>
//           {team.map((member, i) => (
//             <Grid item xs={12} sm={6} md={4} key={i}>
//               <Card elevation={0} sx={{ textAlign: 'center', p: 3, border: '1px solid', borderColor: 'grey.200', borderRadius: 3 }}>
//                 <Avatar
//                   src={member.avatar}
//                   alt={member.name}
//                   sx={{ width: 100, height: 100, mx: 'auto', mb: 2, border: '4px solid', borderColor: 'primary.main' }}
//                 />
//                 <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>{member.name}</Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{member.role}</Typography>
//                 <Rating value={member.rating} readOnly precision={0.1} size="small" />
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         {/* === ОТЗЫВЫ ПАЦИЕНТОВ === */}
//         <Typography variant="h4" sx={{ mb: 5, fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>
//           Отзывы пациентов
//         </Typography>
//         <Grid container spacing={4} sx={{ mb: 8 }}>
//           {reviews.map((review, i) => (
//             <Grid item xs={12} md={4} key={i}>
//               <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'grey.200', borderRadius: 3, height: '100%' }}>
//                 <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
//                   {[...Array(review.rating)].map((_, j) => (
//                     <Star key={j} sx={{ color: 'warning.main', fontSize: 20 }} />
//                   ))}
//                 </Stack>
//                 <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>"{review.text}"</Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>- {review.name}</Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>

//         {/* === ФОТО ИЗ ЖИЗНИ БОЛЬНИЦЫ === */}
//         <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>
//           Фото из жизни больницы
//         </Typography>
//         <ImageList variant="quilted" cols={4} rowHeight={160} gap={12} sx={{ borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', p: 1, boxShadow: 1, mb: 8 }}>
//           {photos.map((item) => (
//             <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
//               <Box
//                 component="img"
//                 {...srcset(item.img, 160, item.rows, item.cols)}
//                 alt={item.title}
//                 loading="lazy"
//                 sx={{ width: '100%', height: '100%', objectFit: 'cover', bgcolor: 'grey.300' }}
//               />
//               <ImageListItemBar
//                 title={item.title}
//                 position="below"
//                 sx={{ '& .MuiImageListItemBar-title': { fontSize: '0.875rem', fontWeight: 600, color: 'text.primary', textAlign: 'center', py: 0.5 } }}
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>

//         {/* === УСЛУГИ === */}
//         <Typography variant="h4" sx={{ mb: 5, fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>
//           Наши услуги
//         </Typography>
//         <Grid container spacing={4} sx={{ mb: 8 }}>
//           {services.map((service, i) => (
//             <Grid item xs={12} md={4} key={i}>
//               <Card elevation={0} sx={{ height: '100%', border: '1px solid', borderColor: 'grey.200', borderRadius: 3, transition: 'all 0.3s ease', '&:hover': { borderColor: 'primary.main', boxShadow: '0 8px 25px rgba(0,0,0,0.08)' } }}>
//                 <CardContent sx={{ p: 4, textAlign: 'center' }}>
//                   <Box sx={{ color: 'primary.main', mb: 3 }}>{service.icon}</Box>
//                   <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>{service.title}</Typography>
//                   <Typography variant="body2" color="text.secondary">{service.text}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         {/* === ЖЕСТОВЫЙ ЯЗЫК === */}
//         <Paper elevation={0} sx={{ border: '1px solid', borderColor: 'grey.200', borderRadius: 3, p: { xs: 4, md: 5 }, mb: 8, bgcolor: 'primary.50' }}>
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={8}>
//               <Chip label="Доступность" size="small" color="primary" sx={{ mb: 2 }} />
//               <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>Онлайн-услуга жестового языка</Typography>
//               <Typography variant="body1" color="text.secondary">
//                 Услуга доступна для пациентов с нарушениями слуха. Подключитесь через кнопку ниже.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
//               <Button variant="contained" size="large" startIcon={<AccessibilityNew />} sx={{ borderRadius: 2, px: 5, py: 1.5, fontWeight: 600, textTransform: 'none' }}>
//                 Подключиться
//               </Button>
//             </Grid>
//           </Grid>
//         </Paper>

//         {/* === ВИДЕО === */}
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>Больше видеоматериалов</Typography>
//           <Paper elevation={0} sx={{ position: 'relative', height: { xs: 240, md: 380 }, borderRadius: 3, overflow: 'hidden', border: '1px solid', borderColor: 'grey.200', bgcolor: 'grey.200' }}>
//             <Box sx={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'grey.600' }}>
//               <PlayArrow sx={{ fontSize: 80, mb: 1, opacity: 0.3 }} />
//               <Typography variant="body1" sx={{ fontWeight: 500 }}>Видео недоступно</Typography>
//             </Box>
//             <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <IconButton size="large" sx={{ bgcolor: 'white', '&:hover': { bgcolor: '#f5f5f5' } }}>
//                 <PlayArrow sx={{ fontSize: 40, color: 'primary.main' }} />
//               </IconButton>
//             </Box>
//           </Paper>
//         </Box>

//         {/* === ФУТЕР === */}
//         {/* <Paper elevation={0} sx={{ borderTop: '1px solid', borderColor: 'grey.200', pt: 5 }}>
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <Typography variant="body2" color="text.secondary">
//                 © «Городская клиническая больница №7».<br />
//                 Сайт разработан в компании AlmaWeb
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
//               <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//                 Мы находимся:<br />
//                 <strong>Казахстан, г. Алматы, микрорайон «Калкаман»</strong>
//               </Typography>
//             </Grid>
//           </Grid>
//         </Paper> */}
//       </Container>
//     </Box>
//   );
// }






'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Box, Container, Typography, Button, Stack, Grid, Card, CardContent,
  IconButton, Paper, Chip, useTheme, alpha, ImageList, ImageListItem,
  ImageListItemBar, Avatar, Rating, Divider
} from '@mui/material';
import {
  ChevronLeft, ChevronRight, PlayArrow, LocalHospital, AccessTime, PeopleAlt,
  Star, AccessibilityNew, CheckCircleOutline, FavoriteBorder, AssignmentInd,
  TrendingUp,
} from '@mui/icons-material';
import Link from 'next/link';
import { styled } from '@mui/material/styles';

// === 1. СТИЛИЗОВАННЫЕ КОМПОНЕНТЫ ===

// Стилизованный блок для инфографики
const InfographicCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius * 2,
  height: '100%',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius * 3,
  background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  transition: 'all 0.4s ease',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 20px 40px rgba(0,94,184,0.15)',
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.shape.borderRadius * 3,
  border: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: '0 15px 35px rgba(0,94,184,0.12)',
    transform: 'translateY(-8px)',
  },
}));

function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Стилизованный слайдер
const HeroSlider = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: { xs: 450, sm: 550, md: 650 },
  overflow: 'hidden',
  marginBottom: theme.spacing(10),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[5],
}));

// === 2. ДАННЫЕ ===
const slides = [
  { 
    title: "Лапароскопия — операции через точечные проколы", 
    text: "Лапароскопия – это метод оперативного лечения заболеваний, при котором оперативные вмешательства различного объема выполняют без широкого рассечения кожных покровов и мышечных тканей, через точечные проколы.", 
    image: '/images/slides/slider1.jpg' 
  },
  { 
    title: "Клинико-лабораторные исследования", 
    text: "К клинико-лабораторным исследованиям относятся химические, микроскопические и другие исследования человеческих выделений, крови и патологических веществ, образующихся в организме.", 
    image: '/images/slides/slider2.jpg' 
  },
  { 
    title: "Реабилитация с первого дня после операции", 
    text: "В отделении ортохирургии реабилитацию механотерапией начинают проводить на 1-й день после операции. С помощью высокотехнологичных операций решаются многие проблемы опорно-двигательного аппарата.", 
    image: '/images/slides/slider3.jpg' 
  },
];

// Новые данные для инфографики (Счетчики)
const infographicData = [
  { value: "10+", label: "Лет опыта", icon: <AssignmentInd fontSize="large" /> },
  { value: "500+", label: "Операций в год", icon: <TrendingUp fontSize="large" /> },
  { value: "98%", label: "Довольных пациентов", icon: <FavoriteBorder fontSize="large" /> },
  { value: "24/7", label: "Экстренная помощь", icon: <AccessTime fontSize="large" /> },
];

// Данные для секции "Почему мы?"
const featuresData = [
  { title: "Высококвалифицированный персонал", text: "Наши врачи имеют международные сертификаты и многолетний опыт.", icon: <PeopleAlt color="primary" /> },
  { title: "Современное оборудование", text: "Используем только передовые технологии для диагностики и лечения.", icon: <LocalHospital color="primary" /> },
  { title: "Индивидуальный подход", text: "Разрабатываем персонализированные планы лечения для каждого пациента.", icon: <CheckCircleOutline color="primary" /> },
];

// === 3. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ===

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

// === 4. ГЛАВНЫЙ КОМПОНЕНТ HERO ===

const stats = [
  { end: 10, suffix: "+", label: "Лет опыта", icon: <AssignmentInd /> },
  { end: 500, suffix: "+", label: "Операций в год", icon: <TrendingUp /> },
  { end: 98, suffix: "%", label: "Довольных пациентов", icon: <FavoriteBorder /> },
  { end: 24, suffix: "/7", label: "Экстренная помощь", icon: <AccessTime /> },
];

export default function Hero() {
  const theme = useTheme();
  const [slide, setSlide] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setSlide((s) => (s + 1) % slides.length);
  const prevSlide = () => setSlide((s) => (s - 1 + slides.length) % slides.length);

  return (
    <Box component="section" sx={{ bgcolor: 'background.default', pt: 0 }}>
      <Container maxWidth="xl">

        {/* === СЛАЙДЕР (HERO SECTION) === */}
       <HeroSlider sx={{ height: { xs: 450, sm: 550, md: 650 } }}>
  {slides.map((item, index) => (
    <Box
      key={index}
      sx={{
        position: 'absolute',
        inset: 0,
        opacity: index === slide ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* ТОЛЬКО ЛЁГКИЙ градиент по всему слайду (для красоты) */}
      <Box sx={{ 
        position: 'absolute', 
        inset: 0, 
        bgcolor: 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' 
      }} />

      {/* КОНТРАСТНАЯ ПОДЛОЖКА ПОД ТЕКСТ */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: { xs: 0, md: '40%' }, // на мобильных — весь экран, на десктопе — только левая часть
        bottom: 0,
        bgcolor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(2px)',
        borderRight: { md: '80px solid transparent' }, // красивая диагональная грань
        clipPath: { md: 'polygon(0 0, 90% 0, 75% 100%, 0 100%)' }, // диагональный срез
      }} />

      <Container maxWidth="lg" sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', zIndex: 2 }}>
        <Box sx={{ 
          color: 'white', 
          maxWidth: 700, 
          p: { xs: 3, md: 5 },
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
        }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 800, 
              mb: 3, 
              fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4.2rem' }, 
              lineHeight: 1.15,
              letterSpacing: '-0.5px'
            }}
          >
            {item.title}
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 5, 
              opacity: 0.95, 
              fontSize: { xs: '1.05rem', md: '1.25rem' }, 
              lineHeight: 1.7,
              maxWidth: 650
            }}
          >
            {item.text}
          </Typography>

          {/* КНОПКА С ЯРКИМ АКЦЕНТОМ */}
          <Button 
            component={Link} 
            href="/zapis-na-priem" 
            variant="contained" 
            size="large" 
            startIcon={<LocalHospital />}
            sx={{
              bgcolor: '#9C27B0', // яркий фиолетовый как на вашем скриншоте
              color: 'white', 
              px: { xs: 5, md: 7 }, 
              py: 2,
              borderRadius: 4,
              fontWeight: 700, 
              fontSize: '1.15rem', 
              textTransform: 'none',
              boxShadow: '0 8px 25px rgba(156, 39, 176, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': { 
                bgcolor: '#7B1FA2', 
                boxShadow: '0 12px 35px rgba(156, 39, 176, 0.5)',
                transform: 'translateY(-3px)'
              }
            }}
          >
            Записаться на приём
          </Button>
        </Box>
      </Container>
    </Box>
  ))}

  {/* СТРЕЛКИ — сделали более современными */}
  <IconButton 
    onClick={prevSlide} 
    sx={{ 
      position: 'absolute', 
      left: { xs: 8, md: 24 }, 
      top: '50%', 
      transform: 'translateY(-50%)', 
      bgcolor: 'rgba(255,255,255,0.25)', 
      backdropFilter: 'blur(10px)',
      color: 'white', 
      '&:hover': { bgcolor: 'rgba(255,255,255,0.4)' }, 
      zIndex: 10 
    }} 
    size="large"
  >
    <ChevronLeft sx={{ fontSize: 42 }} />
  </IconButton>

  <IconButton 
    onClick={nextSlide} 
    sx={{ 
      position: 'absolute', 
      right: { xs: 8, md: 24 }, 
      top: '50%', 
      transform: 'translateY(-50%)', 
      bgcolor: 'rgba(255,255,255,0.25)', 
      backdropFilter: 'blur(10px)',
      color: 'white', 
      '&:hover': { bgcolor: 'rgba(255,255,255,0.4)' }, 
      zIndex: 10 
    }} 
    size="large"
  >
    <ChevronRight sx={{ fontSize: 42 }} />
  </IconButton>

  {/* ТОЧКИ — чуть крупнее и красивее */}
  <Stack 
    direction="row" 
    spacing={1.5} 
    sx={{ 
      position: 'absolute', 
      bottom: { xs: 20, md: 32 }, 
      left: '50%', 
      transform: 'translateX(-50%)', 
      zIndex: 10 
    }}
  >
    {slides.map((_, i) => (
      <Box 
        key={i} 
        onClick={() => setSlide(i)} 
        sx={{ 
          width: i === slide ? 42 : 14, 
          height: 14, 
          borderRadius: 7, 
          bgcolor: i === slide ? 'white' : 'rgba(255,255,255,0.5)', 
          cursor: 'pointer', 
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: i === slide ? '0 0 20px rgba(255,255,255,0.6)' : 'none'
        }} 
      />
    ))}
  </Stack>
</HeroSlider>

        {/* === ИНФОГРАФИКА (СЧЕТЧИКИ) === */}
         <Box sx={{ mt: { xs: -8, md: -10 }, mb: { xs: 8, md: 12 }, position: 'relative', zIndex: 10 }}>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {stats.map((stat, i) => (
              <Grid item xs={6} md={3} key={i}>
                <StatCard elevation={0}>
                  <Box sx={{ color: 'primary.main', mb: 2, '& svg': { fontSize: 48 } }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.dark' }}>
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.secondary', mt: 1 }}>
                    {stat.label}
                  </Typography>
                </StatCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* === ПОЧЕМУ МЫ? (КРАТКИЕ ПРЕИМУЩЕСТВА) === */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h4" sx={{ mb: 5, fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>
            Почему выбирают нас?
          </Typography>
          <Grid container spacing={4}>
            {featuresData.map((feature, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card elevation={0} sx={{ height: '100%', border: '1px solid', borderColor: 'grey.200', borderRadius: 3, p: 3, transition: 'all 0.3s ease', '&:hover': { borderColor: 'primary.main', boxShadow: '0 8px 25px rgba(0,0,0,0.08)' } }}>
                  <CardContent sx={{ p: 0, textAlign: 'center' }}>
                    <Box sx={{ color: 'primary.main', mb: 2, '& svg': { fontSize: 50 } }}>{feature.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5 }}>{feature.title}</Typography>
                    <Typography variant="body1" color="text.secondary">{feature.text}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* === СЕКЦИЯ УСЛУГ (Оставлена из оригинального hero.js) === */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h4" sx={{ mb: 5, fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>
            Наши услуги
          </Typography>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {/* Используем данные services из оригинального файла, если они доступны */}
            {/* Предполагаем, что services определены в другом месте или будут добавлены */}
            {/* Для примера используем заглушку */}
            {[
              { title: "Приемный покой", text: "В круглосуточном режиме врачи ведут прием ургентных больных.", icon: <LocalHospital fontSize="large" /> },
              { title: "Отделение плановой хирургии", text: "Центр гепатопанкреатобилиарной хирургии", icon: <AccessTime fontSize="large" /> },
              { title: "Урологическое отделение", text: "Полный спектр урологических операций", icon: <PeopleAlt fontSize="large" /> }
            ].map((service, i) => (
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
        </Container>

        {/* === СЕКЦИЯ ЖЕСТОВОГО ЯЗЫКА (Оставлена из оригинального hero.js) === */}
        <Container maxWidth="lg" sx={{ pb: 8 }}>
          <Paper elevation={0} sx={{ border: '1px solid', borderColor: 'grey.200', borderRadius: 3, p: { xs: 4, md: 5 }, bgcolor: alpha(theme.palette.primary.main, 0.05) }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Chip label="Доступность" size="small" color="primary" sx={{ mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>Онлайн-услуга жестового языка</Typography>
                <Typography variant="body1" color="text.secondary">
                  Услуга доступна для пациентов с нарушениями слуха. Подключитесь через кнопку ниже.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                <Button variant="contained" size="large" startIcon={<AccessibilityNew />} sx={{ borderRadius: 2, px: 5, py: 1.5, fontWeight: 600, textTransform: 'none' }}>
                  Подключиться
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>

        {/* === ФОТО ИЗ ЖИЗНИ БОЛЬНИЦЫ (Оставлена из оригинального hero.js) === */}
        <Container maxWidth="lg" sx={{ pb: 10 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>
            Фото из жизни больницы
          </Typography>
          {/* Используем данные photos из оригинального файла, если они доступны */}
          {/* Для примера используем заглушку */}
          <ImageList variant="quilted" cols={4} rowHeight={160} gap={12} sx={{ borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', p: 1, boxShadow: 1, mb: 8 }}>
            {[
              { img: '/api/placeholder/400/300', title: 'Оборудование', rows: 2, cols: 2 },
              { img: '/api/placeholder/300/200', title: 'Лаборатория' },
              { img: '/api/placeholder/300/200', title: 'Хирургия' },
              { img: '/api/placeholder/400/200', title: 'Реабилитация', cols: 2 },
              { img: '/api/placeholder/400/300', title: 'Специалисты', cols: 2 },
              { img: '/api/placeholder/400/300', title: 'Пациенты', rows: 2, cols: 2 },
            ].map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <Box
                  component="img"
                  {...srcset(item.img, 160, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', bgcolor: 'grey.300' }}
                />
                <ImageListItemBar
                  title={item.title}
                  position="below"
                  sx={{ '& .MuiImageListItemBar-title': { fontSize: '0.875rem', fontWeight: 600, color: 'text.primary', textAlign: 'center', py: 0.5 } }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>

      </Container>
    </Box>
  );
}