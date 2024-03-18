import styled from "styled-components";
import Link from "next/link";

export const StyledLinkCards = styled(Link)`
  background-color: white;
  color: #000;
  transition: all .3s ease-in;
  box-shadow: 0px 0px 0px 0px #efefef;
  ${props => props.variant === 'bold' ? 'font-weight: bold' : ''};

  &:hover {
    box-shadow: 3px 6px 12px 0px #efefef;
    transition: all .2s ease-in-out;
  }
`