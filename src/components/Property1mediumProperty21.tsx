import { FunctionComponent, type CSSProperties } from "react";
import { Property } from "csstype";
import { css } from "@emotion/css";

type Property1mediumProperty21Type = {
  button?: string;

  /** Style props */
  property1mediumProperty2BorderRadius?: CSSProperties["borderRadius"];
  property1mediumProperty2BackgroundColor?: CSSProperties["backgroundColor"];
  property1mediumProperty2Width?: CSSProperties["width"];
  property1mediumProperty2Height?: CSSProperties["height"];
  property1mediumProperty2Padding?: CSSProperties["padding"];
  property1mediumProperty2Position?: CSSProperties["position"];
  property1mediumProperty2Top?: CSSProperties["top"];
  property1mediumProperty2Left?: CSSProperties["left"];
  property1mediumProperty2BoxShadow?: CSSProperties["boxShadow"];
  property1mediumProperty2Cursor?: CSSProperties["cursor"];
  property1mediumProperty2Border?: CSSProperties["border"];
  buttonCursor?: CSSProperties["cursor"];
  buttonFontWeight?: CSSProperties["fontWeight"];
  buttonFontSize?: CSSProperties["fontSize"];
  buttonColor?: CSSProperties["color"];

  /** Action props */
  onButtonContainerClick?: () => void;
  onButtonTextClick?: () => void;
};

const Property1mediumProperty21: FunctionComponent<
  Property1mediumProperty21Type
> = ({
  button,
  property1mediumProperty2BorderRadius,
  property1mediumProperty2BackgroundColor,
  property1mediumProperty2Width,
  property1mediumProperty2Height,
  property1mediumProperty2Padding,
  property1mediumProperty2Position,
  property1mediumProperty2Top,
  property1mediumProperty2Left,
  property1mediumProperty2BoxShadow,
  property1mediumProperty2Cursor,
  property1mediumProperty2Border,
  buttonCursor,
  buttonFontWeight,
  buttonFontSize,
  buttonColor,
  onButtonContainerClick,
  onButtonTextClick,
}) => {
  return (
    <div
      className={css`border-radius: 4px;
background-color: #ccd5dd;
width: 212px;
height: 40px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 12px 30px;
box-sizing: border-box;
text-align: left;
font-size: 16px;
color: #fff;
font-family: 'Nunito Sans';
border-radius: ${property1mediumProperty2BorderRadius}
background-color: ${property1mediumProperty2BackgroundColor}
width: ${property1mediumProperty2Width}
height: ${property1mediumProperty2Height}
padding: ${property1mediumProperty2Padding}
position: ${property1mediumProperty2Position}
top: ${property1mediumProperty2Top}
left: ${property1mediumProperty2Left}
box-shadow: ${property1mediumProperty2BoxShadow}
cursor: ${property1mediumProperty2Cursor}
border: ${property1mediumProperty2Border}
`}
      onClick={onButtonContainerClick}
    >
      <div
        className={css`position: relative;
font-weight: 600;
cursor: ${buttonCursor}
font-weight: ${buttonFontWeight}
font-size: ${buttonFontSize}
color: ${buttonColor}
`}
        onClick={onButtonTextClick}
      >
        {button}
      </div>
    </div>
  );
};

export default Property1mediumProperty21;
