'use client';

import * as React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  Chip,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Paper,
  Grid, // ← Используем обычный Grid
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  MedicalServices as MedicalIcon,
  Work as WorkIcon,
  School as EducationIcon,
  Description as DutiesIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';


const vacancies = [
  {
    id: '1',
    title: 'Врач общей практики',
    requirements: [
      'высшее профильное образование',
      'опыт работы по специальности, стаж по специальности не менее 2 лет, действующий сертификат специалиста'
    ],
    duties: [
      'Оказывает квалифицированную медицинскую помощь по своей специальности, разрешенные для применения в медицинской практике.'
    ],
    email: 'nazgul_smailova71@mail.ru',
    phone: ['270-86-12']
  },
  {
    id: '2',
    title: 'Врач-невропатолог',
    requirements: [
      'высшее профильное образование',
      'опыт работы по специальности, стаж по специальности не менее 3 лет, действующий сертификат специалиста (неврология взрослая)'
    ],
    duties: [
      'Оказывает квалифицированную медицинскую помощь по своей специальности, разрешенные для применения в медицинской практике.'
    ],
    email: 'k@mail.ru',
    phone: ['270-86-12']
  },
  {
    id: '3',
    title: 'Врач-эндокринолог',
    requirements: [
      'высшее профильное образование',
      'опыт работы по специальности, стаж по специальности не менее 3 лет, действующий сертификат специалиста (эндокринология взрослая)'
    ],
    duties: [
      'Оказывает квалифицированную медицинскую помощь по своей специальности, разрешенные для применения в медицинской практике.'
    ],
    email: 'k@mail.ru',
    phone: ['270-86-12']
  },
  {
    id: '4',
    title: 'Врач-невропатолог (УОЗ г. Алматы)',
    requirements: [
      'высшее профильное образование',
      'опыт работы по специальности, стаж по специальности не менее 3 лет',
      'действующий сертификат специалиста (неврология взрослая)'
    ],
    duties: [
      'Оказание квалифицированной медицинской помощи по своей специальности, разрешенной для применения в медицинской практике.'
    ],
    email: 'kurdekbaeva.k@mail.ru',
    phone: ['270-86-12']
  },
  {
    id: '5',
    title: 'Врач-терапевт',
    requirements: [
      'высшее профильное образование по специальности',
      'опыт работы по специальности, стаж по специальности не менее 2 лет, действующий сертификат',
      'знание законодательств РК, своевременное и качественное оформление медицинской и иной служебной документации'
    ],
    duties: [
      'Оказывает квалифицированную медицинскую помощь по своей специальности, используя современные методы профилактики, диагностики, лечения и реабилитации',
      'Определяет тактику ведения больного в соответствии с установленными правилами и стандартами'
    ],
    email: 'info@gkb7.kz',
    phone: ['270-86-12', '87479803212']
  },
  {
    id: '6',
    title: 'Рентген-лаборант',
    requirements: [
      'средне-специальное профильное образование',
      'опыт работы по специальности, стаж по специальности не менее 2 лет, действующий сертификат'
    ],
    duties: [
      'Оказывает квалифицированную медицинскую помощь по своей специальности, разрешенные для применения в медицинской практике.'
    ],
    email: 'nazgul_smailova71@mail.ru',
    phone: ['8701-473-39-15']
  },
  {
    id: '7',
    title: 'Врач-гериатр',
    requirements: [
      'высшее профильное образование по специальности',
      'опыт работы по специальности, стаж по специальности не менее 5 лет, действующий сертификат',
      'знание законодательств РК, своевременное и качественное оформление медицинской и иной служебной документации'
    ],
    duties: [
      'Оказывает квалифицированную медицинскую помощь по своей специальности, используя современные методы профилактики, диагностики, лечения и реабилитации',
      'Определяет тактику ведения больного в соответствии с установленными правилами и стандартами'
    ],
    email: 'info@gkb7.kz',
    phone: ['270-86-12', '87022139772']
  },
  {
    id: '8',
    title: 'Врач-инфекционист',
    requirements: [
      'высшее профильное образование по специальности',
      'опыт работы по специальности, стаж по специальности не менее 5 лет, действующий сертификат',
      'знание законодательств РК, своевременное и качественное оформление медицинской и иной служебной документации'
    ],
    duties: [
      'Выполняет перечень работ и услуг для диагностики заболевания, оценки состояния больного и клинической ситуации',
      'Выполняет перечень работ и услуг для лечения заболевания, состояния, клинической ситуации'
    ],
    email: 'info@gkb7.kz',
    phone: ['270-86-12', '87022139772']
  },
  {
    id: '9',
    title: 'Врач-невролог',
    requirements: [
      'высшее профильное образование по специальности',
      'опыт работы по специальности, стаж по специальности не менее 5 лет, действующий сертификат',
      'знание законодательств РК, своевременное и качественное оформление медицинской и иной служебной документации'
    ],
    duties: [
      'Оказывает квалифицированную медицинскую помощь по своей специальности, используя современные методы профилактики, диагностики, лечения и реабилитации',
      'Определяет тактику ведения больного в соответствии с установленными правилами и стандартами'
    ],
    email: 'info@gkb7.kz',
    phone: ['270-86-12', '87022139772']
  },
  {
    id: '10',
    title: 'Санитарка отделения',
    requirements: [
      'Санитарка относится к младшему медицинскому персоналу',
      'начальное общее образование без предъявления требований к стажу работы',
      'правила санитарии и гигиены труда',
      'назначение моющих средств и правила обращения с ними',
      'правила внутреннего трудового распорядка',
      'правила и нормы охраны труда, техники безопасности и противопожарной защиты'
    ],
    duties: [
      'проводить уборку помещений в соответствии с санитарными нормами',
      'сопровождать больных в лечебно-диагностические кабинеты',
      'Оказание помощи больным при приеме гигиенической ванны, при раздевании и одевании'
    ],
    email: 'info@gkb7.kz',
    phone: ['270-86-12', '87022139772']
  }
];

