'use client'
import React from 'react';

const renderBlock = (block) => {
  switch (block.type) {
    case 'header':
      const Tag = `h${block.data.level}`;
      return <Tag dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    case 'paragraph':
      return <p dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    default:
      return <p>Unsupported 1block type: {block.type}</p>;
  }
};

export default function NewsViewer({ newsArticle }) {
  // Ensure document_content is parsed if it's a string
  const content = typeof newsArticle.document_content === 'string' 
    ? JSON.parse(newsArticle.document_content) 
    : newsArticle.document_content;

  return (
    <div className="container">
      {content && content.blocks && content.blocks.map(block => (
        <div key={block.id}>
          {renderBlock(block)}
        </div>
      ))}
    </div>
  );
}
