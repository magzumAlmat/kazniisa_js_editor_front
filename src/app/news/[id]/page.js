'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDocumentByIdAction, getNewsByIdAction } from '@/store/slices/authSlice';
import NewsViewer from '@/components/newsviewer';
import Header from "@/components/header";

export default function NewsArticlePage({ params }) {
  const dispatch = useDispatch();
  const { id } = params;

  useEffect(() => {
    if (id) {
      dispatch(getDocumentByIdAction(id));
    }
  }, [dispatch, id]);

  const newsArticle = useSelector(state => state.auth.currentDocument);

  return (
    <>
        <Header loggedIn={false}/>
        <br/>
        {newsArticle ? <NewsViewer newsArticle={newsArticle} /> : <p>Загрузка новости...</p>}
    </>
  );
}
