import { FunctionComponent, type CSSProperties } from "react";
import { Property } from "csstype";
import { css } from "@emotion/css";

type StatetrueTypecheckboxSiz1Type = {
  check?: string;

  /** Style props */
  statetrueTypecheckboxSizPosition?: CSSProperties["position"];
  statetrueTypecheckboxSizTop?: CSSProperties["top"];
  statetrueTypecheckboxSizLeft?: CSSProperties["left"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  checkIconHeight?: CSSProperties["height"];
  checkIconWidth?: CSSProperties["width"];
  checkIconTop?: CSSProperties["top"];
  checkIconRight?: CSSProperties["right"];
  checkIconBottom?: CSSProperties["bottom"];
  checkIconLeft?: CSSProperties["left"];
};

const StatetrueTypecheckboxSiz1: FunctionComponent<
  StatetrueTypecheckboxSiz1Type
> = ({
  check,
  statetrueTypecheckboxSizPosition,
  statetrueTypecheckboxSizTop,
  statetrueTypecheckboxSizLeft,
  rectangleDivBackgroundColor,
  checkIconHeight,
  checkIconWidth,
  checkIconTop,
  checkIconRight,
  checkIconBottom,
  checkIconLeft,
}) => {
  return (
    <div
      className={css`width: 16px;
height: 16px;
position: ${statetrueTypecheckboxSizPosition}
top: ${statetrueTypecheckboxSizTop}
left: ${statetrueTypecheckboxSizLeft}
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
          background-color: #083350;
          background-color: ${rectangleDivBackgroundColor};
        `}
      />
      <img
        className={css`position: absolute;
height: 77.5%;
width: 77.5%;
top: 11.25%;
right: 11.25%;
bottom: 11.25%;
left: 11.25%;
max-width: 100%;
overflow: hidden;
max-height: 100%;
height: ${checkIconHeight}
width: ${checkIconWidth}
top: ${checkIconTop}
right: ${checkIconRight}
bottom: ${checkIconBottom}
left: ${checkIconLeft}
`}
        alt=""
        src={check}
      />
    </div>
  );
};

export default StatetrueTypecheckboxSiz1;
