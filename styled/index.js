import {Container, Grid} from "@material-ui/core"

import styled from "styled-components"

const GridBG = styled(Grid)`
    font-size : 14px;
    padding-left: 25px;
    padding-right : 25px;

    color : white;
    background-image : url("/background.svg");
    background-repeat : no-repeat;

    h3{
      font-size: 18px;
      text-transform: uppercase;
      font-weight : 400;
      margin: 0;
      margin-top: 80px;
      margin-bottom : 10px;
    }

    @media (max-width: 700px) {
      background: "";
    }
`;

const StyledContainer = styled(Container)`
    padding: 0;

    @media (max-width: 980px) {
      margin: 0 !important;
      padding: 0 !important;
    }

    @media (max-width: 700px) {
      background-image : url("/background-mobile.svg");
      background-repeat : no-repeat;
      width: 100vw;
    }
`;

export {
    GridBG,
    StyledContainer
}