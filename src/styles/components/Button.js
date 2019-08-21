import { Button } from "reactstrap";
import styled from "styled-components";

export const StandardButton = styled(Button)`
  transition: 0.2s;
  border-radius: 20px;
  :hover {
    transition: 0.2s;
    transform: translateY(-1px);
  }
`;

export const ButtonGradientYellow = styled(StandardButton)`
  background: #ffb347; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffcc33,
    #ffb347
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffcc33,
    #ffb347
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
