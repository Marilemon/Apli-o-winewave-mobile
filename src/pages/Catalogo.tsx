import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";
import Property1mediumProperty21 from "../components/Property1mediumProperty21";

const Catalogo: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/menu-vertical");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/menu-vertical");
  }, [navigate]);

  const onLineIcon2Click = useCallback(() => {
    navigate("/menu-vertical");
  }, [navigate]);

  const onCarrinhoDeCompras1IconClick = useCallback(() => {
    navigate("/carrinho1");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/filtros");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        height: 932px;
        overflow: hidden;
        text-align: left;
        font-size: 12px;
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
          top: 889px;
          left: 120px;
          width: 173px;
          height: 10px;
        `}
        alt=""
        src="/line-11.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 763px;
          left: 467px;
          width: 24px;
          height: 24px;
          overflow: hidden;
        `}
      />
      <img
        className={css`
          position: absolute;
          top: 52px;
          left: 23px;
          width: 27px;
          height: 2px;
        `}
        alt=""
        src="/line-2.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 57px;
          left: 23px;
          width: 27px;
          height: 2px;
        `}
        alt=""
        src="/line-2.svg"
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
          cursor: pointer;
        `}
        alt=""
        src="/carrinhodecompras-1.svg"
        onClick={onCarrinhoDeCompras1IconClick}
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
      <img
        className={css`
          position: absolute;
          top: 444px;
          left: 377px;
          width: 14px;
          height: 14px;
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
          top: 180px;
          left: calc(50% - 162px);
          border-radius: 10px;
          width: 307px;
          height: 323px;
        `}
        alt=""
        src="/rectangle-22.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 229px;
          left: 202px;
          font-size: 13px;
          line-height: 16px;
          font-weight: 800;
          display: inline-block;
          width: 147px;
          height: 29px;
        `}
      >
        Cabernet Sauvignon 2021
      </div>
      <div
        className={css`
          position: absolute;
          top: 273px;
          left: 202px;
          line-height: 16px;
          font-weight: 200;
          display: inline-block;
          width: 148px;
          height: 29px;
        `}
      >
        Valle de Viejos Viñedos
      </div>
      <div
        className={css`
          position: absolute;
          top: 302px;
          left: 202px;
          line-height: 16px;
          font-weight: 200;
          display: inline-block;
          width: 126px;
          height: 30px;
        `}
      >
        Central Valley, Chile
      </div>
      <div
        className={css`
          position: absolute;
          top: 332px;
          left: 204px;
          font-weight: 200;
          display: inline-block;
          width: 72px;
          height: 18px;
        `}
      >
        Avaliações
      </div>
      <div
        className={css`
          position: absolute;
          top: 397px;
          left: 219px;
          line-height: 16px;
          display: inline-block;
          width: 118px;
          height: 30px;
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
            font-size: 20px;
          `}
        >
          250,00
        </span>
      </div>
      <Property1mediumProperty21
        button="Adicionar"
        property1mediumProperty2BorderRadius="15px"
        property1mediumProperty2BackgroundColor="#da5b74"
        property1mediumProperty2Width="117px"
        property1mediumProperty2Height="39px"
        property1mediumProperty2Padding="8px 30px"
        property1mediumProperty2Position="absolute"
        property1mediumProperty2Top="430px"
        property1mediumProperty2Left="217px"
        property1mediumProperty2BoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        property1mediumProperty2Cursor="pointer"
        property1mediumProperty2Border="unset"
        buttonCursor="unset"
        buttonFontWeight="600"
        buttonFontSize="14px"
        buttonColor="#fff"
        onButtonContainerClick={onButtonContainerClick}
      />
      <div
        className={css`
          position: absolute;
          top: 117px;
          left: 52px;
          border-radius: 20px;
          background-color: #fff;
          border: 1px solid #850437;
          box-sizing: border-box;
          width: 238px;
          height: 33px;
        `}
      />
      <img
        className={css`
          position: absolute;
          top: 123px;
          left: 29px;
          width: 15px;
          height: 18px;
          cursor: pointer;
        `}
        alt=""
        src="/vector1.svg"
        onClick={onVectorIcon1Click}
      />
      <div
        className={css`
          position: absolute;
          top: 117px;
          left: 52px;
          border-radius: 20px;
          background-color: #fff;
          border: 1px solid #850437;
          box-sizing: border-box;
          width: 238px;
          height: 33px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 123px;
          left: 69px;
          font-size: 14px;
          line-height: 16px;
          font-weight: 100;
          display: inline-block;
          width: 150px;
          height: 20px;
        `}
      >{`Encontre seu vinho `}</div>
      <img
        className={css`
          position: absolute;
          top: 123px;
          left: 263px;
          width: 18px;
          height: 18px;
          overflow: hidden;
        `}
        alt=""
        src="/procurar-11.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 199px;
          left: 64px;
          width: 124px;
          height: 270px;
          object-fit: cover;
        `}
        alt=""
        src="/534723c47f29d1920e96ec7c87c16d38removebgpreview-1@2x.png"
      />
      <img
        className={css`
          position: absolute;
          height: 1.61%;
          width: 3.26%;
          top: 38.41%;
          right: 49.3%;
          bottom: 59.98%;
          left: 47.44%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector5.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 1.61%;
          width: 3.02%;
          top: 38.41%;
          right: 45.35%;
          bottom: 59.98%;
          left: 51.63%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector6.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 1.61%;
          width: 3.02%;
          top: 38.41%;
          right: 41.4%;
          bottom: 59.98%;
          left: 55.58%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector6.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 1.61%;
          width: 3.02%;
          top: 38.41%;
          right: 37.44%;
          bottom: 59.98%;
          left: 59.53%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector6.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 1.61%;
          width: 3.02%;
          top: 38.41%;
          right: 33.72%;
          bottom: 59.98%;
          left: 63.26%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector7.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 513px;
          left: calc(50% - 160px);
          border-radius: 10px;
          width: 306px;
          height: 323px;
        `}
        alt=""
        src="/rectangle-39.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 568px;
          left: 204px;
          font-size: 10px;
          line-height: 16px;
          font-weight: 800;
          display: inline-block;
          width: 174px;
          height: 30px;
        `}
      >
        Três Melros Tinto 2018
      </div>
      <div
        className={css`
          position: absolute;
          top: 593px;
          left: 205px;
          line-height: 16px;
          font-weight: 200;
          display: inline-block;
          width: 148px;
          height: 29px;
        `}
      >
        Quinta do Vallado
      </div>
      <div
        className={css`
          position: absolute;
          top: 623px;
          left: 203px;
          line-height: 16px;
          font-weight: 200;
          display: inline-block;
          width: 127px;
          height: 29px;
        `}
      >
        Douro, Portugal
      </div>
      <div
        className={css`
          position: absolute;
          top: 652px;
          left: 205px;
          font-weight: 200;
          display: inline-block;
          width: 72px;
          height: 19px;
        `}
      >
        Avaliações
      </div>
      <div
        className={css`
          position: absolute;
          top: 724px;
          left: 220px;
          line-height: 16px;
          display: inline-block;
          width: 119px;
          height: 30px;
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
            font-size: 20px;
          `}
        >
          {" "}
          159,99
        </span>
      </div>
      <Property1mediumProperty21
        button="Adicionar"
        property1mediumProperty2BorderRadius="15px"
        property1mediumProperty2BackgroundColor="#da5b74"
        property1mediumProperty2Width="117px"
        property1mediumProperty2Height="39px"
        property1mediumProperty2Padding="8px 30px"
        property1mediumProperty2Position="absolute"
        property1mediumProperty2Top="757px"
        property1mediumProperty2Left="218px"
        property1mediumProperty2BoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        property1mediumProperty2Cursor="pointer"
        property1mediumProperty2Border="unset"
        buttonCursor="unset"
        buttonFontWeight="600"
        buttonFontSize="14px"
        buttonColor="#fff"
        onButtonContainerClick={onButtonContainer1Click}
      />
      <img
        className={css`
          position: absolute;
          height: 1.61%;
          width: 3.26%;
          top: 73.5%;
          right: 49.07%;
          bottom: 24.89%;
          left: 47.67%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector5.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 1.61%;
          width: 3.02%;
          top: 73.5%;
          right: 45.12%;
          bottom: 24.89%;
          left: 51.86%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector6.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 1.61%;
          width: 3.02%;
          top: 73.5%;
          right: 41.16%;
          bottom: 24.89%;
          left: 55.81%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector6.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 1.61%;
          width: 3.02%;
          top: 73.5%;
          right: 37.21%;
          bottom: 24.89%;
          left: 59.77%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector6.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 1.61%;
          width: 3.02%;
          top: 73.5%;
          right: 33.49%;
          bottom: 24.89%;
          left: 63.49%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector7.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 513px;
          left: 28px;
          width: 190px;
          height: 278px;
          object-fit: cover;
        `}
        alt=""
        src="/b05cb992a4cb428e80abd122e9d9ea48removebgpreview-1@2x.png"
      />
    </div>
  );
};

export default Catalogo;
