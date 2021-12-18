import React from "react";
import styled from "styled-components";

export interface INavBarProps {
  height: string;
}

export const NavBar: React.FC<INavBarProps> = ({ height }) => {
    return (
        <StyledNavBar height={height}/>
    );
};

const StyledNavBar = styled.nav<INavBarProps>`
    ${({theme, height}) => `
        height: ${height};
        background-color: ${theme.colors['primary']};
    `}
`;