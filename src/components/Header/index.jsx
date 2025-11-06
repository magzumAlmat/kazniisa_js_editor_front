'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  AppBar, Toolbar, Container, IconButton, Drawer, List, ListItemButton,
  ListItemText, Box, Button, useTheme, alpha, Collapse, Typography,
  Grid, Paper, InputBase, Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import * as React from 'react';

// === 1. СТИЛИЗОВАННЫЕ КОМПОНЕНТЫ ===

// Стилизованный контейнер для Mega Menu
const MegaMenuContainer = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: theme.zIndex.appBar - 1,
  width: '100%',
  maxWidth: 1200, // Ограничение ширины для лучшего восприятия
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[10],
  borderTop: `4px solid ${theme.palette.primary.main}`,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

// Стилизованный заголовок группы в Mega Menu
const GroupTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1rem',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBottom: theme.spacing(0.5),
}));

// Стилизованный элемент ссылки в Mega Menu
const MegaMenuItem = styled(Link)(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  color: theme.palette.text.primary,
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  transition: 'background-color 0.2s, color 0.2s',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.dark,
  },
}));

// Стилизованный компонент поиска
const SearchBox = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[800],
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// === 2. ДАННЫЕ МЕНЮ (Используем оригинальные данные) ===

const menuData = [
  { title: "Главная", path: "/" },
  {
    title: "О клинике",
    path: "/o-klinike",
    submenu: [
      { title: "О клинике", path: "/o-klinike/", group: "Общая информация" },
      {
        title: "Поликлиника",
        path: "/o-klinike/poliklinika",
        group: "Поликлиника",
        submenu: [
          {
            title: "Отделения",
            path: "/o-klinike/poliklinika/otdeleniya",
            group: "Отделения",
            submenu: [
              { title: "Отделение специализированной помощи", path: "/o-klinike/poliklinika/otdeleniya/specializirovannaya-pomosh", group: "Отделения" },
              { title: "Отделение педиатрии", path: "/o-klinike/poliklinika/otdeleniya/pediatriya", group: "Отделения" },
              { title: "Отделение участковой службы", path: "/o-klinike/poliklinika/otdeleniya/uchastkovaya-sluzhba", group: "Отделения" },
              { title: "Женская консультация", path: "/o-klinike/poliklinika/otdeleniya/zhenskaya-konsultaciya", group: "Отделения" },
              { title: "Отделение профилактики и социально-психологической помощи", path: "/o-klinike/poliklinika/otdeleniya/profilaktika-i-psihologicheskaya-pomosh", group: "Отделения" },
            ]
          }
        ]
      },
      { title: "Блог директора", path: "/o-klinike/blog-direktora", group: "Руководство" },
      { title: "Администрация", path: "/o-klinike/administraciya", group: "Руководство" },
      { title: "Структура клиники", path: "/o-klinike/struktura-kliniki", group: "Структура" },
      { title: "Вакансии", path: "/o-klinike/vakansii", group: "Карьера" },
      { title: "Новости", path: "/o-klinike/novosti", group: "Информация" },
      { title: "Служба поддержки пациентов", path: "/o-klinike/sluzhba-podderzhki", group: "Пациентам" },
      { title: "Нормативно-правовая база", path: "/o-klinike/normativnaya-baza", group: "Документы" },
      { title: "Отчет о доходах и расходах", path: "/o-klinike/otchet-dohody-rashody", group: "Финансы" },
      { title: "Финансовый отчет", path: "/o-klinike/finansovyy-otchet", group: "Финансы" },
      { title: "Лицензии", path: "/o-klinike/licenzii", group: "Документы" },
      { title: "Call-центр", path: "/o-klinike/call-centr", group: "Контакты" },
      { title: "Противодействие коррупции", path: "/o-klinike/protivodeystvie-korrupcii", group: "Прозрачность" },
      { title: "График приема граждан", path: "/o-klinike/grafik-priema", group: "Прием" },
      { title: "График работы отделения КРО", path: "/o-klinike/grafik-kro", group: "Графики" },
      { title: "Сертификат об аккредитации ГКБ №7", path: "/o-klinike/sertifikat-akkreditacii", group: "Аккредитация" },
      { title: "График приема передач и бесед лечащих врачей", path: "/o-klinike/grafik-peredach", group: "Графики" },
      { title: "Стратегический план", path: "/o-klinike/strategicheskiy-plan", group: "Планы" },
    ]
  },
  {
    title: "Медицинские услуги",
    path: "/uslugi",
    submenu: [
      { title: "Наши направления", path: "/uslugi/napravleniya", group: "Общие" },
      { title: "Обязательное социальное медицинское страхование", path: "/", group: "Общие" },

      { title: "Приемный покой", path: "/uslugi/stacionar/priemnyy-pokoy", group: "Стационар" },
      {
        title: "Отдел нейрохирургического профиля",
        path: "/uslugi/stacionar/neyroHIRurgiya",
        group: "Стационар",
        submenu: [
          { title: "Нейрохирургия №1", path: "/uslugi/stacionar/neyrohirurgiya/1", group: "Нейрохирургия" },
          { title: "Нейрохирургия №2", path: "/uslugi/stacionar/neyrohirurgiya/2", group: "Нейрохирургия" },
          { title: "Нейрохирургия №4", path: "/uslugi/stacionar/neyrohirurgiya/4", group: "Нейрохирургия" },
          { title: "Нейрохирургия №5", path: "/uslugi/stacionar/neyrohirurgiya/5", group: "Нейрохирургия" },
        ]
      },
      {
        title: "Отдел терапевтического профиля",
        path: "/uslugi/stacionar/terapiya",
        group: "Стационар",
        submenu: [
          { title: "Нейроинсультное отделение №1", path: "/uslugi/stacionar/terapiya/neyroinsult-1", group: "Терапия" },
          { title: "Нейроинсультное отделение №2", path: "/uslugi/stacionar/terapiya/neyroinsult-2", group: "Терапия" },
          { title: "Терапия", path: "/uslugi/stacionar/terapiya/terapiya", group: "Терапия" },
          { title: "Нефрология", path: "/uslugi/stacionar/terapiya/nefrologiya", group: "Терапия" },
          { title: "Неврология", path: "/uslugi/stacionar/terapiya/nevrologiya", group: "Терапия" },
          { title: "Гематология", path: "/uslugi/stacionar/terapiya/gematologiya", group: "Терапия" },
          { title: "Эндокринология", path: "/uslugi/stacionar/terapiya/endokrinologiya", group: "Терапия" },
          { title: "Отделение хронического гемодиализа", path: "/uslugi/stacionar/terapiya/gemodializ", group: "Терапия" },
          { title: "Отделение хозрасчетной терапии", path: "/uslugi/stacionar/terapiya/vozrastnaya-terapiya", group: "Терапия" },
          { title: "Кардиологическое отделение", path: "/uslugi/stacionar/terapiya/kardiologiya", group: "Терапия" },
        ]
      },
      {
        title: "Отдел хирургического профиля",
        path: "/uslugi/stacionar/hirurgiya",
        group: "Стационар",
        submenu: [
          { title: "Травматология и политравма", path: "/uslugi/stacionar/hirurgiya/travmatologiya", group: "Хирургия" },
          { title: "Отделение урологии", path: "/uslugi/stacionar/hirurgiya/urologiya", group: "Хирургия" },
          { title: "Отделение гинекологии №1", path: "/uslugi/stacionar/hirurgiya/ginekologiya-1", group: "Хирургия" },
          { title: "Отделение гинекологии №2", path: "/uslugi/stacionar/hirurgiya/ginekologiya-2", group: "Хирургия" },
          { title: "Отделение хирургической инфекции", path: "/uslugi/stacionar/hirurgiya/hirurgicheskaya-infekciya", group: "Хирургия" },
          { title: "Отделение экстренной хирургии", path: "/uslugi/stacionar/hirurgiya/ekstrennaya-hirurgiya", group: "Хирургия" },
          { title: "Отделение плановой хирургии с центром гепатопанкреатобилиарной хирургии", path: "/uslugi/stacionar/hirurgiya/planovaya-hirurgiya", group: "Хирургия" },
          { title: "Операционный блок", path: "/uslugi/stacionar/hirurgiya/operacionnyy-blok", group: "Хирургия" },
          { title: "Анестезиология и реанимация", path: "/uslugi/stacionar/hirurgiya/anesteziologiya", group: "Хирургия" },
          { title: "Отделение ортохирургии", path: "/uslugi/stacionar/hirurgiya/ortohirurgiya", group: "Хирургия" },
          { title: "Отделение кардиохирургии и аритмологии", path: "/uslugi/stacionar/hirurgiya/kardiohirurgiya", group: "Хирургия" },
          { title: "Отделение колопроктологии", path: "/uslugi/stacionar/hirurgiya/koloproktologiya", group: "Хирургия" },
        ]
      },
      { title: "Отделение нейрореабилитации", path: "/uslugi/stacionar/neyroreabilitaciya", group: "Стационар" },

      { title: "Урологические операции", path: "/uslugi/operacii/urologicheskie", group: "Операции" },
      { title: "Нейрохирургические операции", path: "/uslugi/operacii/neyrohirurgicheskie", group: "Операции" },
      { title: "Хирургические операции", path: "/uslugi/operacii/hirurgicheskie", group: "Операции" },
      { title: "Гинекологические операции", path: "/uslugi/operacii/ginekologicheskie", group: "Операции" },
      { title: "Отделение Нейроонкологии", path: "/uslugi/operacii/neiroonkologiya", group: "Операции" },

      { title: "Лучевая диагностика (КТ, МРТ, УЗИ)", path: "/uslugi/laboratoriya/luchevaya-diagnostika", group: "Диагностика" },
      { title: "Функциональная диагностика", path: "/uslugi/laboratoriya/funkcionalnaya-diagnostika", group: "Диагностика" },

      { title: "Дарсонвализация", path: "/uslugi/fizioterapiya/darsonvalizaciya", group: "Физиотерапия" },
      { title: "Магнитотерапия", path: "/uslugi/fizioterapiya/magnitoterapiya", group: "Физиотерапия" },
      { title: "Ультрафиолетовое излучение (УФО)", path: "/uslugi/fizioterapiya/ufo", group: "Физиотерапия" },
      { title: "Электрофизиотерапия", path: "/uslugi/fizioterapiya/elektrofizioterapiya", group: "Физиотерапия" },
      { title: "Парафиновая аппликация", path: "/uslugi/fizioterapiya/parafinovaya-applikaciya", group: "Физиотерапия" },
      { title: "Грязевые процедуры", path: "/uslugi/fizioterapiya/gryazevye-procedury", group: "Физиотерапия" },
      { title: "Дуоденальное зондирование", path: "/uslugi/fizioterapiya/duodenalnoye-zondirovaniye", group: "Физиотерапия" },
      { title: "Кедровая бочка", path: "/uslugi/fizioterapiya/kedrovaya-bochka", group: "Физиотерапия" },
      { title: "Подводное вытяжение позвоночника ЛИВ", path: "/uslugi/fizioterapiya/podvodnoye-vytyazheniye", group: "Физиотерапия" },
      { title: "Гидромассажные ванны", path: "/uslugi/fizioterapiya/gidromassazhnye-vanny", group: "Физиотерапия" },
      { title: "Электросон", path: "/uslugi/fizioterapiya/elektroson", group: "Физиотерапия" },

      { title: "Стоматологические услуги", path: "/uslugi/stomatologiya", group: "Прочее" },
      { title: "Прейскурант цен", path: "/uslugi/preyskurant", group: "Прочее" },
      {
        title: "Диагностика",
        path: "/uslugi/diagnostika",
        group: "Прочее",
        submenu: [
          { title: "Лучевая диагностика (КТ, МРТ, УЗИ)", path: "/uslugi/diagnostika/luchevaya", group: "Диагностика" },
          { title: "Функциональная диагностика", path: "/uslugi/diagnostika/funkcionalnaya", group: "Диагностика" },
        ]
      },
      { title: "КРО", path: "/uslugi/kro", group: "Прочее" },
    ]
  },
  {
    title: "Государственные услуги",
    path: "/gosuslugi",
    submenu: [
      { title: "Реестр государственных услуг", path: "/gosuslugi/reestr", group: "Документы" },
      { title: "Нормативно-правовые акты", path: "/gosuslugi/normativy", group: "Документы" },
      { title: "Порядок обжалования", path: "/gosuslugi/obzhalovanie", group: "Права" },
      { title: "Стандарты государственных услуг", path: "/gosuslugi/standarty", group: "Документы" },
      { title: "Общественный совет", path: "/gosuslugi/sovet", group: "Прозрачность" },
    ]
  },
  {
    title: "Корп. управ",
    path: "/korp-uprav",
    submenu: [
      { title: "Наблюдательный совет", path: "/korp-uprav/nablyudatelnyy-sovet", group: "Управление" },
      { title: "Корпоративные документы", path: "/korp-uprav/dokumenty", group: "Документы" },
    ]
  },
  {
    title: "Государственные символы",
    path: "/gos-simvoly",
    submenu: [
      { title: "Государственный Флаг", path: "/gos-simvoly/flag", group: "Символы" },
      { title: "Государственный Герб", path: "/gos-simvoly/gerb", group: "Символы" },
      { title: "Государственный Гимн", path: "/gos-simvoly/gimn", group: "Символы" },
    ]
  },
  {
    title: "Закупки",
    path: "/zakupki",
    submenu: [
      { title: "Годовой план Государственных закупок", path: "/zakupki/godovoy-plan", group: "Планы" },
      { title: "Объявления", path: "/zakupki/obyavleniya", group: "Объявления" },
      { title: "Протоколы", path: "/zakupki/protokoly", group: "Документы" },
    ]
  },
  {
    title: "Гостевая",
    path: "/gostevaya",
    submenu: [
      { title: "Вопрос-ответ", path: "/gostevaya/vopros-otvet", group: "Обратная связь" },
      { title: "Благодарности", path: "/gostevaya/blagodarnosti", group: "Обратная связь" },
    ]
  },
  { title: "Контакты", path: "/kontakty" },
];

