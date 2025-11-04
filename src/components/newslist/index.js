'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNewsAction, getAllPublicDocumentsAction } from '@/store/slices/authSlice';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import Link from 'next/link';

export default function NewsList() {
  const dispatch = useDispatch();
  const allNews = useSelector(state => state.auth.allDocuments);

  useEffect(() => {
    dispatch(getAllPublicDocumentsAction());
  }, [dispatch]);

  return (
    <div className="container">
      {allNews && allNews.map(news => (
        <Card key={news.id} className="mb-3">
          <CardBody>
            <CardTitle tag="h5">{news.document_name}</CardTitle>
            <Link href={`/news/${news.id}`} passHref>
              <Button>Читать далее</Button>
            </Link>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
