// components/TwoGISMap.js
import React from "react";

const TwoGISMap = () => {
  const isDark =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");

  return (
    <>
      <style jsx>{`
        .gis-wrapper {
          margin: 2rem 0;
          font-family: system-ui, -apple-system, sans-serif;
          max-width: 100%;
          width: 100%;
          display: block;
        }

        .gis-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .dark .gis-title {
          color: #f3f4f6;
        }

        .gis-address {
          color: #6b7280;
          margin-bottom: 1rem;
          font-size: 0.9375rem;
        }

        .dark .gis-address {
          color: #9ca3af;
        }

        .gis-iframe-container {
          position: relative;
          width: 100%;
          height: 20rem;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 1px solid #a3a3a3;
        }

        @media (min-width: 640px) {
          .gis-iframe-container {
            height: 28rem;
          }
        }

        @media (min-width: 768px) {
          .gis-iframe-container {
            height: 32rem;
          }
        }

        .dark .gis-iframe-container {
          border-color: #4b5563;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .gis-iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        .gis-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1rem;
        }

        .gis-link {
          color: #3b82f6;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s;
        }

        .gis-link:hover {
          color: #2563eb;
          text-decoration: underline;
        }

        .dark .gis-link {
          color: #60a5fa;
        }

        .dark .gis-link:hover {
          color: #3b82f6;
        }

        .gis-noscript {
          color: #dc2626;
          font-weight: bold;
          font-size: 1rem;
          text-align: center;
          padding: 1rem;
          background: #fee2e2;
          border-radius: 8px;
          margin-top: 1rem;
        }
      `}</style>

      <div className="gis-wrapper">
        <h4 className="gis-title">Где мы находимся</h4>
        <p className="gis-address">
          Городская клиническая больница №7, Калкаман микрорайон, 20, Алматы
        </p>

        {/* iframe — 100% контроль над размером */}
        <div className="gis-iframe-container">
          <iframe
            className="gis-iframe"
            src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A43.232353%2C%22lon%22%3A76.799945%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22almaty%22%7D%2C%22org%22%3A%229429940000794524%22%7D"
            allowFullScreen
            loading="lazy"
            title="2GIS Карта ГКБ №7"
          ></iframe>
        </div>

        {/* <div className="gis-links">
          <a
            href="https://2gis.kz/almaty/firm/9429940000794524"
            target="_blank"
            rel="noopener noreferrer"
            className="gis-link"
          >
            Посмотреть на карте
          </a>
          <a
            href="https://2gis.kz/almaty/firm/9429940000794524/photos"
            target="_blank"
            rel="noopener noreferrer"
            className="gis-link"
          >
            Фотографии
          </a>
          <a
            href="https://2gis.kz/almaty/routeSearch/rsType/bus/to/76.799945,43.232353"
            target="_blank"
            rel="noopener noreferrer"
            className="gis-link"
          >
            Проложить маршрут
          </a>
        </div> */}

        {/* <noscript className="gis-noscript">
          Включите JavaScript для просмотра карты.
        </noscript> */}
      </div>
    </>
  );
};

export default TwoGISMap;