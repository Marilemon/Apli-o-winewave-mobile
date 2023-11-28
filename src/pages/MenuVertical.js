import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const MenuVertical1 = () => {
  const navigate = useNavigate();

  const onParticipantesTextClick = useCallback(() => {
    navigate("/participantes1");
  }, [navigate]);

  const onCirculo111Click = useCallback(() => {
    navigate("/carrinho1");
  }, [navigate]);

  const onCasa11Click = useCallback(() => {
    navigate("/catalogo1");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        height: 932px;
        text-align: left;
        font-size: 15px;
        color: #fff;
        font-family: Inter;
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
        `}
      >
        <img
          className={css`
            position: relative;
            width: 26.4px;
            height: 15px;
            opacity: 0.35;
          `}
          alt=""
          src="/body1.svg"
        />
        <img
          className={css`
            position: absolute;
            height: 0.69%;
            width: 0.37%;
            top: 2.5%;
            right: 4.49%;
            bottom: 96.81%;
            left: 95.14%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            opacity: 0.4;
          `}
          alt=""
          src="/terminal1.svg"
        />
        <img
          className={css`
            position: absolute;
            height: 1.05%;
            width: 5.12%;
            top: 2.32%;
            right: 5.63%;
            bottom: 96.63%;
            left: 89.26%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          `}
          alt=""
          src="/reserve1.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 0px;
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
            top: 0px;
            left: 0px;
            width: 430px;
            height: 100.7px;
          `}
          alt=""
          src="/rectangle-171.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 93px;
            left: 0px;
            border-radius: 0px 0px 10px 0px;
            background-color: #850437;
            width: 430px;
            height: 839px;
          `}
        />
        <div
          className={css`
            position: absolute;
            top: 93px;
            left: 0px;
            border-radius: 0px 0px 10px 0px;
            background-color: #850437;
            width: 430px;
            height: 839px;
          `}
        />
        <img
          className={css`
            position: absolute;
            top: 348px;
            left: 11px;
            width: 31px;
            height: 31px;
          `}
          alt=""
          src="/vector10.svg"
        />
        <div
          className={css`
            position: absolute;
            height: 2.29%;
            top: 1.82%;
            right: 51.7px;
            bottom: 95.89%;
            width: 356.3px;
            text-align: right;
            font-size: 12px;
            color: #e2e2e2;
            font-family: "Nunito Sans";
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 98.12%;
              top: 1.88%;
              right: 0px;
              line-height: 16px;
              display: inline-block;
              width: 33px;
            `}
          >
            100%
          </div>
          <div
            className={css`
              position: absolute;
              height: 98.12%;
              top: 0%;
              left: calc(50% - 21.95px);
              line-height: 16px;
              text-align: center;
              display: inline-block;
              width: 74.8px;
            `}
          >
            14:04 PM
          </div>
          <img
            className={css`
              position: absolute;
              height: 61.5%;
              width: 0.93%;
              top: 12.21%;
              right: 94.92%;
              bottom: 26.29%;
              left: 4.15%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
              opacity: 0.25;
            `}
            alt=""
            src="/empty-bar1.svg"
          />
          <img
            className={css`
              position: relative;
              width: 13.2px;
              height: 10.5px;
            `}
            alt=""
            src="/full-bars2.svg"
          />
          <img
            className={css`
              position: relative;
              width: 15.7px;
              height: 13.1px;
            `}
            alt=""
            src="/wifi1.svg"
          />
        </div>
        <img
          className={css`
            position: absolute;
            top: 907.4px;
            left: 118.2px;
            width: 189.3px;
            height: 10px;
          `}
          alt=""
          src="/line-12.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 845.7px;
            left: 28.6px;
            width: 26.4px;
            height: 31.4px;
            overflow: hidden;
          `}
        />
        <img
          className={css`
            position: absolute;
            top: 68.3px;
            left: 21px;
            width: 29.5px;
            height: 2px;
          `}
          alt=""
          src="/line-21.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 74.8px;
            left: 21px;
            width: 29.5px;
            height: 2px;
          `}
          alt=""
          src="/line-31.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 81.4px;
            left: 21px;
            width: 29.5px;
            height: 2px;
          `}
          alt=""
          src="/line-41.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 179.1px;
            left: 19.8px;
            width: 20.9px;
            height: 35.3px;
          `}
          alt=""
          src="/vector11.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 237.9px;
            left: 15.4px;
            width: 26.4px;
            height: 31.4px;
            overflow: hidden;
          `}
          alt=""
          src="/uva-1.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 292.8px;
            left: 14.3px;
            width: 26.4px;
            height: 31.4px;
            overflow: hidden;
          `}
          alt=""
          src="/queijo-1.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 183px;
            left: 51.7px;
            line-height: 16px;
            display: inline-block;
            width: 61.6px;
            height: 27.5px;
          `}
        >
          Vinhos
        </div>
        <div
          className={css`
            position: absolute;
            top: 120.3px;
            left: 51.7px;
            line-height: 16px;
            display: inline-block;
            width: 61.6px;
            height: 27.5px;
          `}
        >
          Home
        </div>
        <div
          className={css`
            position: absolute;
            top: 247.1px;
            left: 55px;
            line-height: 16px;
            display: inline-block;
            width: 61.6px;
            height: 36.6px;
          `}
        >
          Uvas
        </div>
        <div
          className={css`
            position: absolute;
            top: 302px;
            left: 49.5px;
            line-height: 16px;
            display: inline-block;
            width: 136.4px;
            height: 27.5px;
          `}
        >
          Harmonizações
        </div>
        <div
          className={css`
            position: absolute;
            top: 357px;
            left: 52px;
            line-height: 16px;
            display: inline-block;
            width: 136.4px;
            height: 27.5px;
            cursor: pointer;
          `}
          onClick={onParticipantesTextClick}
        >
          Participantes
        </div>
        <img
          className={css`
            position: absolute;
            top: 60.1px;
            left: 335.4px;
            width: 26.4px;
            height: 31.4px;
          `}
          alt=""
          src="/vector12.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 56.2px;
            left: 381.6px;
            width: 33px;
            height: 39.2px;
            overflow: hidden;
          `}
          alt=""
          src="/carrinhodecompras-11.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 44.4px;
            left: 399.2px;
            width: 26.4px;
            height: 31.4px;
            overflow: hidden;
          `}
          alt=""
          src="/icon3.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 48.4px;
            left: 405.8px;
            width: 13.2px;
            height: 15.7px;
            overflow: hidden;
            cursor: pointer;
          `}
          alt=""
          src="/circulo1-1-1.svg"
          onClick={onCirculo111Click}
        />
        <img
          className={css`
            position: absolute;
            top: 115px;
            left: 15.4px;
            width: 26.4px;
            height: 31.4px;
            overflow: hidden;
            cursor: pointer;
          `}
          alt=""
          src="/casa-1-1.svg"
          onClick={onCasa11Click}
        />
      </div>
    </div>
  );
};

export default MenuVertical1;
