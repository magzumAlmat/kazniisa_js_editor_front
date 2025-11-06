'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { usePathname } from 'next/navigation';

const breadcrumbNameMap = {
  'o-klinike': 'О клинике',
  'struktura-kliniki': 'Структура клиники',
  'novosti': 'Новости',
  'pacientam': 'Пациентам',
  'specialisty': 'Специалисты',
  'uslugi': 'Услуги',
  'otdeleniya': 'Отделения',
  'kontakty': 'Контакты',
  'zapis-na-priem': 'Запись на прием',
};

export default function BasicBreadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Главная
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const displayName = breadcrumbNameMap[value] || value;

        return last ? (
          <Typography color="text.primary" key={to}>
            {displayName}
          </Typography>
        ) : (
          <Link underline="hover" color="inherit" href={to} key={to}>
            {displayName}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
