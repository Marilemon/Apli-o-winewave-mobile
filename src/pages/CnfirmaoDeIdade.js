import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";
import Component11 from "../components/Component11";
import Property1mediumProperty21 from "../components/Property1mediumProperty21";

const CnfirmaoDeIdade = () => {
  const navigate = useNavigate();

  const onCnfirmaoDeIdadeClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        border-radius: 2px;
        background-color: #404040;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-sizing: border-box;
        width: 100%;
        height: 932px;
        overflow: hidden;
        cursor: pointer;
        text-align: left;
        font-size: 12px;
        color: #fff;
        font-family: Kanit;
      `}
      onClick={onCnfirmaoDeIdadeClick}
    >
      <img
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          width: 516.8px;
          height: 932px;
          object-fit: cover;
        `}
        alt=""
        src="/homemade-phone-wallpaper-1@2x.png"
      />
      <div
        className={css`
          position: absolute;
          height: 1.59%;
          top: 2.04%;
          left: calc(50% - 43px);
          line-height: 16px;
          font-family: "Nunito Sans";
          text-align: center;
          display: inline-block;
          width: 68px;
        `}
      >
        14:04 PM
      </div>
      <div
        className={css`
          position: absolute;
          height: 1.59%;
          top: 2.58%;
          right: 25px;
          line-height: 16px;
          font-family: "Nunito Sans";
          text-align: right;
          display: inline-block;
          width: 30px;
        `}
      >
        100%
      </div>
      <img
        className={css`
          position: relative;
          width: 12px;
          height: 8px;
        `}
        alt=""
        src="/full-bars.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 215px;
          left: 32px;
          width: 365px;
          height: 445px;
          overflow: hidden;
        `}
        alt=""
        src="/frame-434.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 301px;
          left: 129px;
          font-size: 24px;
          line-height: 120%;
          color: #3f0032;
          display: inline-block;
          width: 163px;
          height: 30px;
        `}
      >{`Bem vindo(a)! `}</div>
      <div
        className={css`
          position: absolute;
          top: 450px;
          left: 80px;
          font-size: 20px;
          line-height: 120%;
          color: #850437;
          display: inline-block;
          width: 261px;
          height: 33px;
        `}
      >
        <p
          className={css`
            margin: 0;
          `}
        >
          Você tem mais de 18 anos?
        </p>
      </div>
      <div
        className={css`
          position: absolute;
          top: 483px;
          left: 152px;
          font-size: 20px;
          line-height: 120%;
          font-weight: 200;
          color: #bfbfbf;
          display: inline-block;
          width: 117px;
          height: 26px;
        `}
      >
        <p
          className={css`
            margin: 0;
          `}
        >
          (obrigatório)
        </p>
      </div>
      <Component11
        component1IconPosition="absolute"
        component1IconTop="344px"
        component1IconLeft="164px"
      />
      <Property1mediumProperty21
        button="Não"
        property1mediumProperty2BorderRadius="4px"
        property1mediumProperty2BackgroundColor="#fff"
        property1mediumProperty2Width="126px"
        property1mediumProperty2Height="40px"
        property1mediumProperty2Padding="12px 30px"
        property1mediumProperty2Position="absolute"
        property1mediumProperty2Top="536px"
        property1mediumProperty2Left="64px"
        property1mediumProperty2BoxShadow="unset"
        property1mediumProperty2Cursor="unset"
        property1mediumProperty2Border="unset"
        buttonCursor="unset"
        buttonFontWeight="600"
        buttonFontSize="16px"
        buttonColor="#850437"
      />
      <Property1mediumProperty21
        button="Sim"
        property1mediumProperty2BorderRadius="4px"
        property1mediumProperty2BackgroundColor="#850437"
        property1mediumProperty2Width="126px"
        property1mediumProperty2Height="40px"
        property1mediumProperty2Padding="12px 30px"
        property1mediumProperty2Position="absolute"
        property1mediumProperty2Top="536px"
        property1mediumProperty2Left="230px"
        property1mediumProperty2BoxShadow="unset"
        property1mediumProperty2Cursor="unset"
        property1mediumProperty2Border="unset"
        buttonCursor="unset"
        buttonFontWeight="600"
        buttonFontSize="16px"
        buttonColor="#fff"
      />
      <img
        className={css`
          position: absolute;
          top: 903px;
          left: 124px;
          width: 173px;
          height: 10px;
        `}
        alt=""
        src="/line-1.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 301px;
          left: 324px;
          width: 32px;
          height: 32px;
          overflow: hidden;
        `}
        alt=""
        src="/icon.svg"
      />
    </div>
  );
};

export default CnfirmaoDeIdade;
