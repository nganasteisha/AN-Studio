
import { useEffect, useState } from "react";
import Badge from "./Badge";

function WorkCard({
  title,
  category,
  year,
  likes,
  isNew,
  available,
  description,
  images = [],
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (!selectedPhoto) return;

    const handleKey = (event) => {
      if (event.key === "Escape") setSelectedPhoto(null);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [selectedPhoto]);

  useEffect(() => {
    if (!isOpen && !selectedPhoto) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, selectedPhoto]);

  return (
    <>
      <article className="work-card">
        <button
          className="work-card-image"
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`Відкрити галерею ${title}`}
        >
          <img src={images[0]} alt={title} loading="lazy" />

          <span className="work-card-category">{category}</span>

          {isNew && (
            <span className="work-card-badge">
              <Badge>Нове</Badge>
            </span>
          )}

          <span className="image-open-hint">
            Відкрити проєкт ↗
          </span>
        </button>

        <div className="work-card-content">
          <div className="work-card-title-row">
            <h3>{title}</h3>

            <button
              className={`like-button ${liked ? "is-liked" : ""}`}
              type="button"
              onClick={() => setLiked((value) => !value)}
              aria-label={liked ? "Прибрати лайк" : "Поставити лайк"}
              aria-pressed={liked}
            >
              <span className="heart">
                {liked ? "♥" : "♡"}
              </span>
              <span>{likes + (liked ? 1 : 0)}</span>
            </button>
          </div>

          <p>{description}</p>

          <div className="work-card-details">
            <span>Рік: {year}</span>
            <span>{images.length} фото</span>
          </div>

          <button
            className="site-button"
            type="button"
            onClick={() => setIsOpen(true)}
          >
            Переглянути роботу ↗
          </button>

          {!available && (
            <p className="archive-label">Архівна робота</p>
          )}
        </div>
      </article>

      {isOpen && (
        <div
          className="gallery-overlay"
          onClick={() => setIsOpen(false)}
        >
          <section
            className="gallery-modal gallery-grid-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Галерея ${title}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="gallery-close"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Закрити галерею"
            >
              ×
            </button>

            <div className="gallery-heading">
              <span>{category} · {year}</span>
              <h2>{title}</h2>
              <p>{description}</p>
              <small>{images.length} кадрів з одного проєкту</small>
            </div>

            <div className="photo-grid">
              {images.map((image, index) => (
                <button
                  className="photo-grid-item"
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedPhoto(index)}
                  aria-label={`Відкрити фото ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${title}, фото ${index + 1}`}
                    loading="lazy"
                  />
                  <span className="photo-number">
                    0{index + 1} <span>↗</span>
                  </span>
                </button>
              ))}
            </div>
          </section>
        </div>
      )}

      {selectedPhoto !== null && (
        <div
          className="photo-lightbox"
          onClick={() => setSelectedPhoto(null)}
          role="presentation"
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Закрити фото"
          >
            ×
          </button>

          <span className="lightbox-count">
            {String(selectedPhoto + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>

          <img
            src={images[selectedPhoto]}
            alt={`${title}, фото ${selectedPhoto + 1}`}
            onClick={(event) => event.stopPropagation()}
          />

          <button
            className="lightbox-arrow lightbox-left"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedPhoto(
                (selectedPhoto - 1 + images.length) % images.length
              );
            }}
            aria-label="Попереднє фото"
          >
            ‹
          </button>

          <button
            className="lightbox-arrow lightbox-right"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedPhoto((selectedPhoto + 1) % images.length);
            }}
            aria-label="Наступне фото"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

export default WorkCard;