export default function OKlinikeVakansiiPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        bgcolor: 'grey.50',
        minHeight: '100vh',
        py: { xs: 4, md: 6 }
      }}
    >
      <Container maxWidth="lg">
        {/* Заголовок страницы */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              color: 'primary.main',
              mb: 2
            }}
          >
            Вакансии
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            КГП на ПХВ «Городская клиническая больница №7» приглашает в команду профессионалов
          </Typography>
        </Box>

        {/* Сетка вакансий */}
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {vacancies.map((vacancy) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={vacancy.id}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  borderRadius: 3,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: { xs: 2.5, md: 3 } }}>
                  {/* Заголовок вакансии */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <MedicalIcon color="primary" sx={{ mr: 1.5 }} />
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary'
                      }}
                    >
                      {vacancy.title}
                    </Typography>
                  </Box>

                  <Divider sx={{ mb: 2.5 }} />

                  {/* Требования */}
                  <Box sx={{ mb: 3 }}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                      <EducationIcon fontSize="small" color="action" />
                      <Typography variant="subtitle2" fontWeight={600}>
                        Основные требования:
                      </Typography>
                    </Stack>
                    <List dense disablePadding>
                      {vacancy.requirements.map((req, idx) => (
                        <ListItem key={idx} disableGutters sx={{ py: 0.25 }}>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <CheckIcon fontSize="small" color="success" />
                          </ListItemIcon>
                          <ListItemText
                            primary={req}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'text.secondary'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  {/* Обязанности */}
                  <Box sx={{ mb: 3 }}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                      <DutiesIcon fontSize="small" color="action" />
                      <Typography variant="subtitle2" fontWeight={600}>
                        Должностные обязанности:
                      </Typography>
                    </Stack>
                    <List dense disablePadding>
                      {vacancy.duties.map((duty, idx) => (
                        <ListItem key={idx} disableGutters sx={{ py: 0.25 }}>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <CheckIcon fontSize="small" color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary={duty}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'text.secondary'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  {/* Контакты */}
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1.5 }}>
                      Как откликнуться:
                    </Typography>
                    
                    <Stack spacing={1.5}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <EmailIcon fontSize="small" color="action" />
                        <Typography
                          variant="body2"
                          component="a"
                          href={`mailto:${vacancy.email}`}
                          sx={{
                            color: 'primary.main',
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline' }
                          }}
                        >
                          {vacancy.email}
                        </Typography>
                      </Stack>

                      <Stack direction="row" alignItems="center" spacing={1}>
                        <PhoneIcon fontSize="small" color="action" />
                        <Box>
                          {vacancy.phone.map((phone, idx) => (
                            <Typography
                              key={idx}
                              variant="body2"
                              component="a"
                              href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                              sx={{
                                color: 'text.primary',
                                textDecoration: 'none',
                                display: 'block',
                                '&:hover': { textDecoration: 'underline' }
                              }}
                            >
                              {phone}
                            </Typography>
                          ))}
                        </Box>
                      </Stack>

                      <Stack direction="row" alignItems="center" spacing={1}>
                        <LocationIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                          Отдел управления персоналом
                        </Typography>
                      </Stack>
                    </Stack>

                    <Box sx={{ mt: 2 }}>
                      <Chip
                        label="10 рабочих дней"
                        size="small"
                        color="warning"
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                </CardContent>

                {/* Кнопка отклика */}
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    size={isMobile ? 'medium' : 'large'}
                    startIcon={<WorkIcon />}
                    href={`mailto:${vacancy.email}?subject=Отклик на вакансию: ${encodeURIComponent(vacancy.title)}`}
                    sx={{
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 600
                    }}
                  >
                    Откликнуться
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Нижняя секция */}
        <Paper
          elevation={0}
          sx={{
            mt: { xs: 5, md: 7 },
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            textAlign: 'center'
          }}
        >
          <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
            Присоединяйтесь к нашей команде!
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            Мы ценим профессионализм, ответственность и желание развиваться
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': { bgcolor: 'grey.100' },
              borderRadius: 2,
              px: 4
            }}
          >
            Все вакансии
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}