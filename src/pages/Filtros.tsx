import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";
import Percentage601 from "../components/Percentage601";
import StatetrueTypecheckboxSiz1 from "../components/StatetrueTypecheckboxSiz1";
import Property1mediumProperty21 from "../components/Property1mediumProperty21";

const Filtros: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/catalogo1");
  }, [navigate]);

  const onCarrinhoDeCompras1IconClick = useCallback(() => {
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
        `}
        alt=""
        src="/line-2.svg"
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
        `}
        alt=""
        src="/vector1.svg"
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
      <div
        className={css`
          position: absolute;
          top: 276px;
          left: 54px;
          line-height: 13px;
          font-weight: 200;
          display: inline-block;
          width: 172px;
          height: 18px;
        `}
      >
        Portugal
      </div>
      <div
        className={css`
          position: absolute;
          top: 302px;
          left: 54px;
          line-height: 13px;
          font-weight: 200;
          display: inline-block;
          width: 193px;
          height: 18px;
        `}
      >
        Argentina
      </div>
      <div
        className={css`
          position: absolute;
          top: 328px;
          left: 54px;
          line-height: 13px;
          font-weight: 200;
          display: inline-block;
          width: 172px;
          height: 17px;
        `}
      >
        Itália
      </div>
      <Percentage601
        percentage60Width="346px"
        percentage60Position="absolute"
        percentage60Top="475px"
        percentage60Left="29px"
        percentage60Height="10px"
        rectangleDivBackgroundColor="#850437"
        rectangleDivBackgroundColor1="#850437"
        rectangleDivBackgroundColor2="#850437"
      />
      <div
        className={css`
          position: absolute;
          top: 476px;
          left: 316px;
          font-size: 10px;
          line-height: 16px;
          display: inline-block;
          width: 64px;
          height: 15px;
        `}
      >
        +R$ 500,00
      </div>
      <div
        className={css`
          position: absolute;
          top: 648px;
          left: 25px;
          width: 14px;
          height: 17px;
        `}
      >
        <div
          className={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            left: 0%;
            border-radius: 4px;
            background-color: #e8eef4;
            border: 1px solid #e0dbdb;
            box-sizing: border-box;
          `}
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 587px;
          left: 49px;
          line-height: 13px;
          font-weight: 200;
          display: inline-block;
          width: 172px;
          height: 17px;
        `}
      >
        Vinho branco
      </div>
      <StatetrueTypecheckboxSiz1
        check="/check1.svg"
        statetrueTypecheckboxSizPosition="absolute"
        statetrueTypecheckboxSizTop="276px"
        statetrueTypecheckboxSizLeft="27px"
        rectangleDivBackgroundColor="#850437"
        checkIconHeight="77.78%"
        checkIconWidth="77.86%"
        checkIconTop="11.11%"
        checkIconRight="10.71%"
        checkIconBottom="11.11%"
        checkIconLeft="11.43%"
      />
      <StatetrueTypecheckboxSiz1
        check="/check2.svg"
        statetrueTypecheckboxSizPosition="absolute"
        statetrueTypecheckboxSizTop="587px"
        statetrueTypecheckboxSizLeft="25px"
        rectangleDivBackgroundColor="#850437"
        checkIconHeight="77.65%"
        checkIconWidth="77.86%"
        checkIconTop="11.18%"
        checkIconRight="10.71%"
        checkIconBottom="11.18%"
        checkIconLeft="11.43%"
      />
      <div
        className={css`
          position: absolute;
          top: 302px;
          left: 27px;
          width: 14px;
          height: 18px;
        `}
      >
        <div
          className={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            left: 0%;
            border-radius: 4px;
            background-color: #e8eef4;
            border: 1px solid #e0dbdb;
            box-sizing: border-box;
          `}
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 617px;
          left: 25px;
          width: 14px;
          height: 18px;
        `}
      >
        <div
          className={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            left: 0%;
            border-radius: 4px;
            background-color: #e8eef4;
            border: 1px solid #e0dbdb;
            box-sizing: border-box;
          `}
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 327px;
          left: 27px;
          width: 14px;
          height: 17px;
        `}
      >
        <div
          className={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            left: 0%;
            border-radius: 4px;
            background-color: #e8eef4;
            border: 1px solid #e0dbdb;
            box-sizing: border-box;
          `}
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 194px;
          left: 27px;
          font-size: 16px;
          line-height: 16px;
          font-weight: 800;
          display: inline-block;
          width: 193px;
          height: 33px;
        `}
      >
        Filtrar por:
      </div>
      <div
        className={css`
          position: absolute;
          top: 241px;
          left: 25px;
          font-size: 14px;
          line-height: 16px;
          display: inline-block;
          width: 193px;
          height: 19px;
        `}
      >
        Pais
      </div>
      <div
        className={css`
          position: absolute;
          top: 414px;
          left: 25px;
          font-size: 16px;
          line-height: 16px;
          display: inline-block;
          width: 193px;
          height: 20px;
        `}
      >
        Valor
      </div>
      <div
        className={css`
          position: absolute;
          top: 548px;
          left: 25px;
          font-size: 16px;
          line-height: 16px;
          display: inline-block;
          width: 193px;
          height: 20px;
        `}
      >
        Tipo
      </div>
      <div
        className={css`
          position: absolute;
          top: 617px;
          left: 49px;
          line-height: 13px;
          font-weight: 200;
          display: inline-block;
          width: 172px;
          height: 18px;
        `}
      >
        Vinho seco
      </div>
      <div
        className={css`
          position: absolute;
          top: 648px;
          left: 49px;
          line-height: 13px;
          font-weight: 200;
          display: inline-block;
          width: 172px;
          height: 17px;
        `}
      >
        Vinho tinto
      </div>
      <b
        className={css`
          position: absolute;
          top: 358px;
          left: 27px;
          line-height: 9px;
          display: inline-block;
          color: #850437;
          width: 193px;
          height: 17px;
        `}
      >
        Ver mais
      </b>
      <b
        className={css`
          position: absolute;
          top: 685px;
          left: 24px;
          line-height: 9px;
          display: inline-block;
          color: #850437;
          width: 193px;
          height: 17px;
        `}
      >
        Ver mais
      </b>
      <div
        className={css`
          position: absolute;
          top: 483px;
          left: 25px;
          font-size: 10px;
          line-height: 16px;
          display: inline-block;
          width: 47px;
          height: 15px;
        `}
      >
        R$ 10,00
      </div>
      <Property1mediumProperty21
        button="Aplicar filtros "
        property1mediumProperty2BorderRadius="15px"
        property1mediumProperty2BackgroundColor="#850437"
        property1mediumProperty2Width="153px"
        property1mediumProperty2Height="41px"
        property1mediumProperty2Padding="8px 30px"
        property1mediumProperty2Position="absolute"
        property1mediumProperty2Top="809px"
        property1mediumProperty2Left="27px"
        property1mediumProperty2BoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        property1mediumProperty2Cursor="pointer"
        property1mediumProperty2Border="unset"
        buttonCursor="unset"
        buttonFontWeight="600"
        buttonFontSize="12px"
        buttonColor="#fff"
        onButtonContainerClick={onButtonContainerClick}
      />
      <Property1mediumProperty21
        button="Cancelar"
        property1mediumProperty2BorderRadius="15px"
        property1mediumProperty2BackgroundColor="unset"
        property1mediumProperty2Width="153px"
        property1mediumProperty2Height="41px"
        property1mediumProperty2Padding="8px 30px"
        property1mediumProperty2Position="absolute"
        property1mediumProperty2Top="804px"
        property1mediumProperty2Left="218px"
        property1mediumProperty2BoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        property1mediumProperty2Cursor="unset"
        property1mediumProperty2Border="1px solid #850437"
        buttonCursor="unset"
        buttonFontWeight="600"
        buttonFontSize="11px"
        buttonColor="#850437"
      />
      <img
        className={css`
          position: absolute;
          top: 902px;
          left: 126px;
          width: 173px;
          height: 10px;
        `}
        alt=""
        src="/line-11.svg"
      />
    </div>
  );
};

export default Filtros;
