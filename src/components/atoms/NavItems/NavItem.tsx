import React from 'react'
import { Typography } from '@mui/material'
import { TypographyVariants } from '../../assets/Types'
import { StandardLonghandProperties } from 'csstype'
import { Color } from '../../assets/Types'

interface Props {
    children: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    typo?: TypographyVariants;
    width?: StandardLonghandProperties<string | number, (string & {})>['width'];
    height?:StandardLonghandProperties<string | number, (string & {})>['height'];
    left?:StandardLonghandProperties<string | number, (string & {})>['left'];
    color?: Color;
}
const NavItem = ({ color, children, startIcon, endIcon, typo, width, height, left }: Props) => {
  // console.log(color);
  return (
    <div style={{display: "flex", alignItems: 'center', width: width, height: height}}>
        <div id="startIcon">
          {startIcon}
        </div>
        <Typography variant={typo} sx={{position: 'relative', left: left, color:`${color}.main`}}>
            {children}
        </Typography>
        <div id="endIcon">
          {endIcon}
        </div>
    </div>
  )
}

export default NavItem