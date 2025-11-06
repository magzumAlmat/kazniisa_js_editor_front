// components/NewsBlog.js
'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPublicDocumentsAction } from '../../store/slices/authSlice';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { AccessTime, ChevronRight } from '@mui/icons-material';

// --- ПОМОЩНИКИ ---
const getSnippet = (documentContent, maxLength = 180) => {
  try {
    const content = typeof documentContent === 'string' ? JSON.parse(documentContent) : documentContent;
    if (Array.isArray(content)) {
      for (const node of content) {
        if (node.type === 'paragraph') {
          const text = node.children.map(child => child.text).join('');
          if (text) {
            return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
          }
        }
      }
    }
  } catch (e) {
    console.error("Error parsing snippet:", e);
  }
  return 'Нет краткого описания.';
};

export default function NewsBlog() {
  const dispatch = useDispatch();
  const allNews = useSelector((state) => state.auth.allDocuments);

  useEffect(() => {
    dispatch(getAllPublicDocumentsAction());
  }, [dispatch]);

  if (!allNews || allNews.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h6" color="text.secondary" align="center">
          Новостей пока нет.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>
        Новости
      </Typography>

      <List sx={{ bgcolor: 'background.paper', borderRadius: 2, overflow: 'hidden' }}>
        {allNews.map((news, index) => {
          const date = new Date(news.createdAt).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          });
          const snippet = getSnippet(news.document_content);

          return (
            <Box key={news.id}>
              <ListItem
                disablePadding
                sx={{
                  '&:hover': { bgcolor: 'action.hover' },
                  transition: 'background 0.2s ease',
                }}
              >
                <ListItemButton
                  component={Link}
                  href={`/news/${news.id}`}
                  sx={{ py: 3, px: 3 }}
                >
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {news.document_name || 'Без заголовка'}
                      </Typography>
                    }
                    secondaryTypographyProps={{ component: 'div' }}
                    secondary={
                      <Box>
                        {/* ИСПРАВЛЕНО: вместо <p> используем Box + Typography */}
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            lineHeight: 1.5,
                            mb: 1.5,
                          }}
                        >
                          {snippet}
                        </Typography>

                        <Stack direction="row" spacing={2} alignItems="center">
                          <Chip
                            icon={<AccessTime fontSize="small" />}
                            label={date}
                            size="small"
                            color="primary"
                            variant="outlined"
                            sx={{ height: 26 }}
                          />
                          <Box sx={{ flexGrow: 1 }} />
                          <Typography
                            variant="body2"
                            color="primary"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              fontWeight: 500,
                            }}
                          >
                            Читать далее
                            <ChevronRight fontSize="small" sx={{ ml: 0.5 }} />
                          </Typography>
                        </Stack>
                      </Box>
                    }
                  />
                </ListItemButton>
              </ListItem>
              {index < allNews.length - 1 && <Divider />}
            </Box>
          );
        })}
      </List>
    </Container>
  );
}