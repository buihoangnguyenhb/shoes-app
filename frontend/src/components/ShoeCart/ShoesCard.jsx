import React, { useContext, useState } from "react";
import styled from "styled-components/macro";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../../Contexts/CartContext';

function ShoesCard(props) {
  const { id, name, style, price, description, productBy, imageURL } = props;
  const [isAdded, setIsAdded] = useState(false);
  const {addToCart, setTotal} = useContext(CartContext);

  const handleAddToCart = () => {
    setIsAdded(true);
    toast.success("Đã thêm vào giỏ");
    const newItems = {
        id: id,
        name: name,
        price: price,
        imageURL: imageURL
    }
    addToCart((item) => [...item, newItems]);
    setTotal((total) => (total += Number(price)));
  };
  return (
    <Wrapper>
      <div class="card-img">
        <img src={imageURL} alt="" />
      </div>
      <h4 class="card-name">{name}</h4>
      <div class="card-desc">{description}</div>
      <div class="card-cart">
        <div class="card-price">{price}$</div>
        {isAdded ? (
          <button className="card__btn-disable">Đã thêm vào giỏ</button>
        ) : (
          <button className="card__btn-enable" onClick={handleAddToCart}>Mua Ngay</button>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Wrapper>
  );
}

export default ShoesCard;

const Wrapper = styled.div`
background-color: #fff;
width: 300px;
height: 450px;
border-radius: 7px;
margin-top: 10px;
  &:hover {
    border: 1px solid #3215;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  }
  .card-img {
    width: 100%;
    max-height: 225px;
    border-radius: 7px;
}
img {
    width: 100%;
    height: 225px;
    object-fit: cover;
    border-radius: 7px;
}
// .card-style {
//     /*text-align: left;*/
//     margin-left: 5px;
//     font-weight: 600;
//     color: #111;
}
.card-name {
    max-width: 100%;
    max-height: 80px;
    text-align: center;
    font-weight: 600;
    padding: 10px 5px 0 5px;
    margin: 5px auto;
    color: #111;
}

.card-desc {
    padding: 10px 7px 0 7px;
    color: #111;
    white-space: wrap;
    margin-bottom: 30px;
}
.card-cart{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
    padding: 5px 10px;
    .card-price{
        font-weight: 600;
        color: #111;
    }
    .card__btn-disable {
        padding: 10px 30px;
        background: transparent;
        border: 2px solid #DE3163;
        border-radius: 7px;
        font-weight: 600;
    }
    .card__btn-enable {
        padding: 10px 30px;
        background: transparent;
        border: 1px solid #afafaf;
        border-radius: 7px;
        font-weight: 600;
        &:hover{
            background: #FA8072;
            border: 2px solid #fff;
            color: #ffff;
            cursor: pointer;
        }
    }
}

`;
