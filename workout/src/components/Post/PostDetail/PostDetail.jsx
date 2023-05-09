import styles from './PostDetail.module.scss';
import { v4 } from 'uuid';

const PostDetail = ({post}) => {
  const {productDetail, productimages, productPrice} = styles
  const {images, price, title, description} = post;

  console.log(post);
  return (
    <>
      <div className={productDetail}>
        <div className={productimages}>
          {images.map((image) => (
            <img key={v4()} src={image} alt="" />
          ))}
        </div>
        <h1>{title}</h1>
        <p className={productPrice}>{price}</p>
        <p>{description}</p>
      </div>
    </>
  )
}

export default PostDetail