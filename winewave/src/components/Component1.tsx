import { FunctionComponent, type CSSProperties } from "react";
import { Property } from "csstype";
import { css } from "@emotion/css";

type Component1Type = {
  /** Style props */
  component1IconPosition?: CSSProperties["position"];
  component1IconTop?: CSSProperties["top"];
  component1IconLeft?: CSSProperties["left"];
};

const Component1: FunctionComponent<Component1Type> = ({
  component1IconPosition,
  component1IconTop,
  component1IconLeft,
}) => {
  return (
    <img
      className={css`width: 92.9px;
height: 92.9px;
position: ${component1IconPosition}
top: ${component1IconTop}
left: ${component1IconLeft}
`}
      alt=""
      src="/component-1.svg"
    />
  );
};

export default Component1;
