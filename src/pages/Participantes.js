import { css } from "@emotion/css";
import FormContainer from "../components/FormContainer";

const Participantes = () => {
  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        height: 932px;
      `}
    >
      <img
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          width: 430px;
          height: 932px;
          object-fit: cover;
        `}
        alt=""
        src="/homemade-phone-wallpaper-11@2x.png"
      />
      <FormContainer />
    </div>
  );
};

export default Participantes;
