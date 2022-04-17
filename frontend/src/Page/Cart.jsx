import React, { useContext } from "react";
import styled from "styled-components/macro";
import { CartContext } from "../Contexts/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const { myCart, total, setTotal, addToCart } = useContext(CartContext);
  console.log("check context", total);
  const handleCheckout = () => {
      setTotal(0);
     addToCart([{}]);
     toast.success("thành công");
  }
  return (
    <Wrapper>
      <section className="cart__container">
        <h1 className="cart__container-title">Danh sách sản phẩm</h1>
        {myCart.slice(1).map((item) => {
          return (
            <>
              <div className="cart__item">
                <div className="cart__item-img">
                  <img src={item.imageURL} alt="" />
                </div>
                <div className="cart__item-info">
                  <div className="cart__item-info--name">
                    TênSP: {item.name}
                  </div>
                  <div className="cart__item-info--price">
                    Giá: {item.price}$
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div className="cart__contaiter-checkout">
          <div>Tổng: {total}$</div>
          <div>
            <button onClick={handleCheckout}>Thanh toán</button>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
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

export default Cart;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #111;
  font-weight: 600;
  .cart__container {
    background-color: #fff;
    border-radius: 10px;
    width: 1000px;
    // display: flex;
    // justify-content: center;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    .cart__contaiter-checkout {
      display: flex;
      justify-content: space-evenly;
      margin: 20px 0;
      button {
        padding: 10px 30px;
        background: transparent;
        border: 1px solid #afafaf;
        border-radius: 7px;
        font-weight: 600;
        text-align: center;
        &:hover {
          background: #ff5733;
          border: 2px solid #fff;
          color: #ffff;
          cursor: pointer;
        }
      }
    }
    .cart__container-title {
      text-align: center;
      margin: 20px auto;
    }
    .cart__item {
      width: 80%;
      height: 150px;
      //   background: red;
      padding: 10px 10px;
      margin: 10px auto;
      border: 1px solid #111;
      border-radius: 7px;
      display: flex;
      align-items: center;
      .cart__item-img {
        width: 100px;
        height: 100px;
        border-radius: 7px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 7px;
        }
      }
      .cart__item-info {
        padding: 0 20px;
      }
    }
  }
`;
