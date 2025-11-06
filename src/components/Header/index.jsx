// src/components/Header/index.tsx
'use client';

import { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Container, IconButton, Drawer, List, ListItemButton,
  ListItemText, Box, Button, Menu, MenuItem, useTheme, alpha, Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuData = [
  { title: "Главная", path: "/" },
  {
    title: "О клинике",
    path: "/o-klinike",
    submenu: [
       { title: "О клинике", path: "/o-klinike/" },
      {
        title: "Поликлиника",
        path: "/o-klinike/poliklinika",
        submenu: [
          {
            title: "Отделения",
            path: "/o-klinike/poliklinika/otdeleniya",
            submenu: [
              { title: "Отделение специализированной помощи", path: "/o-klinike/poliklinika/otdeleniya/specializirovannaya-pomosh" },
              { title: "Отделение педиатрии", path: "/o-klinike/poliklinika/otdeleniya/pediatriya" },
              { title: "Отделение участковой службы", path: "/o-klinike/poliklinika/otdeleniya/uchastkovaya-sluzhba" },
              { title: "Женская консультация", path: "/o-klinike/poliklinika/otdeleniya/zhenskaya-konsultaciya" },
              { title: "Отделение профилактики и социально-психологической помощи", path: "/o-klinike/poliklinika/otdeleniya/profilaktika-i-psihologicheskaya-pomosh" },
            ]
          }
        ]
      },
      
      { title: "Блог директора", path: "/o-klinike/blog-direktora" },
      { title: "Администрация", path: "/o-klinike/administraciya" },
      { title: "Структура клиники", path: "/o-klinike/struktura-kliniki" },
      { title: "Вакансии", path: "/o-klinike/vakansii" },
      { title: "Новости", path: "/o-klinike/novosti" },
      { title: "Служба поддержки пациентов", path: "/o-klinike/sluzhba-podderzhki" },
      { title: "Нормативно-правовая база", path: "/o-klinike/normativnaya-baza" },
      { title: "Отчет о доходах и расходах", path: "/o-klinike/otchet-dohody-rashody" },
      { title: "Финансовый отчет", path: "/o-klinike/finansovyy-otchet" },
      { title: "Лицензии", path: "/o-klinike/licenzii" },
      { title: "Call-центр", path: "/o-klinike/call-centr" },
      { title: "Противодействие коррупции", path: "/o-klinike/protivodeystvie-korrupcii" },
      { title: "График приема граждан", path: "/o-klinike/grafik-priema" },
      { title: "График работы отделения КРО", path: "/o-klinike/grafik-kro" },
      { title: "Сертификат об аккредитации ГКБ №7", path: "/o-klinike/sertifikat-akkreditacii" },
      { title: "График приема передач и бесед лечащих врачей", path: "/o-klinike/grafik-peredach" },
      { title: "Стратегический план", path: "/o-klinike/strategicheskiy-plan" },
    ]
  },
 {
  title: "Медицинские услуги",
  path: "/uslugi",
  submenu: [
    {
      title: "Наши направления",
      path: "/uslugi/napravleniya"
      // ← убрано submenu → нет выпадающего списка
    },
    {
      title: "Стационарные услуги",
      path: "/uslugi/stacionar",
      submenu: [
        { title: "Приемный покой", path: "/uslugi/stacionar/priemnyy-pokoy" },
        {
          title: "Отдел нейрохирургического профиля",
          path: "/uslugi/stacionar/neyrohirurgiya",
          submenu: [
            { title: "Нейрохирургия №1", path: "/uslugi/stacionar/neyrohirurgiya/1" },
            { title: "Нейрохирургия №2", path: "/uslugi/stacionar/neyrohirurgiya/2" },
            { title: "Нейрохирургия №4", path: "/uslugi/stacionar/neyrohirurgiya/4" },
            { title: "Нейрохирургия №5", path: "/uslugi/stacionar/neyrohirurgiya/5" },
          ]
        },
        {
          title: "Отдел терапевтического профиля",
          path: "/uslugi/stacionar/terapiya",
          submenu: [
            { title: "Нейроинсультное отделение №1", path: "/uslugi/stacionar/terapiya/neyroinsult-1" },
            { title: "Нейроинсультное отделение №2", path: "/uslugi/stacionar/terapiya/neyroinsult-2" },
            { title: "Терапия", path: "/uslugi/stacionar/terapiya/terapiya" },
            { title: "Нефрология", path: "/uslugi/stacionar/terapiya/nefrologiya" },
            { title: "Неврология", path: "/uslugi/stacionar/terapiya/nevrologiya" },
            { title: "Гематология", path: "/uslugi/stacionar/terapiya/gematologiya" },
            { title: "Эндокринология", path: "/uslugi/stacionar/terapiya/endokrinologiya" },
            { title: "Отделение хронического гемодиализа", path: "/uslugi/stacionar/terapiya/gemodializ" },
            { title: "Отделение хозрасчетной терапии", path: "/uslugi/stacionar/terapiya/vozrastnaya-terapiya" },
            { title: "Кардиологическое отделение", path: "/uslugi/stacionar/terapiya/kardiologiya" },
          ]
        },
        {
          title: "Отдел хирургического профиля",
          path: "/uslugi/stacionar/hirurgiya",
          submenu: [
            { title: "Травматология и политравма", path: "/uslugi/stacionar/hirurgiya/travmatologiya" },
            { title: "Отделение урологии", path: "/uslugi/stacionar/hirurgiya/urologiya" },
            { title: "Отделение гинекологии №1", path: "/uslugi/stacionar/hirurgiya/ginekologiya-1" },
            { title: "Отделение гинекологии №2", path: "/uslugi/stacionar/hirurgiya/ginekologiya-2" },
            { title: "Отделение хирургической инфекции", path: "/uslugi/stacionar/hirurgiya/hirurgicheskaya-infekciya" },
            { title: "Отделение экстренной хирургии", path: "/uslugi/stacionar/hirurgiya/ekstrennaya-hirurgiya" },
            { title: "Отделение плановой хирургии с центром гепатопанкреатобилиарной хирургии", path: "/uslugi/stacionar/hirurgiya/planovaya-hirurgiya" },
            { title: "Операционный блок", path: "/uslugi/stacionar/hirurgiya/operacionnyy-blok" },
            { title: "Анестезиология и реанимация", path: "/uslugi/stacionar/hirurgiya/anesteziologiya" },
            { title: "Отделение ортохирургии", path: "/uslugi/stacionar/hirurgiya/ortohirurgiya" },
            { title: "Отделение кардиохирургии и аритмологии", path: "/uslugi/stacionar/hirurgiya/kardiohirurgiya" },
            { title: "Отделение колопроктологии", path: "/uslugi/stacionar/hirurgiya/koloproktologiya" },
          ]
        },
        { title: "Отделение нейрореабилитации", path: "/uslugi/stacionar/neyroreabilitaciya" },
      ]
    },
    {
      title: "Обязательное социальное медицинское страхование",
      path: "/"
      // ← убрано submenu → нет выпадающего списка
    },
    {
      title: "Операции",
      path: "/uslugi/operacii",
      submenu: [
        { title: "Урологические операции", path: "/uslugi/operacii/urologicheskie" },
        { title: "Нейрохирургические операции", path: "/uslugi/operacii/neyrohirurgicheskie" },
        
        { title: "Хирургические операции", path: "/uslugi/operacii/hirurgicheskie" },
        { title: "Гинекологические операции", path: "/uslugi/operacii/ginekologicheskie" },
        { title: "Отделение Нейроонкологии", path: "/uslugi/operacii/neiroonkologiya" },
      ]
    },
    {
      title: "Физиотерапевтические услуги",
      path: "/uslugi/fizioterapiya",
      submenu: [
        { title: "Дарсонвализация", path: "/uslugi/fizioterapiya/darsonvalizaciya" },
        { title: "Магнитотерапия", path: "/uslugi/fizioterapiya/magnitoterapiya" },
        { title: "Ультрафиолетовое излучение (УФО)", path: "/uslugi/fizioterapiya/ufo" },
        { title: "Электрофизиотерапия", path: "/uslugi/fizioterapiya/elektrofizioterapiya" },
        { title: "Парафиновая аппликация", path: "/uslugi/fizioterapiya/parafinovaya-applikaciya" },
        { title: "Грязевые процедуры", path: "/uslugi/fizioterapiya/gryazevye-procedury" },
        { title: "Дуоденальное зондирование", path: "/uslugi/fizioterapiya/duodenalnoye-zondirovaniye" },
        { title: "Кедровая бочка", path: "/uslugi/fizioterapiya/kedrovaya-bochka" },
        { title: "Подводное вытяжение позвоночника ЛИВ", path: "/uslugi/fizioterapiya/podvodnoye-vytyazheniye" },
        { title: "Гидромассажные ванны", path: "/uslugi/fizioterapiya/gidromassazhnye-vanny" },
        { title: "Электросон", path: "/uslugi/fizioterapiya/elektroson" },
      ]
    },
    {
      title: "Клинико-диагностическая лаборатория",
      path: "/uslugi/laboratoriya",
      submenu: [
        { title: "Лучевая диагностика (КТ, МРТ, УЗИ)", path: "/uslugi/laboratoriya/luchevaya-diagnostika" },
        { title: "Функциональная диагностика", path: "/uslugi/laboratoriya/funkcionalnaya-diagnostika" },
      ]
    },
    { title: "Стоматологические услуги", path: "/uslugi/stomatologiya" },
    { title: "Прейскурант цен", path: "/uslugi/preyskurant" },
    {
      title: "Диагностика",
      path: "/uslugi/diagnostika",
      submenu: [
        { title: "Лучевая диагностика (КТ, МРТ, УЗИ)", path: "/uslugi/diagnostika/luchevaya" },
        { title: "Функциональная диагностика", path: "/uslugi/diagnostika/funkcionalnaya" },
      ]
    },
    { title: "КРО", path: "/uslugi/kro" },
  ]
},



{
    title: "Государственные услуги",
    path: "/gosuslugi",
    submenu: [
      { title: "Реестр государственных услуг", path: "/gosuslugi/reestr" },
      { title: "Нормативно-правовые акты", path: "/gosuslugi/normativy" },
      { title: "Порядок обжалования", path: "/gosuslugi/obzhalovanie" },
      { title: "Информационные материалы", path: "/gosuslugi/materialy" },
      { title: "Отчет по оказанным государственным услугам", path: "/gosuslugi/otchet" },
    ]
  },
  {
    title: "Корп. управ",
    path: "/korp-uprav",
    submenu: [
      { title: "Наблюдательный совет", path: "/korp-uprav/nablyudatelnyy-sovet" },
      { title: "Корпоративные документы", path: "/korp-uprav/dokumenty" },
    ]
  },
  {
    title: "Государственные символы",
    path: "/gos-simvoly",
    submenu: [
      { title: "Государственный Флаг", path: "/gos-simvoly/flag" },
      { title: "Государственный Герб", path: "/gos-simvoly/gerb" },
      { title: "Государственный Гимн", path: "/gos-simvoly/gimn" },
    ]
  },
  {
    title: "Закупки",
    path: "/zakupki",
    submenu: [
      { title: "Годовой план Государственных закупок", path: "/zakupki/godovoy-plan" },
      { title: "Объявления", path: "/zakupki/obyavleniya" },
      { title: "Протоколы", path: "/zakupki/protokoly" },
    ]
  },
  {
    title: "Гостевая",
    path: "/gostevaya",
    submenu: [
      { title: "Вопрос-ответ", path: "/gostevaya/vopros-otvet" },
      { title: "Благодарности", path: "/gostevaya/blagodarnosti" },
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

  const DesktopMenuItem = ({ item, depth = 0 }) => {
    const active = isActive(item.path);
    const isOpen = openSubmenus[item.path];

    return (
      <Box>
        <MenuItem
          component={item.submenu ? 'div' : Link}
          href={item.submenu ? undefined : item.path}
          onClick={(e) => {
            if (item.submenu) {
              e.preventDefault();
              toggleSubmenu(item.path);
            } else {
              closeMenu();
            }
          }}
          onMouseEnter={() => item.submenu && toggleSubmenu(item.path)}
          selected={active && !isOpen}
          sx={{
            pl: 3 + depth * 2,
            pr: 2,
            py: 1.5,
            fontSize: '0.95rem',
            '&.Mui-selected': {
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              fontWeight: 600,
            },
          }}
        >
          <ListItemText primary={item.title} />
          {item.submenu && (
            <KeyboardArrowDown
              sx={{
                ml: 'auto',
                transform: isOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s',
                fontSize: 18
              }}
            />
          )}
        </MenuItem>

        {item.submenu && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box sx={{ bgcolor: depth === 0 ? 'grey.50' : 'grey.100' }}>
              {item.submenu.map(sub => (
                <DesktopMenuItem key={sub.path} item={sub} depth={depth + 1} />
              ))}
            </Box>
          </Collapse>
        )}
      </Box>
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
              toggleDrawer(false)();
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
                      PaperProps={{
                        sx: {
                          mt: 1,
                          minWidth: 340,
                          maxHeight: '70vh',
                          overflowY: 'auto',
                          borderRadius: 2,
                          boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                          border: '1px solid',
                          borderColor: 'grey.200',
                        },
                      }}
                    >
                      {item.submenu.map(sub => (
                        <DesktopMenuItem key={sub.path} item={sub} />
                      ))}
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