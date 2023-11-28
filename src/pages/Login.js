import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";
import ContinueWithSocialMediaForm1 from "../components/ContinueWithSocialMediaForm1";
import Property1mediumProperty21 from "../components/Property1mediumProperty21";

const Login = () => {
  const navigate = useNavigate();

  const onButtonTextClick = useCallback(() => {
    navigate("/carrossel");
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
        text-align: left;
        font-size: 15px;
        color: #850437;
        font-family: Inter;
      `}
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
      <img
        className={css`
          position: absolute;
          top: 169px;
          left: 52px;
          border-radius: 7px;
          width: 325px;
          height: 558px;
        `}
        alt=""
        src="/rectangle-9.svg"
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
      <div
        className={css`
          position: absolute;
          height: 2.36%;
          width: 96.51%;
          top: 0%;
          right: 3.49%;
          bottom: 97.64%;
          left: 0%;
          text-align: right;
          font-size: 12px;
          color: #fff;
          font-family: "Nunito Sans";
        `}
      >
        <img
          className={css`
            position: absolute;
            top: calc(50% - 7px);
            right: 3px;
            width: 32px;
            height: 14px;
          `}
          alt=""
          src="/iconssystemstatus-barbattery.svg"
        />
        <div
          className={css`
            position: absolute;
            height: 80%;
            top: 16.36%;
            right: 35px;
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
            height: 80%;
            top: 15%;
            left: calc(50% - 34.5px);
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
            top: 3px;
            left: 180px;
            width: 14px;
            height: 14px;
            display: none;
          `}
          alt=""
          src="/iconssystemstatus-barscreen-lock.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 3px;
            left: 4px;
            width: 21px;
            height: 14px;
          `}
          alt=""
          src="/iconssystemstatus-barsignal.svg"
        />
        <div
          className={css`
            position: absolute;
            top: calc(50% - 7px);
            right: 97px;
            width: 14px;
            height: 14px;
          `}
        />
        <img
          className={css`
            position: absolute;
            top: calc(50% - 7px);
            left: 29px;
            width: 18px;
            height: 14px;
          `}
          alt=""
          src="/iconssystemstatus-barwifi.svg"
        />
      </div>
      <img
        className={css`
          position: absolute;
          top: 258px;
          left: 326px;
          width: 32px;
          height: 32px;
          overflow: hidden;
        `}
        alt=""
        src="/icon.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 307px;
          left: 61px;
          border-radius: 15px;
          background-color: #fff;
          width: 290px;
          height: 57px;
        `}
      />
      <ContinueWithSocialMediaForm1 />
      <i
        className={css`
          position: absolute;
          top: 324px;
          left: 120px;
          display: inline-block;
          color: #e0dbdb;
          width: 222px;
          height: 35px;
        `}
      >
        Continue com o Instagram
      </i>
      <img
        className={css`
          position: absolute;
          top: 324px;
          left: 80px;
          width: 24px;
          height: 24px;
          overflow: hidden;
        `}
        alt=""
        src="/icon1.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 234px;
          left: 61px;
          border-radius: 15px;
          width: 290px;
          height: 49px;
        `}
        alt=""
        src="/rectangle-12.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 474px;
          left: 66px;
          width: 286px;
          height: 34px;
          font-size: 20px;
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 10px;
            left: 11.5px;
            width: 100.5px;
            height: 1px;
          `}
          alt=""
          src="/line-3.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 10.5px;
            left: 180px;
            width: 101px;
            height: 1px;
          `}
          alt=""
          src="/line-4.svg"
        />
        <i
          className={css`
            position: absolute;
            top: 0px;
            left: 131px;
            display: inline-block;
            font-weight: 700;
            width: 38px;
            height: 34px;
          `}
        >
          OU
        </i>
      </div>
      <div
        className={css`
          position: absolute;
          top: 511px;
          left: 71px;
          border-radius: 7px;
          background-color: #fff;
          width: 288px;
          height: 31px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 559px;
          left: 72px;
          border-radius: 7px;
          background-color: #fff;
          width: 288px;
          height: 31px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 619px;
          left: 72px;
          font-size: 13px;
          display: inline-block;
          width: 204px;
          height: 25px;
        `}
      >
        <p
          className={css`
            margin: 0;
          `}
        >
          <span className={css``}>Não tem uma conta?</span>
          <b className={css``}>{` `}</b>
        </p>
        <p
          className={css`
            margin: 0;
          `}
        >
          <b className={css``}>Cadastre-se</b>
        </p>
      </div>
      <i
        className={css`
          position: absolute;
          top: 593px;
          left: 250px;
          font-size: 10px;
          text-decoration: underline;
          display: inline-block;
          width: 104px;
          height: 32px;
        `}
      >
        Esqueceu sua senha?
      </i>
      <div
        className={css`
          position: absolute;
          top: 184px;
          left: 70px;
          font-size: 24px;
          line-height: 120%;
          font-family: Kanit;
          color: #3f0032;
          display: inline-block;
          width: 163px;
          height: 30px;
        `}
      >
        Login
      </div>
      <img
        className={css`
          position: absolute;
          top: 245px;
          left: 74px;
          width: 30px;
          height: 30px;
          overflow: hidden;
        `}
        alt=""
        src="/icon2.svg"
      />
      <i
        className={css`
          position: absolute;
          top: 251px;
          left: 115px;
          display: inline-block;
          color: #e0dbdb;
          width: 222px;
          height: 35px;
        `}
      >
        Continue com o Facebook
      </i>
      <i
        className={css`
          position: absolute;
          top: 519px;
          left: 80px;
          display: inline-block;
          color: #bfbfbf;
          width: 222px;
          height: 24px;
        `}
      >
        Seuemail@gmail.com
      </i>
      <i
        className={css`
          position: absolute;
          top: 566px;
          left: 80px;
          display: inline-block;
          color: #bfbfbf;
          width: 222px;
          height: 24px;
        `}
      >
        ********
      </i>
      <Property1mediumProperty21
        button="Entrar"
        property1mediumProperty2BorderRadius="15px"
        property1mediumProperty2BackgroundColor="#da5b74"
        property1mediumProperty2Width="103px"
        property1mediumProperty2Height="32px"
        property1mediumProperty2Padding="8px 30px"
        property1mediumProperty2Position="absolute"
        property1mediumProperty2Top="667px"
        property1mediumProperty2Left="174px"
        property1mediumProperty2BoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        property1mediumProperty2Cursor="unset"
        property1mediumProperty2Border="unset"
        buttonCursor="pointer"
        buttonFontWeight="600"
        buttonFontSize="14px"
        buttonColor="#fff"
        onButtonTextClick={onButtonTextClick}
      />
    </div>
  );
};

export default Login;
