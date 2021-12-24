import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import styled from 'styled-components'
import {
    Main,
    MainInterface,
    Responsive,
    ResponsiveInterface,
} from '../../Utils/BaseStyles';
import { clickable, flex, position } from '../../Utils/Mixins';

export interface ButtonProps
    extends MainInterface,
        ResponsiveInterface,
        React.HTMLAttributes<HTMLButtonElement> {
    icon?: React.ForwardRefExoticComponent<React.RefAttributes<SVGAElement>>
    iconSize?: string;
    color?: string;
    full?: boolean;
    onClick?: React.MouseEventHandler;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    icon,
    iconSize = '14px',
    disabled,
    ...props
}): React.ReactElement => {
    return (

    );
};

const StyledButton = styled.button<ButtonProps>`
    ${Responsive}
    ${flex('center')}
    
`