import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';
const ImageGalleryItem = ({ image }) => {
  return image.map(({ id, webformatURL, tags }) => {
    return (
      <li key={id} className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItem_image}
          src={webformatURL}
          alt={tags}
        />
      </li>
    );
  });
};
export default ImageGalleryItem;
