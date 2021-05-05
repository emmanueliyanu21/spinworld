import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
const Product = ({ product }) => {
  const { referralCode } = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <FacebookShareButton
          url={`www.spinworld.com/?referralCode=${referralCode}`}
        >
          <FacebookIcon size='30' />
        </FacebookShareButton>
        <TwitterShareButton
          url={`www.spinworld.com/?referralCode=${referralCode}`}
        >
          <TwitterIcon size='30' />
        </TwitterShareButton>
        <WhatsappShareButton
          url={`www.spinworld.com/?referralCode=${referralCode}`}
        >
          <WhatsappIcon size='30' />
        </WhatsappShareButton>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
