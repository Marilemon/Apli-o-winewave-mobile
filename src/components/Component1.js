import { css } from "@emotion/css";

const Component1 = ({
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
