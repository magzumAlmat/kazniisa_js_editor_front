// src/components/Header/index.tsx
'use client';

import { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Container, IconButton, Drawer, List, ListItemButton,
  ListItemText, Box, Button,  useTheme, alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import ListSubheader from '@mui/material/ListSubheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const StyledListHeader = styled(ListSubheader)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#f5f5f5' : '#333',
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: '0.875rem',
  lineHeight: '2rem',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
}));

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

      { title: "Лучевая диагностика (КТ, МРТ, УЗИ)", path: "/uslugi/laboratoriya/luchevaya-diagnostika", group: "Лаборатория" },
      { title: "Функциональная диагностика", path: "/uslugi/laboratoriya/funkcionalnaya-diagnostika", group: "Лаборатория" },

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
      { title: "Информационные материалы", path: "/gosuslugi/materialy", group: "Информация" },
      { title: "Отчет по оказанным государственным услугам", path: "/gosuslugi/otchet", group: "Отчетность" },
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

export default function Header() {
  const theme = useTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [openSubmenus, setOpenSubmenus] = useState({});

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = (event, title) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(title);
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setActiveMenu(null);
    setOpenSubmenus({});
  };

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  const isActive = (path) => {
    if (!path) return false;
    return pathname === path || (path !== '/' && pathname.startsWith(path));
  };

  const toggleSubmenu = (path) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const NavButton = ({ item }) => {
    const active = isActive(item.path);

    return (
      <Button
        component={Link}
        href={item.path}
        endIcon={item.submenu ? <KeyboardArrowDown /> : null}
        onMouseEnter={item.submenu ? (e) => openMenu(e, item.title) : undefined}
        sx={{
          color: active ? 'primary.main' : 'text.primary',
          fontWeight: active ? 600 : 500,
          textTransform: 'none',
          fontSize: '1rem',
          px: 2,
          py: 1,
          borderRadius: 1,
          cursor: 'pointer',
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

  const DesktopMenuItem = ({ items, depth = 0 }) => {
    const groups = items.reduce((acc, item) => {
      const group = item.group || 'Без группы';
      if (!acc[group]) acc[group] = [];
      acc[group].push(item);
      return acc;
    }, {});

    return (
      <>
        {Object.entries(groups).map(([group, groupItems]) => (
          <React.Fragment key={group}>
            {depth === 0 && (
              <StyledListHeader>{group}</StyledListHeader>
            )}
            {groupItems.map((item) => (
              <Box key={item.path}>
                <MenuItem
                  component={item.submenu ? 'div' : Link}
                  href={item.submenu ? undefined : item.path}
                  onClick={(e) => {
                    if (item.submenu) e.preventDefault();
                    else closeMenu();
                  }}
                  onMouseEnter={() => item.submenu && toggleSubmenu(item.path)}
                  sx={{
                    pl: 3 + depth * 2,
                    pr: 2,
                    py: 1.2,
                    fontSize: '0.95rem',
                    '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.05) },
                  }}
                >
                  <ListItemText primary={item.title} />
                  {item.submenu && (
                    <KeyboardArrowDown
                      sx={{
                        ml: 'auto',
                        transform: openSubmenus[item.path] ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s',
                        fontSize: 18,
                      }}
                    />
                  )}
                </MenuItem>

                {item.submenu && openSubmenus[item.path] && (
                  <Box sx={{ pl: 2, bgcolor: 'grey.50' }}>
                    <DesktopMenuItem items={item.submenu} depth={depth + 1} />
                  </Box>
                )}
              </Box>
            ))}
          </React.Fragment>
        ))}
      </>
    );
  };

  const MobileMenuItem = ({ item, depth = 0 }) => {
    const [open, setOpen] = useState(false);
    const active = isActive(item.path);

    return (
      <Box>
        <ListItemButton
          component={Link}
          href={item.path}
          onClick={(e) => {
            if (item.submenu) {
              e.preventDefault();
              setOpen(!open);
            } else {
              toggle1Drawer(false)();
            }
          }}
          selected={active && !open}
          sx={{
            pl: 2 + depth * 2,
            pr: 2,
            py: 1.5,
            borderRadius: 2,
            mb: 0.5,
            '&.Mui-selected': {
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              color: 'primary.main',
              fontWeight: 600,
            },
          }}
        >
          <ListItemText primary={item.title} />
          {item.submenu && (
            <KeyboardArrowDown sx={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
          )}
        </ListItemButton>

        {item.submenu && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ bgcolor: alpha(theme.palette.grey[500], 0.1), borderRadius: 2, mb: 1 }}>
              {item.submenu.map(sub => (
                <MobileMenuItem key={sub.path} item={sub} depth={depth + 1} />
              ))}
            </List>
          </Collapse>
        )}
      </Box>
    );
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={sticky ? 4 : 0}
        sx={{
          bgcolor: sticky ? 'background.paper' : 'transparent',
          transition: 'all 0.3s ease',
          py: sticky ? 0.5 : 1.5,
          boxShadow: sticky ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 80 } }}>
            <Link href="/" passHref>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image
                  src="/images/logo/logo.png"
                  alt="ГКБ №7"
                  width={130}
                  height={80}
                  priority
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </Link>

            <Box
              sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 1 }}
              onMouseLeave={closeMenu}
            >
              {menuData.map((item) => (
                <Box
                  key={item.title}
                  onMouseEnter={item.submenu ? (e) => openMenu(e, item.title) : undefined}
                >
                  <NavButton item={item} />
                  {item.submenu && (
                    <Menu
                      anchorEl={anchorEl}
                      open={activeMenu === item.title}
                      onClose={closeMenu}
                      disableAutoFocusItem
                      slotProps={{
                        paper: {
                          sx: {
                            mt: 1,
                            minWidth: 380,
                            maxHeight: '75vh',
                            overflowY: 'auto',
                            borderRadius: 2,
                            boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                            border: '1px solid',
                            borderColor: 'grey.200',
                          },
                        },
                        list: { sx: { py: 0 } },
                      }}
                    >
                      <DesktopMenuItem items={item.submenu} />
                    </Menu>
                  )}
                </Box>
              ))}
            </Box>

            <IconButton
              onClick={toggleDrawer(true)}
              sx={{ display: { lg: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { width: '85vw', maxWidth: 320, pt: 10, px: 2 } }}
      >
        <List>
          {menuData.map((item) => (
            <MobileMenuItem key={item.title} item={item} />
          ))}
        </List>
      </Drawer>
    </>
  );
}