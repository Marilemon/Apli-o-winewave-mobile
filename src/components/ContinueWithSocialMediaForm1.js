import { css } from "@emotion/css";

const ContinueWithSocialMediaForm1 = () => {
  return (
    <div
      className={css`
        position: absolute;
        top: 385px;
        left: 61px;
        width: 299px;
        height: 60px;
        text-align: left;
        font-size: 15px;
        color: #e0dbdb;
        font-family: Inter;
      `}
    >
      <div
        className={css`
          position: absolute;
          height: 100%;
          top: 0%;
          bottom: 0%;
          left: calc(50% - 149.5px);
          border-radius: 15px;
          background-color: #fff;
          width: 299px;
        `}
      />
      <img
        className={css`
          position: absolute;
          top: 18px;
          left: 19px;
          width: 24px;
          height: 24px;
          overflow: hidden;
        `}
        alt=""
        src="/google-1.svg"
      />
      <i
        className={css`
          position: absolute;
          top: 18px;
          left: 61px;
          display: inline-block;
          width: 222px;
          height: 24px;
        `}
      >
        Continue com o Google
      </i>
    </div>
  );
};

export default ContinueWithSocialMediaForm1;
