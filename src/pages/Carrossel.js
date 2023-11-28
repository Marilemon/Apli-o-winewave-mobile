import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";
import Property1mediumProperty21 from "../components/Property1mediumProperty21";

const Carrossel = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/carrinho1");
  }, [navigate]);

  const onLineIcon2Click = useCallback(() => {
    navigate("/menu-vertical");
  }, [navigate]);

  const onIconClick = useCallback(() => {
    navigate("/carrinho1");
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
          cursor: pointer;
        `}
        alt=""
        src="/icon3.svg"
        onClick={onIconClick}
      />
      <img
        className={css`
          position: absolute;
          top: 76px;
          left: 0px;
          width: 496px;
          height: 371px;
          object-fit: cover;
        `}
        alt=""
        src="/vinho-argentino-em-promocao-reserva-del-camino-blend-tinto-e-blend-branco-2020-743-1-646a1e4415a893fbf45b98b51d3edd99-1@2x.png"
      />
      <div
        className={css`
          position: absolute;
          top: 153px;
          left: 21px;
          font-size: 24px;
          line-height: 25px;
          font-family: "Nunito Sans";
          color: #fff;
          display: inline-block;
          width: 135px;
        `}
      >
        Os melhores vinhos argentinos estão aqui!
      </div>
      <div
        className={css`
          position: absolute;
          top: 461px;
          left: 171px;
          border-radius: 50%;
          background-color: #da5b74;
          width: 10px;
          height: 10px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 461px;
          left: 206px;
          border-radius: 50%;
          background-color: #da5b74;
          width: 10px;
          height: 10px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 461px;
          left: 239px;
          border-radius: 50%;
          background-color: #850437;
          width: 10px;
          height: 10px;
        `}
      />
      <img
        className={css`
          position: absolute;
          top: 517px;
          left: calc(50% - 194px);
          border-radius: 10px;
          width: 298px;
          height: 266px;
        `}
        alt=""
        src="/rectangle-42.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 562px;
          left: 184px;
          font-size: 10px;
          line-height: 16px;
          font-weight: 800;
          display: inline-block;
          width: 153px;
          height: 24px;
        `}
      >
        Três Melros Tinto 2018
      </div>
      <div
        className={css`
          position: absolute;
          top: 587px;
          left: 185px;
          line-height: 16px;
          font-weight: 200;
          display: inline-block;
          width: 130px;
          height: 24px;
        `}
      >
        Quinta do Vallado
      </div>
      <div
        className={css`
          position: absolute;
          top: 612px;
          left: 183px;
          line-height: 16px;
          font-weight: 200;
          display: inline-block;
          width: 111px;
          height: 24px;
        `}
      >
        Douro, Portugal
      </div>
      <div
        className={css`
          position: absolute;
          top: 636px;
          left: 185px;
          font-weight: 200;
          display: inline-block;
          width: 63px;
          height: 15px;
        `}
      >
        Avaliações
      </div>
      <div
        className={css`
          position: absolute;
          top: 695px;
          left: 198px;
          line-height: 16px;
          display: inline-block;
          width: 104px;
          height: 24px;
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
        property1mediumProperty2Width="103px"
        property1mediumProperty2Height="32px"
        property1mediumProperty2Padding="8px 30px"
        property1mediumProperty2Position="absolute"
        property1mediumProperty2Top="722px"
        property1mediumProperty2Left="196px"
        property1mediumProperty2BoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        property1mediumProperty2Cursor="pointer"
        property1mediumProperty2Border="unset"
        buttonCursor="unset"
        buttonFontWeight="600"
        buttonFontSize="14px"
        buttonColor="#fff"
        onButtonContainerClick={onButtonContainerClick}
      />
      <img
        className={css`
          position: absolute;
          height: 1.48%;
          width: 2.37%;
          top: 71.57%;
          right: 54.6%;
          bottom: 26.95%;
          left: 43.02%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector8.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 1.48%;
          width: 2.37%;
          top: 71.57%;
          right: 50.42%;
          bottom: 26.95%;
          left: 47.21%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector8.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 1.48%;
          width: 2.37%;
          top: 71.46%;
          right: 46.47%;
          bottom: 27.06%;
          left: 51.16%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector8.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 1.48%;
          width: 2.37%;
          top: 71.57%;
          right: 42.51%;
          bottom: 26.95%;
          left: 55.12%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector8.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 1.48%;
          width: 2.37%;
          top: 71.57%;
          right: 38.33%;
          bottom: 26.95%;
          left: 59.3%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector9.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 517px;
          left: 29px;
          width: 167px;
          height: 228px;
          object-fit: cover;
        `}
        alt=""
        src="/b05cb992a4cb428e80abd122e9d9ea48removebgpreview-6@2x.png"
      />
    </div>
  );
};

export default Carrossel;
