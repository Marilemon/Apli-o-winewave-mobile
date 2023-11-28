import { css } from "@emotion/css";

const Percentage601 = ({
  percentage60Width,
  percentage60Position,
  percentage60Top,
  percentage60Left,
  percentage60Height,
  rectangleDivBackgroundColor,
  rectangleDivBackgroundColor1,
  rectangleDivBackgroundColor2,
}) => {
  return (
    <div
      className={css`width: 315px;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
width: ${percentage60Width}
position: ${percentage60Position}
top: ${percentage60Top}
left: ${percentage60Left}
height: ${percentage60Height}
`}
    >
      <div
        className={css`
          flex: 1;
          position: relative;
          border-radius: 8px 0px 0px 8px;
          background-color: #083350;
          height: 8px;
          background-color: ${rectangleDivBackgroundColor};
        `}
      />
      <div
        className={css`
          flex: 1;
          position: relative;
          background-color: #083350;
          height: 8px;
          background-color: ${rectangleDivBackgroundColor1};
        `}
      />
      <div
        className={css`
          flex: 1;
          border-radius: 8px 0px 0px 8px;
          background-color: #e8eef4;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              position: relative;
              background-color: #e8eef4;
              width: 50px;
              height: 8px;
            `}
          />
          <div
            className={css`
              flex: 1;
              position: relative;
              border-radius: 0px 8px 8px 0px;
              background-color: #083350;
              height: 8px;
              margin-left: -56px;
              background-color: ${rectangleDivBackgroundColor2};
            `}
          />
        </div>
      </div>
      <div
        className={css`
          flex: 1;
          position: relative;
          background-color: #e8eef4;
          height: 8px;
        `}
      />
      <div
        className={css`
          flex: 1;
          position: relative;
          border-radius: 0px 8px 8px 0px;
          background-color: #e8eef4;
          height: 8px;
        `}
      />
    </div>
  );
};

export default Percentage601;
