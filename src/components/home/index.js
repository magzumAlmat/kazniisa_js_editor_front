'use client';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {
  Menu as MenuIcon, Home, Info, People, MedicalServices, Phone,
  VideoLibrary, AttachFile, Search
} from '@mui/icons-material';

import Brands from '../Brands';
import Hero from '../Hero';
import About from '../About';
import FeaturesTab from '../FeaturesTab';
import FunFact from '../FunFact';
import Integration from '../Integration';
import CTA from '../CTA';
import FAQ from '../FAQ';
import Testimonial from '../Testimonial';
import Pricing from '../Pricing';
import Contact from '../Contact';
import Blog from '../Blog';

import NewsBlog from '../newsBlog';
// // === ДАННЫЕ ИЗ САЙТА ГКБ №7 ===
// const menuItems = [
//   { text: "Главная", icon: <Home />, link: "/" },
//   { text: "О клинике", icon: <Info />, link: "/o-klinike" },
//   { text: "Администрация", icon: <People />, link: "/admin" },
//   { text: "Услуги", icon: <MedicalServices />, link: "/uslugi" },
//   { text: "Видеоблог", icon: <VideoLibrary />, link: "/videoblog" },
//   { text: "Контакты", icon: <Phone />, link: "/kontakty" },
// ];

// const doctors = [
//   { name: "Рамазанов М.Е.", role: "Директор", phone: "270-86-00", img: "https://gkb7.kz/images/admin/ramazanov.jpg" },
//   { name: "Байжигитов К.", role: "Зав. хирургией", phone: "270-86-02", img: "https://gkb7.kz/images/admin/bayzhigitov.jpg" },
//   { name: "Шерияздан Ж.", role: "Зам. директора", phone: "270-86-22", img: "https://gkb7.kz/images/admin/sheriyazdan.jpg" },
// ];

// const services = [
//   { title: "Приёмный покой", desc: "24/7, 3 реанимобиля, 8 коек ШОК", phone: "вн. 1030" },
//   { title: "Лапароскопия", desc: "Karl Storz, резекция печени", ops: "280 оп/год" },
//   { title: "Урология", desc: "ТУР, нефрэктомия, Bricker", ops: "180 оп/год" },
// ];

// const pdfs = [
//   { name: "Госпрограмма 2021–2025", url: "https://gkb7.kz/docs/memlekettik_bagdarlama_0.pdf" },
//   { name: "Тендер №35 (12.8 млн тг)", url: "https://gkb7.kz/docs/tender_35.pdf" },
// ];

import Header from '../Header';
import Map from '../map';
export default function Main() {


  return (
    <div>
  
      
        
      <Hero />
      <NewsBlog />
      <Map/>

      {/* <Footer />   */}
      {/* <Brands /> */}
      {/* <Feature /> */}
      {/* <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog /> */}
</div>

  );
}