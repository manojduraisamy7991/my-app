import React, { useState, useEffect } from 'react';

const PhotoGallery = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch initial data
    fetch(`https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [page]);

  return (
    <div>
    <button onClick={()=>{
        setPage(1)
    }}>add</button>
      {articles.map(article => (
        <div key={article.id}>{article.title}</div>
      ))}
      {/* Add a loading indicator if needed */}
    </div>
  );
};

export default PhotoGallery;
