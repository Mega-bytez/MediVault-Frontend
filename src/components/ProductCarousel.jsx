import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PropTypes from 'prop-types'






const ProductCarousel = ({images}) => {
    const galleryImages = images.map((image) => ({
        original: image,
        thumbnail:image
    }));

  return (
    <ReactImageGallery items={galleryImages} showPlayButton={false} />
  )
}

export default ProductCarousel;


ProductCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};