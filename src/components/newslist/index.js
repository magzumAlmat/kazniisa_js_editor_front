
'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPublicDocumentsAction } from '@/store/slices/authSlice';
import Link from 'next/link';

// MUI Imports
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';

// Font Imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// --- HELPER FUNCTIONS ---

const getFirstImage = (documentContent) => {
  try {
    const content = typeof documentContent === 'string'
      ? JSON.parse(documentContent)
      : documentContent;

    if (Array.isArray(content)) {
      for (const node of content) {
        if (node.type === 'image' && node.url) {
          return node.url;
        }
        if (Array.isArray(node.children)) {
            for (const child of node.children) {
                if (child.type === 'image' && child.url) {
                    return child.url;
                }
            }
        }
      }
    }
  } catch (e) {
    console.error("Error parsing document content for image:", e);
  }
  return null;
};

const getSnippet = (documentContent, maxLength = 200) => {
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
        console.error("Error parsing document content for snippet:", e);
    }
    return 'No preview available.';
  };

// --- STYLED COMPONENTS ---



// --- NEWS CARD COMPONENT ---

function NewsCard({ news }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const imageUrl = getFirstImage(news.document_content);
  const snippet = getSnippet(news.document_content);
  const creationDate = new Date(news.createdAt).toLocaleDateString();

  return (
    <Card sx={{ maxWidth: 345, mb: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {news.document_name ? news.document_name[0] : 'N'}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={news.document_name}
        subheader={creationDate}
      />
      {imageUrl && (
        <CardMedia
            component="img"
            height="194"
            image={imageUrl}
            alt={`Image for ${news.document_name}`}
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {snippet}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Link href={`/news/${news.id}`} passHref>
            <Button size="small">Читать далее</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

// --- MAIN NEWS LIST COMPONENT ---

export default function NewsList() {
  const dispatch = useDispatch();
  const allNews = useSelector(state => state.auth.allDocuments);

  useEffect(() => {
    dispatch(getAllPublicDocumentsAction());
  }, [dispatch]);

  return (
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {allNews && allNews.length > 0 ? (
        allNews.map(news => (
          <NewsCard key={news.id} news={news} />
        ))
      ) : (
        <Typography>No news articles found.</Typography>
      )}
    </div>
  );
}
