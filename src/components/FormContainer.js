import { css } from "@emotion/css";

const FormContainer = () => {
  return (
    <div
      className={css`
        position: absolute;
        top: 215px;
        left: calc(50% - 188px);
        width: 377px;
        height: 445px;
        overflow: hidden;
        text-align: left;
        font-size: 24px;
        color: #3f0032;
        font-family: Kanit;
      `}
    >
      <img
        className={css`
          position: absolute;
          top: calc(50% - 222.5px);
          right: 0px;
          width: 377px;
          height: 445px;
        `}
        alt=""
        src="/iconssystemstatus-barbattery1.svg"
      />
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
        src="/iconssystemstatus-barsignal1.svg"
      />
      <div
        className={css`
          position: absolute;
          top: calc(50% - 365.5px);
          right: 97px;
          width: 14px;
          height: 14px;
        `}
      />
      <img
        className={css`
          position: absolute;
          top: calc(50% - 365.5px);
          left: 32px;
          width: 15px;
          height: 14px;
        `}
        alt=""
        src="/iconssystemstatus-barwifi.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 10px;
          left: 100px;
          line-height: 120%;
          display: inline-block;
          width: 163px;
          height: 30px;
        `}
      >
        Participantes
      </div>
      <div
        className={css`
          position: absolute;
          top: 77px;
          left: 33px;
          font-size: inherit;
          line-height: 120%;
          font-family: inherit;
          color: #000;
          display: inline-block;
          width: 322px;
          height: 307px;
        `}
      >
        <ul
          className={css`
            margin: 0;
            padding-left: 27px;
          `}
        >
          <li
            className={css`
              margin-bottom: 0px;
            `}
          >{`Altieres Lima Capim `}</li>
          <li
            className={css`
              margin-bottom: 0px;
            `}
          >
            Gustavo Enrico Santos de souza
          </li>
          <li
            className={css`
              margin-bottom: 0px;
            `}
          >{`Mariana de Oliveira Muniz `}</li>
          <li className={css``}>{`Sabrina dos Santos Ribas `}</li>
        </ul>
      </div>
    </div>
  );
};

export default FormContainer;
