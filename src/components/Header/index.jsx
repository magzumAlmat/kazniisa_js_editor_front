// src/components/Header/index.tsx
'use client';

import { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Container, IconButton, Drawer, List, ListItemButton,
  ListItemText, Box, Button, Menu, MenuItem, Stack, useTheme, alpha
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
      { title: "История", path: "/o-klinike/istoriya" },
      { title: "Руководство", path: "/o-klinike/rukovodstvo" },
      { title: "Структура", path: "/o-klinike/struktura" },
      { title: "Лицензии", path: "/o-klinike/licenzii" },
      { title: "Вакансии", path: "/o-klinike/vakansii" },
    ]
  },
  {
    title: "Пациентам",
    path: "/pacientam",
    submenu: [
      { title: "Правила посещения", path: "/pacientam/pravila" },
      { title: "Платные услуги", path: "/pacientam/platnye-uslugi" },
      { title: "Запись на приём", path: "/zapis-na-priem" },
      { title: "Онлайн-консультация", path: "/pacientam/konsultaciya" },
    ]
  },
  {
    title: "Отделения",
    path: "/otdeleniya",
    submenu: [
      { title: "Приёмный покой", path: "/otdeleniya/priemnyy-pokoy" },
      { title: "Хирургия", path: "/otdeleniya/hirurgiya" },
      { title: "Урология", path: "/otdeleniya/urologiya" },
      { title: "Травматология", path: "/otdeleniya/travmatologiya" },
      { title: "Реанимация", path: "/otdeleniya/reanimaciya" },
    ]
  },
  { title: "Услуги", path: "/uslugi" },
  { title: "Специалисты", path: "/specialisty" },
  { title: "Новости", path: "/novosti" },
  { title: "Контакты", path: "/kontakty" },
];

export default function Header() {
  const theme = useTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuOpen = (event, title) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(title);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  const isActive = (path) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  const NavButton = ({ item }) => {
    const active = isActive(item.path);
    return (
      <Button
        component={Link}
        href={item.path}
        sx={{
          color: active ? 'primary.main' : 'text.primary',
          fontWeight: active ? 600 : 500,
          textTransform: 'none',
          fontSize: '1rem',
          px: 2,
          py: 1,
          borderRadius: 1,
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
            {/* Логотип */}
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

            {/* ДЕСКТОП */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 1 }}>
              {menuData.map((item) => (
                <Box key={item.title} sx={{ position: 'relative' }}>
                  {item.submenu ? (
                    <>
                      <Button
                        endIcon={<KeyboardArrowDown />}
                        onClick={(e) => handleMenuOpen(e, item.title)}
                        sx={{
                          color: isActive(item.path) ? 'primary.main' : 'text.primary',
                          fontWeight: isActive(item.path) ? 600 : 500,
                          textTransform: 'none',
                          fontSize: '1rem',
                          px: 2,
                          py: 1,
                          borderRadius: 1,
                          '&:hover': {
                            bgcolor: alpha(theme.palette.primary.main, 0.08),
                            color: 'primary.main',
                          },
                        }}
                      >
                        {item.title}
                      </Button>

                      <Menu
                        anchorEl={anchorEl}
                        open={activeMenu === item.title}
                        onClose={handleMenuClose}
                        PaperProps={{
                          sx: {
                            mt: 1,
                            minWidth: 220,
                            borderRadius: 2,
                            boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                            border: '1px solid',
                            borderColor: 'grey.200',
                          },
                        }}
                      >
                        {item.submenu.map((sub) => {
                          const subActive = isActive(sub.path);
                          return (
                            <MenuItem
                              key={sub.path}
                              component={Link}
                              href={sub.path}
                              onClick={handleMenuClose}
                              selected={subActive}
                              sx={{
                                fontSize: '0.95rem',
                                py: 1.5,
                                px: 3,
                                '&.Mui-selected': {
                                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                                  fontWeight: 600,
                                },
                              }}
                            >
                              {sub.title}
                            </MenuItem>
                          );
                        })}
                      </Menu>
                    </>
                  ) : (
                    <NavButton item={item} />
                  )}
                </Box>
              ))}
            </Box>

            {/* МОБИЛЬНАЯ */}
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{ display: { lg: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* МОБИЛЬНОЕ МЕНЮ */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { width: 300, pt: 10, px: 2 } }}
      >
        <List>
          {menuData.map((item) => {
            const active = isActive(item.path);
            return (
              <Box key={item.title}>
                <ListItemButton
                  component={Link}
                  href={item.path}
                  selected={active}
                  onClick={toggleDrawer(false)}
                  sx={{
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
                  {item.submenu && <KeyboardArrowDown />}
                </ListItemButton>

                {item.submenu && (
                  <List sx={{ pl: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
                    {item.submenu.map((sub) => (
                      <ListItemButton
                        key={sub.path}
                        component={Link}
                        href={sub.path}
                        onClick={toggleDrawer(false)}
                        sx={{ py: 0.75 }}
                      >
                        <ListItemText primary={sub.title} />
                      </ListItemButton>
                    ))}
                  </List>
                )}
              </Box>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}