// === 3. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ===

// Функция для группировки элементов меню
const groupMenuItems = (items) => {
  return items.reduce((acc, item) => {
    const group = item.group || 'Без группы';
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
};

// === 4. КОМПОНЕНТЫ МЕНЮ ===

// Компонент для отображения Mega Menu (Десктоп)
const DesktopMegaMenu = React.memo(({ items, closeMenu }) => {
  const groupedItems = useMemo(() => groupMenuItems(items), [items]);
  const theme = useTheme();

  // Определяем количество колонок. Максимум 4, но не больше, чем количество групп.
  const numGroups = Object.keys(groupedItems).length;
  const numColumns = Math.min(4, numGroups);

  return (
    <Grid container spacing={3}>
      {Object.entries(groupedItems).map(([group, groupItems]) => (
        <Grid item xs={12} sm={6} md={12 / numColumns} key={group}>
          <GroupTitle>{group}</GroupTitle>
          <List disablePadding dense>
            {groupItems.map((item) => (
              <React.Fragment key={item.path}>
                <MegaMenuItem href={item.path} onClick={closeMenu}>
                  <ListItemText primary={item.title} sx={{ m: 0 }} />
                </MegaMenuItem>
                {/* Обработка вложенных подменю (2-й уровень) */}
                {item.submenu && (
                  <Box sx={{ pl: 1, borderLeft: `2px solid ${alpha(theme.palette.primary.main, 0.3)}`, ml: 1 }}>
                    {item.submenu.map(subItem => (
                      <MegaMenuItem key={subItem.path} href={subItem.path} onClick={closeMenu} sx={{ fontSize: '0.875rem', py: 0.25 }}>
                        <ListItemText primary={subItem.title} sx={{ m: 0 }} />
                      </MegaMenuItem>
                    ))}
                  </Box>
                )}
              </React.Fragment>
            ))}
          </List>
        </Grid>
      ))}
    </Grid>
  );
});
DesktopMegaMenu.displayName = 'DesktopMegaMenu';


// Компонент для отображения мобильного меню (Drawer)
const MobileMenuItem = ({ item, depth = 0, toggleDrawer }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();

  const isActive = (path) => {
    if (!path) return false;
    return pathname === path || (path !== '/' && pathname.startsWith(path));
  };

  const active = isActive(item.path);

  const handleClick = (e) => {
    if (item.submenu) {
      e.preventDefault();
      setOpen(!open);
    } else {
      toggleDrawer(false)();
    }
  };

  return (
    <Box>
      <ListItemButton
        component={Link}
        href={item.path}
        onClick={handleClick}
        selected={active && !open}
        sx={{
          pl: 2 + depth * 2,
          pr: 2,
          py: 1.5,
          borderRadius: 1,
          mb: 0.5,
          '&.Mui-selected': {
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            color: 'primary.main',
            fontWeight: 600,
          },
          '&:hover': {
            bgcolor: alpha(theme.palette.primary.main, 0.05),
          }
        }}
      >
        <ListItemText primary={item.title} primaryTypographyProps={{ fontWeight: active ? 600 : 500 }} />
        {item.submenu && (
          <KeyboardArrowDown sx={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
        )}
      </ListItemButton>

      {item.submenu && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ bgcolor: alpha(theme.palette.grey[500], 0.05), borderLeft: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`, ml: 2, mb: 1, borderRadius: 1 }}>
            {item.submenu.map(sub => (
              <MobileMenuItem key={sub.path} item={sub} depth={depth + 1} toggleDrawer={toggleDrawer} />
            ))}
          </List>
        </Collapse>
      )}
    </Box>
  );
};

// === 5. ГЛАВНЫЙ КОМПОНЕНТ HEADER ===

export default function Header() {
  const theme = useTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // Хранит title активного меню для Mega Menu

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = (title) => {
    setActiveMenu(title);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  const isActive = (path) => {
    if (!path) return false;
    return pathname === path || (path !== '/' && pathname.startsWith(path));
  };

  const NavButton = ({ item }) => {
    const active = isActive(item.path);

    return (
      <Button
        component={Link}
        href={item.path}
        endIcon={item.submenu ? <KeyboardArrowDown /> : null}
        onMouseEnter={() => item.submenu && openMenu(item.title)}
        onClick={item.submenu ? (e) => e.preventDefault() : closeMenu}
        sx={{
          color: active ? 'primary.main' : 'text.primary',
          fontWeight: active ? 600 : 500,
          textTransform: 'none',
          fontSize: '1rem',
          px: 2,
          py: 1,
          borderRadius: 1,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          position: 'relative',
          '&:hover': {
            bgcolor: alpha(theme.palette.primary.main, 0.08),
            color: 'primary.main',
          },
        }}
      >
        {item.title}
      </Button>
    );
  };

  return (
    <>
      {/* Верхняя полоса с контактами и поиском (Только для десктопа) */}
      <Box sx={{ bgcolor: theme.palette.primary.main, display: { xs: 'none', md: 'block' } }}>
        <Container maxWidth="xl">
          <Toolbar variant="dense" disableGutters sx={{ minHeight: 40, justifyContent: 'flex-end', gap: 3 }}>
            <Button
              component={Link}
              href="/zapis-na-priem"
              variant="contained"
              size="small"
              sx={{
                bgcolor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
                fontWeight: 600,
                '&:hover': { bgcolor: theme.palette.secondary.dark },
              }}
            >
              Записаться на приём
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', color: 'white', gap: 1 }}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                +7 (727) 270-86-00
              </Typography>
            </Box>
            <SearchBox>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Поиск..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </SearchBox>
          </Toolbar>
        </Container>
      </Box>

      {/* Основной Header */}
      <AppBar
        position="sticky" // Изменено на sticky для лучшего UX
        color="inherit"
        elevation={sticky ? 4 : 0}
        sx={{
          bgcolor: sticky ? 'background.paper' : 'background.paper', // Всегда белый/бумажный фон
          transition: 'all 0.3s ease',
          py: sticky ? 0.5 : 1,
          boxShadow: sticky ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 70 } }}>
            {/* Логотип */}
            <Link href="/" passHref>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image
                  src="/images/logo/logo.png" // Предполагаемый путь к логотипу
                  alt="ГКБ №7"
                  width={150} // Увеличенный размер логотипа
                  height={60}
                  priority
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </Link>

            {/* Десктопное меню (Mega Menu) */}
            <Box
              sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 1, position: 'relative' }}
              onMouseLeave={closeMenu}
            >
              {menuData.map((item) => (
                <Box key={item.title} onMouseEnter={() => item.submenu && openMenu(item.title)}>
                  <NavButton item={item} />
                </Box>
              ))}

              {/* Контейнер для Mega Menu, который отображается при hover */}
              {menuData.map((item) => item.submenu && (
                <Collapse
                  key={`mega-${item.title}`}
                  in={activeMenu === item.title}
                  timeout={300}
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100vw',
                    maxWidth: 1200,
                    pointerEvents: activeMenu === item.title ? 'auto' : 'none',
                    zIndex: theme.zIndex.appBar - 1,
                  }}
                >
                  <MegaMenuContainer>
                    <DesktopMegaMenu items={item.submenu} closeMenu={closeMenu} />
                  </MegaMenuContainer>
                </Collapse>
              ))}
            </Box>

            {/* Кнопка мобильного меню и другие элементы для мобильных устройств */}
            <Box sx={{ display: { xs: 'flex', lg: 'none' }, alignItems: 'center', gap: 1 }}>
              <IconButton
                component={Link}
                href="/zapis-na-priem"
                color="primary"
                size="large"
                sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
              >
                <PhoneIcon />
              </IconButton>
              <IconButton
                onClick={toggleDrawer(true)}
                color="primary"
                size="large"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Мобильное меню (Drawer) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { width: '85vw', maxWidth: 360, pt: 2, px: 1 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Typography variant="h6" color="primary" fontWeight={700}>Меню</Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ px: 1, pt: 2 }}>
          {menuData.map((item) => (
            <MobileMenuItem key={item.title} item={item} toggleDrawer={toggleDrawer} />
          ))}
        </List>
        <Box sx={{ p: 2, mt: 'auto' }}>
          <Button
            component={Link}
            href="/zapis-na-priem"
            variant="contained"
            fullWidth
            size="large"
            startIcon={<PhoneIcon />}
            sx={{ mb: 2 }}
          >
            Записаться на приём
          </Button>
          <Typography variant="body2" color="text.secondary" align="center">
            © ГКБ №7. Все права защищены.
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}