import { FunctionComponent, useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";
import Property1mediumProperty21 from "../components/Property1mediumProperty21";

const Carrinho: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLineIconClick = useCallback(() => {
    navigate("/menu-vertical");
  }, [navigate]);

  const onLineIcon1Click = useCallback(() => {
    navigate("/menu-vertical");
  }, [navigate]);

  const onLineIcon2Click = useCallback(() => {
    navigate("/menu-vertical");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        height: 932px;
        overflow: hidden;
        text-align: left;
        font-size: 15px;
        color: #000;
        font-family: Inter;
      `}
    >
      <img
        className={css`
          position: relative;
          width: 21px;
          height: 13.6px;
          opacity: 0.35;
        `}
        alt=""
        src="/body.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 0.62%;
          width: 0.3%;
          top: 2.26%;
          right: 23.12%;
          bottom: 97.11%;
          left: 76.58%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          opacity: 0.4;
        `}
        alt=""
        src="/terminal.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 0.95%;
          width: 4.07%;
          top: 2.09%;
          right: 24.05%;
          bottom: 96.95%;
          left: 71.88%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/reserve.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 17px;
          left: 0px;
          width: 430px;
          height: 932px;
        `}
        alt=""
        src="/rectangle-1.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 5px;
          left: 0px;
          width: 432px;
          height: 77px;
        `}
        alt=""
        src="/rectangle-17.svg"
      />
      <div
        className={css`
          position: absolute;
          height: 2.07%;
          top: 1.65%;
          right: 143px;
          bottom: 96.28%;
          width: 266px;
          text-align: right;
          font-size: 12px;
          color: #fff;
          font-family: "Nunito Sans";
        `}
      >
        <div
          className={css`
            position: absolute;
            height: 97.93%;
            top: 2.07%;
            right: 0px;
            line-height: 16px;
            display: inline-block;
            width: 30px;
          `}
        >
          100%
        </div>
        <div
          className={css`
            position: absolute;
            height: 97.93%;
            top: 0%;
            left: calc(50% - 19px);
            line-height: 16px;
            text-align: center;
            display: inline-block;
            width: 68px;
          `}
        >
          14:04 PM
        </div>
        <img
          className={css`
            position: absolute;
            height: 61.14%;
            width: 0.98%;
            top: 12.44%;
            right: 94.59%;
            bottom: 26.42%;
            left: 4.44%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            opacity: 0.25;
          `}
          alt=""
          src="/empty-bar.svg"
        />
        <img
          className={css`
            position: relative;
            width: 10.5px;
            height: 9.5px;
          `}
          alt=""
          src="/full-bars1.svg"
        />
        <img
          className={css`
            position: relative;
            width: 12.5px;
            height: 11.8px;
          `}
          alt=""
          src="/wifi.svg"
        />
      </div>
      <img
        className={css`
          position: absolute;
          top: 52px;
          left: 23px;
          width: 27px;
          height: 2px;
          cursor: pointer;
        `}
        alt=""
        src="/line-2.svg"
        onClick={onLineIconClick}
      />
      <img
        className={css`
          position: absolute;
          top: 57px;
          left: 23px;
          width: 27px;
          height: 2px;
          cursor: pointer;
        `}
        alt=""
        src="/line-2.svg"
        onClick={onLineIcon1Click}
      />
      <img
        className={css`
          position: absolute;
          top: 62px;
          left: 23px;
          width: 27px;
          height: 2px;
          cursor: pointer;
        `}
        alt=""
        src="/line-2.svg"
        onClick={onLineIcon2Click}
      />
      <img
        className={css`
          position: absolute;
          top: 46px;
          left: 309px;
          width: 24px;
          height: 24px;
        `}
        alt=""
        src="/vector.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 43px;
          left: 351px;
          width: 30px;
          height: 30px;
          overflow: hidden;
        `}
        alt=""
        src="/carrinhodecompras-1.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 34px;
          left: 367px;
          width: 24px;
          height: 24px;
          overflow: hidden;
        `}
        alt=""
        src="/icon3.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 785px;
          left: 21px;
          width: 27px;
          height: 30px;
          overflow: hidden;
        `}
      />
      <img
        className={css`
          position: absolute;
          top: 90px;
          left: 1px;
          border-radius: 4px;
          width: 429px;
          height: 850px;
        `}
        alt=""
        src="/rectangle-27.svg"
      />
      <Property1mediumProperty21
        button="Ir a pagamento"
        property1mediumProperty2BorderRadius="15px"
        property1mediumProperty2BackgroundColor="rgba(218, 91, 116, 0.86)"
        property1mediumProperty2Width="283px"
        property1mediumProperty2Height="39px"
        property1mediumProperty2Padding="8px 30px"
        property1mediumProperty2Position="absolute"
        property1mediumProperty2Top="835px"
        property1mediumProperty2Left="66px"
        property1mediumProperty2BoxShadow="unset"
        property1mediumProperty2Cursor="unset"
        property1mediumProperty2Border="unset"
        buttonCursor="unset"
        buttonFontWeight="unset"
        buttonFontSize="17px"
        buttonColor="#fff"
      />
      <div
        className={css`
          position: absolute;
          top: 595px;
          left: 24px;
          line-height: 16px;
          font-weight: 500;
          color: #850437;
          display: inline-block;
          width: 186px;
          height: 29px;
        `}
      >
        Valor entrega
      </div>
      <div
        className={css`
          position: absolute;
          top: 628px;
          left: 24px;
          line-height: 16px;
          font-weight: 500;
          color: #850437;
          display: inline-block;
          width: 187px;
          height: 30px;
        `}
      >
        Total a pagar
      </div>
      <div
        className={css`
          position: absolute;
          top: 602px;
          left: 285px;
          line-height: 16px;
          display: inline-block;
          width: 128px;
          height: 34px;
        `}
      >
        <span
          className={css`
            font-weight: 200;
          `}
        >
          R$
        </span>
        <span className={css``}>30,00</span>
      </div>
      <div
        className={css`
          position: absolute;
          top: 629px;
          left: 285px;
          line-height: 16px;
          font-weight: 500;
          display: inline-block;
          width: 128px;
          height: 33px;
          font-size: 7px;
        `}
      >
        <span className={css``}>R$</span>
        <span
          className={css`
            font-size: 15px;
          `}
        >
          450,00
        </span>
      </div>
      <div
        className={css`
          position: absolute;
          top: 576.5px;
          left: 16.5px;
          border-top: 1px solid #e0dbdb;
          box-sizing: border-box;
          width: 398px;
          height: 1px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 171px;
          left: 12px;
          line-height: 16px;
          font-weight: 800;
          color: #850437;
          display: inline-block;
          width: 464px;
          height: 60px;
        `}
      >
        Carrinho de compras (2)
      </div>
      <div
        className={css`
          position: absolute;
          top: 225px;
          left: 24px;
          line-height: 16px;
          font-weight: 500;
          color: #850437;
          display: inline-block;
          width: 305px;
          height: 29px;
        `}
      >
        Cabernet Sauvignon 2021
      </div>
      <div
        className={css`
          position: absolute;
          top: 411px;
          left: 19px;
          line-height: 16px;
          font-weight: 500;
          color: #850437;
          display: inline-block;
          width: 344px;
          height: 29px;
        `}
      >
        Três Melros Tinto 2018
      </div>
      <div
        className={css`
          position: absolute;
          top: 269px;
          left: 24px;
          border: 0.5px solid #850437;
          box-sizing: border-box;
          width: 96px;
          height: 27px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 269px;
          left: 24px;
          background-color: #e9e9e9;
          border: 0.5px solid #850437;
          box-sizing: border-box;
          width: 32px;
          height: 27px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 269px;
          left: 88px;
          background-color: #e9e9e9;
          border: 0.5px solid #850437;
          box-sizing: border-box;
          width: 32px;
          height: 27px;
        `}
      />
      <img
        className={css`
          position: absolute;
          height: 1.72%;
          width: 3.72%;
          top: 29.61%;
          right: 73.95%;
          bottom: 68.67%;
          left: 22.33%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector2.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 282.5px;
          left: 31.5px;
          width: 17px;
          height: 1px;
        `}
        alt=""
        src="/line-14.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 276px;
          left: 65px;
          line-height: 16px;
          font-weight: 300;
          display: inline-block;
          width: 26px;
          height: 16px;
        `}
      >
        1
      </div>
      <div
        className={css`
          position: absolute;
          top: 279px;
          left: 145px;
          line-height: 16px;
          display: inline-block;
          width: 130px;
          height: 34px;
          font-size: 9px;
        `}
      >
        <span
          className={css`
            font-weight: 200;
          `}
        >
          R$
        </span>
        <span
          className={css`
            font-size: 15px;
          `}
        >
          250,00
        </span>
      </div>
      <img
        className={css`
          position: absolute;
          height: 2.9%;
          width: 5.58%;
          top: 34.23%;
          right: 87.67%;
          bottom: 62.88%;
          left: 6.74%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector3.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 327px;
          left: 58px;
          line-height: 16px;
          font-weight: 300;
          color: #e0dbdb;
          display: inline-block;
          width: 125px;
          height: 19px;
        `}
      >
        Remover
      </div>
      <div
        className={css`
          position: absolute;
          top: 360px;
          left: 62px;
          line-height: 16px;
          font-weight: 300;
          color: #e0dbdb;
          display: inline-block;
          width: 257px;
          height: 21px;
        `}
      >
        Adicionar aos favoritos
      </div>
      <img
        className={css`
          position: absolute;
          top: 354px;
          left: 29px;
          width: 29px;
          height: 27px;
        `}
        alt=""
        src="/icon4.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 397.5px;
          left: 28.5px;
          border-top: 1px solid #e0dbdb;
          box-sizing: border-box;
          width: 398px;
          height: 1px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 451px;
          left: 24px;
          border: 0.5px solid #850437;
          box-sizing: border-box;
          width: 96px;
          height: 27px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 451px;
          left: 24px;
          background-color: #e9e9e9;
          border: 0.5px solid #850437;
          box-sizing: border-box;
          width: 32px;
          height: 27px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 451px;
          left: 88px;
          background-color: #e9e9e9;
          border: 0.5px solid #850437;
          box-sizing: border-box;
          width: 32px;
          height: 27px;
        `}
      />
      <img
        className={css`
          position: absolute;
          height: 1.82%;
          width: 3.72%;
          top: 49.03%;
          right: 73.95%;
          bottom: 49.14%;
          left: 22.33%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector4.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 463.5px;
          left: 31.5px;
          width: 17px;
          height: 1px;
        `}
        alt=""
        src="/line-14.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 456px;
          left: 65px;
          line-height: 16px;
          font-weight: 300;
          display: inline-block;
          width: 26px;
          height: 16px;
        `}
      >
        1
      </div>
      <div
        className={css`
          position: absolute;
          top: 446px;
          left: 142px;
          line-height: 16px;
          display: inline-block;
          width: 130px;
          height: 34px;
          font-size: 9px;
        `}
      >
        <span
          className={css`
            font-weight: 200;
          `}
        >
          R$
        </span>
        <span
          className={css`
            font-size: 15px;
          `}
        >
          159,99
        </span>
      </div>
      <img
        className={css`
          position: absolute;
          height: 2.9%;
          width: 5.58%;
          top: 53.76%;
          right: 87.67%;
          bottom: 43.35%;
          left: 6.74%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector3.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 507px;
          left: 66px;
          line-height: 16px;
          font-weight: 300;
          color: #e0dbdb;
          display: inline-block;
          width: 125px;
          height: 20px;
        `}
      >
        Remover
      </div>
      <div
        className={css`
          position: absolute;
          top: 533px;
          left: 65px;
          line-height: 16px;
          font-weight: 300;
          color: #e0dbdb;
          display: inline-block;
          width: 257px;
          height: 19px;
        `}
      >
        Adicionar aos favoritos
      </div>
      <img
        className={css`
          position: absolute;
          top: 536px;
          left: 29px;
          width: 29px;
          height: 26px;
        `}
        alt=""
        src="/icon5.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 578.5px;
          left: 28.5px;
          border-top: 1px solid #e0dbdb;
          box-sizing: border-box;
          width: 398px;
          height: 1px;
        `}
      />
      <img
        className={css`
          position: absolute;
          top: 408px;
          left: 302px;
          width: 76px;
          height: 144px;
          object-fit: cover;
        `}
        alt=""
        src="/534723c47f29d1920e96ec7c87c16d38removebgpreview-6@2x.png"
      />
      <img
        className={css`
          position: absolute;
          top: 213px;
          left: 272px;
          width: 136px;
          height: 168px;
          object-fit: cover;
        `}
        alt=""
        src="/b05cb992a4cb428e80abd122e9d9ea48removebgpreview-2@2x.png"
      />
      <img
        className={css`
          position: absolute;
          top: 910px;
          left: 107px;
          width: 173px;
          height: 10px;
        `}
        alt=""
        src="/line-11.svg"
      />
    </div>
  );
};

export default Carrinho;
