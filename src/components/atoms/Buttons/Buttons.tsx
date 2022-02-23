import React, { useState } from 'react'
import { Button } from '@mui/material'
import NavItem from '../NavItems/NavItem'
import { StandardLonghandProperties } from 'csstype'
import { Color, TypographyVariants } from '../../assets/Types'
import * as CSS from 'csstype'

interface Props {
    variant?: 'contained' | 'text' | 'outlined';
    color?: Color;
    typoColor?: Color;
    children: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    width?: StandardLonghandProperties<string | number, (string & {})>['width'];
    height?:StandardLonghandProperties<string | number, (string & {})>['height'];
    typo?: TypographyVariants;
    border?: CSS.Property.Border | number;
    id?: string
}


const Buttons = (props : Props) => {
    const { children, startIcon, endIcon, width, height, color, variant, typo, typoColor, id} = props;
    const [isShown, setIsShown] = useState<boolean>(false);
  return (
    <div style={{width: width, height: height}}>
        <Button  
            // className={class}
            data-testid={id}
            variant={variant}
            color={color} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            sx={{ width: '100%', alignItems: 'center' }} 
        >
            
            <NavItem children={children} startIcon={startIcon} endIcon={endIcon} typo={typo} color={typoColor} />
        </Button>
    </div>
  )
}

export default Buttons