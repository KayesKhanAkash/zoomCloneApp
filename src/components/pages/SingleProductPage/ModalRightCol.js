import React from "react";
import { AiFillStar, AiTwotoneHeart } from "react-icons/ai";
import { UseCartContext } from "../../Context/CartContext";
import { UseProductContext } from "../../Context/ProductContext";
import Quantity from "../../Quantity";

const ModalRightCol = ({
  productPrize,
  oldPrize,
  stock,
  id,
  amount,
  productName,
  discription,
  sizes,
  productImages,
}) => {
  const { increment, decrement, openModal } = UseProductContext();
  const { cartOpen, addToCart } = UseCartContext();

  return (
    <div className="right-col">
      <h1 className="text-2xl mb-2 capitalize">{productName}</h1>
      <div className="flex gap-1 items-center">
        <div className="star [&_span]:text-[#FEC42D] flex gap-0.5">
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
        </div>
        <p>Reviews</p>
      </div>
      <div className="flex gap-2 text-gray-700">
        {oldPrize > 0 && (
          <del className="text-xl mt-2 font-[500]">${oldPrize}</del>
        )}
        <p className="text-xl mt-2 font-[500]">${productPrize}</p>
      </div>
      {/* <p className="text-gray-500 mt-2">
        <span className="font-semibold">Vendor:</span> <span>Fashion</span>
      </p> */}
      {/* <p className="text-gray-500 mt-1">
        <span className="font-semibold">Product Type:</span>{" "}
        <span>Fashion</span>
      </p> */}
      <div className="flex gap-3">
        <div className="flex text-gray-700 mt-2">
          <p className="cursor-pointer flex gap-1 items-center">
            <span>
              <AiTwotoneHeart />
            </span>
            <span>Add To Wishlist</span>
          </p>
        </div>
        {/* <div className="flex text-gray-700 mt-2">
          <p className="cursor-pointer flex gap-1 items-center">
            <span>
              <AiTwotoneHeart />
            </span>
            <span>Sizechart</span>
          </p>
        </div> */}
      </div>
      <p className="mt-2 font-semibold text-base text-gray-600">
        Hurry! Only{" "}
        <span className="text-[#FF3D12] font-bold align-middle text-xl animate-[scaleUp_1s_infinite]">
          {stock}
        </span>{" "}
        units left in stock!
      </p>
      <div className="progress w-[70%] h-3 bg-[#E1E1E1] rounded-3xl">
        <span
          className="block w-[20%] h-full bg-[] rounded-3xl mt-1"
          style={{
            backgroundColor: `rgb(250,105,24)`,
            background: `linear-gradient(90deg, rgba(250,105,24,1) 34%, rgba(239,198,38,1) 100%, rgba(255,255,255,1) 100%)`,
          }}
        ></span>
      </div>

      {/* discription */}

      <div className="leading-relaxed text-gray-500 my-4">
        <p>{discription.slice(0, 300)}</p>
        <button type="button" className="underline text-primary mt-2">
          Read More
        </button>
      </div>

      {/* quantity */}
      <Quantity
        amount={amount}
        increment={increment}
        decrement={decrement}
        id={id}
      />

      {/* buttons */}

      <div className="flex gap-3">
        <button
          className="btn-basic bg-btn_bg text-btn_text mt-5 hover:text-btn_text_hover hover:bg-btn_bg_hover"
          type="button"
          onClick={() => {
            addToCart(
              id,
              productName,
              productPrize,
              stock,
              amount,
              sizes,
              productImages
            );
            cartOpen();
            openModal();
          }}
        >
          Add to cart
        </button>
        <button
          type="button"
          className="btn-basic bg-btn_bg_hover text-btn_text_hover mt-5 hover:text-btn_text hover:bg-btn_bg"
        >
          Buy it now
        </button>
      </div>
      {/* ----- */}
      {/* <div className="grid grid-cols-2 mt-4 gap-4 border rounded-md p-4">
        <div className="flex items-center gap-2">
          <div className="img">
            <img
              src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/4_5491b1c1-b319-4298-9202-0b6cfecfe9bf.png?v=1656069434"
              alt="img"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-700">
              Free Delivery
            </h4>
            <p className="text-gray-500">Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="img">
            <img
              src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/1_22b739de-683e-4c77-9e9e-9264eb678619.png?v=1656069433"
              alt="img"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-700">
              Gift Voucher
            </h4>
            <p className="text-gray-500">Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="img">
            <img
              src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/3_be103b8b-ecba-4c8e-a1f7-65559d89546f.png?v=1656069434"
              alt="img"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-700">Big Savings</h4>
            <p className="text-gray-500">Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="img">
            <img
              src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/2_3a61fea5-3349-447b-a972-8bcc8e268895.png?v=1656069434"
              alt="img"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-700">
              Customer Support
            </h4>
            <p className="text-gray-500">Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div> */}

      {/* <div className="mt-4">
        <img
          src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/trusted-image.png?v=1614339729"
          alt="img"
        />
      </div> */}
    </div>
  );
};

export default ModalRightCol;
