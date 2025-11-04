'use client';
import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem,
  ListItemIcon, ListItemText, Divider, Box, Grid, Card, CardContent,
  CardMedia, Button, Chip, TextField, InputAdornment
} from '@mui/material';
import {
  Menu as MenuIcon, Home, Info, People, MedicalServices, Phone,
  VideoLibrary, AttachFile, Search
} from '@mui/icons-material';




// === ДАННЫЕ ИЗ САЙТА ГКБ №7 ===
const menuItems = [
  { text: "Главная", icon: <Home />, link: "/" },
  { text: "О клинике", icon: <Info />, link: "/o-klinike" },
  { text: "Администрация", icon: <People />, link: "/admin" },
  { text: "Услуги", icon: <MedicalServices />, link: "/uslugi" },
  { text: "Видеоблог", icon: <VideoLibrary />, link: "/videoblog" },
  { text: "Контакты", icon: <Phone />, link: "/kontakty" },
];

const doctors = [
  { name: "Рамазанов М.Е.", role: "Директор", phone: "270-86-00", img: "https://gkb7.kz/images/admin/ramazanov.jpg" },
  { name: "Байжигитов К.", role: "Зав. хирургией", phone: "270-86-02", img: "https://gkb7.kz/images/admin/bayzhigitov.jpg" },
  { name: "Шерияздан Ж.", role: "Зам. директора", phone: "270-86-22", img: "https://gkb7.kz/images/admin/sheriyazdan.jpg" },
];

const services = [
  { title: "Приёмный покой", desc: "24/7, 3 реанимобиля, 8 коек ШОК", phone: "вн. 1030" },
  { title: "Лапароскопия", desc: "Karl Storz, резекция печени", ops: "280 оп/год" },
  { title: "Урология", desc: "ТУР, нефрэктомия, Bricker", ops: "180 оп/год" },
];

const pdfs = [
  { name: "Госпрограмма 2021–2025", url: "https://gkb7.kz/docs/memlekettik_bagdarlama_0.pdf" },
  { name: "Тендер №35 (12.8 млн тг)", url: "https://gkb7.kz/docs/tender_35.pdf" },
];

export default function Main() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      {/* === ВЕРХНЯЯ ПАНЕЛЬ === */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => setDrawerOpen(!drawerOpen)} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, ml: 2 }}>
            ГКБ №7 Алматы
          </Typography>
          <TextField
            size="small"
            placeholder="Поиск по сайту..."
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
            }}
            sx={{ bgcolor: 'white', borderRadius: 1, width: { xs: 150, md: 300 } }}
          />
        </Toolbar>
      </AppBar>

      {/* === БОКОВОЕ МЕНЮ === */}
      <Drawer
        variant="permanent"
        open={drawerOpen}
        sx={{
          width: drawerOpen ? 260 : 65,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerOpen ? 260 : 65,
            boxSizing: 'border-box',
            transition: 'width 0.3s',
            overflowX: 'hidden',
          },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component="a"
              href={item.link}
              sx={{ pl: drawerOpen ? 2 : 1.5 }}
            >
              <ListItemIcon sx={{ minWidth: drawerOpen ? 40 : 56 }}>
                {item.icon}
              </ListItemIcon>
              {drawerOpen && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 1 }} />

        <List>
          {pdfs.map((pdf) => (
            <ListItem
              button
              key={pdf.name}
              component="a"
              href={pdf.url}
              target="_blank"
              sx={{ pl: drawerOpen ? 2 : 1.5 }}
            >
              <ListItemIcon sx={{ minWidth: drawerOpen ? 40 : 56 }}>
                <AttachFile />
              </ListItemIcon>
              {drawerOpen && <ListItemText primary={pdf.name} />}
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* === ОСНОВНОЙ КОНТЕНТ === */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {/* === АДРЕС === */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom color="primary">
              Городская клиническая больница №7
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              г. Алматы, мкр. Калкаман-2, 20 (050006)
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
              <Chip icon={<Phone />} label="8 (727) 341-06-66" color="primary" />
              <Chip label="info@gkb7.kz" />
              <Chip label="С 1991 года" />
            </Box>
          </CardContent>
        </Card>

        {/* === УСЛУГИ === */}
        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          Услуги
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {services.map((service, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card elevation={2}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <MedicalServices color="primary" />
                    <Typography variant="subtitle1" sx={{ ml: 1, fontWeight: 'bold' }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {service.desc}
                  </Typography>
                  {service.phone && <Chip label={service.phone} size="small" color="info" />}
                  {service.ops && <Chip label={service.ops} size="small" color="success" />}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* === ВРАЧИ === */}
        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          Администрация
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {doctors.map((doc, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  image={doc.img}
                  alt={doc.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {doc.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doc.role}
                  </Typography>
                  <Button
                    startIcon={<Phone />}
                    size="small"
                    sx={{ mt: 1, textTransform: 'none' }}
                  >
                    {doc.phone}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* === ДОКУМЕНТЫ === */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Официальные документы
            </Typography>
            {pdfs.map((pdf) => (
              <Button
                key={pdf.name}
                variant="outlined"
                startIcon={<AttachFile />}
                href={pdf.url}
                target="_blank"
                sx={{ mr: 1, mb: 1 }}
              >
                {pdf.name}
              </Button>
            ))}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}