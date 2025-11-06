"use client";

import { Box, Container, Typography, Grid, Paper, Divider, useTheme, alpha } from '@mui/material';
import { LocalHospital, PeopleAlt, Science, Settings, School, TrendingUp } from '@mui/icons-material';
import React from 'react';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
export default function OKlinikePage() {
  // OKlinikeStrukturaKlinikiPage.js - Улучшенный UI/UX с инфографикой

// === 1. ДАННЫЕ ДЛЯ ИНФОГРАФИКИ И СТРУКТУРЫ ===

const keyMetrics = [
  { value: "30+", label: "Структурных подразделений", icon: <LocalHospital fontSize="large" /> },
  { value: "19", label: "Клинических отделений", icon: <PeopleAlt fontSize="large" /> },
  { value: "9", label: "Параклинических отделений", icon: <Science fontSize="large" /> },
  { value: "17", label: "Клинических баз кафедр", icon: <School fontSize="large" /> },
];

const departments = [
  { title: "Хирургический профиль", icon: <Settings />, list: ["3 отделения хирургии", "Центр нейрохирургии", "Травматология", "Урология", "2 отделения гинекологии", "Ортохирургия"] },
  { title: "Терапевтический профиль", icon: <PeopleAlt />, list: ["Гематология", "Эндокринология", "Кардиология", "Нефрология", "Гемодиализ", "Терапия"] },
  { title: "Диагностика и Реабилитация", icon: <Science />, list: ["Лучевая диагностика", "Консультативно-реабилитационное отделение", "Крупнейшее реанимационное отделение"] },
];

// === 2. КОМПОНЕНТ ДЛЯ КАРТОЧКИ МЕТРИКИ ===

const MetricCard = ({ value, label, icon }) => {
  const theme = useTheme();
  return (
    <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%', bgcolor: 'background.paper', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: theme.shadows[8] } }}>
      <Box sx={{ color: 'primary.main', mb: 1 }}>{icon}</Box>
      <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.dark', mb: 0.5 }}>
        {value}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {label}
      </Typography>
    </Paper>
  );
};

// === 3. ГЛАВНЫЙ КОМПОНЕНТ СТРАНИЦЫ ===


  const theme = useTheme();
  
  // Текст, извлеченный из 1.rtf
  const mainText = `
    Городская клиническая больница №7 г.Алматы сегодня по праву считается одним из самых крупных лечебных учреждений не только города, но и всей страны. Знаменитая семерка является ровесницей Независимости Казахстана – именно в 1991 году клиника открыла свои двери для пациентов, которым требуется неотложная медицинская помощь.
    <br/>
    
    В настоящий момент ГКБ №7 выполняет функцию единого центра по оказанию специализированной экстренно-плановой стационарной, амбулаторно-поликлинической и консультативно-диагностической медицинской помощи населению. Больница является клинической базой 17 кафедр ведущих медицинских научных центров и вузов Казахстана. Достигла высокой планки и заслуженно занимает свое место в рынке медицинских услуг.
    <br/>
    Седьмая больница достойно проявила себя в период испытаний во время всемирной пандемии Covid-19. С первых дней пандемии была на передовой. Медперсонал самоотверженно выполнял и продолжает выполнять свою миссию – спасение жизней и помощь в обретении потерянного здоровья тысячам пациентов. В многопрофильной клинике работает высокопрофессиональный коллектив единомышленников, объединенных общими задачами, которые отдают не только свои знания и опыт, но и частичку души своим пациентам.
    <br/>
    Вопрос здоровья казахстанцев относится к стратегическим целям и приоритетам в политике нашего государства. Медицинская отрасль в нашей стране стремится выйти на новый высокотехнологичный уровень развития. Впереди много серъезной работы. Персонал ГКБ №7 из числа опытных профессионалов и молодых талантливых специалистов не собирается останавливаться на достигнутом, нацелен на достижение новых результатов и достижений – нового этапа в развитии клиники.
    <br/>
    ГКБ № 7 демонстрирует организацию оказания медицинской помощи на уровне лучших больниц страны, используя достижения в области новых технологий и вычислительной техники и оказывая качественную и доступную медицинскую помощь. В соответствии с международными стандартами в стационаре проведен ряд мероприятий по модернизации информационной системы сектора здравоохранения с внедрением новых и передовых технологий. Произведено оснащение больницы новым оборудованием для диагностики и лечения различных патологий на современном уровне. Определены меры по организации постоянного повышения квалификации специалистов, проведению научных семинаров и конференций с привлечением ведущих зарубежных специалистов.
  `;

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      
      {/* Заголовок */}
      <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
        Структура клиники
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 5 }}>
        Ключевые факты о Городской клинической больнице №7
      </Typography>

      {/* Инфографика (Ключевые метрики) */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {keyMetrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <MetricCard {...metric} />
          </Grid>
        ))}
      </Grid>

      {/* Основной текст о клинике */}
      <Box sx={{ mb: 8 }}>
        {mainText.split('\n\n').map((paragraph, index) => (
          <Typography key={index} variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'text.primary' }}>
            {paragraph.trim()}
          </Typography>
        ))}
      </Box>

      <Divider sx={{ my: 5 }} />

      {/* Секция "Структурные подразделения" (Визуализация структуры) */}
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
        Основные структурные подразделения
      </Typography>

      <Grid container spacing={4}>
        {departments.map((dept, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={0} sx={{ p: 3, border: `2px solid ${theme.palette.primary.light}`, borderRadius: 3, height: '100%', bgcolor: alpha(theme.palette.primary.light, 0.1) }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: 'primary.dark' }}>
                {dept.icon}
                <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 }}>
                  {dept.title}
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {dept.list.map((item, i) => (
                  <Typography component="li" key={i} variant="body1" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                    <TrendingUp sx={{ fontSize: 16, mr: 1, color: 'secondary.main' }} />
                    {item}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      
      {/* Блок с призывом к действию (CTA) */}
      {/* <Paper elevation={4} sx={{ mt: 8, p: { xs: 4, md: 6 }, bgcolor: 'primary.main', color: 'white', borderRadius: 3, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Готовы к новому этапу в развитии клиники
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
          Мы нацелены на достижение новых результатов и предоставление качественной и доступной медицинской помощи.
        </Typography>
        <MuiLink component={Link} href="/kontakty" underline="none">
          <Box sx={{ 
            display: 'inline-block', 
            px: 4, 
            py: 1.5, 
            bgcolor: 'secondary.main', 
            color: 'white', 
            borderRadius: 2, 
            fontWeight: 600,
            transition: 'background-color 0.3s',
            '&:hover': { bgcolor: 'secondary.dark' }
          }}>
            Связаться с нами
          </Box>
        </MuiLink>
      </Paper> */}

    </Container>
  );
}
