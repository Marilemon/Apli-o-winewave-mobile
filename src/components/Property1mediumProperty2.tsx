import { FunctionComponent, type CSSProperties } from "react";
import { Property } from "csstype";
import { css } from "@emotion/css";

type Property1mediumProperty2Type = {
  button?: string;

  /** Style props */
  property1mediumProperty2BorderRadius?: CSSProperties["borderRadius"];
  property1mediumProperty2BackgroundColor?: CSSProperties["backgroundColor"];
  property1mediumProperty2Width?: CSSProperties["width"];
  property1mediumProperty2Padding?: CSSProperties["padding"];
  property1mediumProperty2Position?: CSSProperties["position"];
  property1mediumProperty2Top?: CSSProperties["top"];
  property1mediumProperty2Left?: CSSProperties["left"];
  property1mediumProperty2BoxShadow?: CSSProperties["boxShadow"];
  property1mediumProperty2Border?: CSSProperties["border"];
  property1mediumProperty2Height?: CSSProperties["height"];
  property1mediumProperty2Cursor?: CSSProperties["cursor"];
  buttonFontSize?: CSSProperties["fontSize"];
  buttonColor?: CSSProperties["color"];
  buttonCursor?: CSSProperties["cursor"];
  buttonFontWeight?: CSSProperties["fontWeight"];

  /** Action props */
  onButtonContainerClick?: () => void;
  onButtonTextClick?: () => void;
};

const Property1mediumProperty2: FunctionComponent<
  Property1mediumProperty2Type
> = ({
  button,
  property1mediumProperty2BorderRadius,
  property1mediumProperty2BackgroundColor,
  property1mediumProperty2Width,
  property1mediumProperty2Padding,
  property1mediumProperty2Position,
  property1mediumProperty2Top,
  property1mediumProperty2Left,
  property1mediumProperty2BoxShadow,
  property1mediumProperty2Border,
  property1mediumProperty2Height,
  property1mediumProperty2Cursor,
  buttonFontSize,
  buttonColor,
  buttonCursor,
  buttonFontWeight,
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
padding: ${property1mediumProperty2Padding}
position: ${property1mediumProperty2Position}
top: ${property1mediumProperty2Top}
left: ${property1mediumProperty2Left}
box-shadow: ${property1mediumProperty2BoxShadow}
border: ${property1mediumProperty2Border}
height: ${property1mediumProperty2Height}
cursor: ${property1mediumProperty2Cursor}
`}
      onClick={onButtonContainerClick}
    >
      <div
        className={css`position: relative;
font-weight: 600;
font-size: ${buttonFontSize}
color: ${buttonColor}
cursor: ${buttonCursor}
font-weight: ${buttonFontWeight}
`}
        onClick={onButtonTextClick}
      >
        {button}
      </div>
    </div>
  );
};

export default Property1mediumProperty2;
