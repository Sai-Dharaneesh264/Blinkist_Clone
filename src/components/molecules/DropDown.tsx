import React from 'react'
import { Menu, MenuList, MenuItem } from '@mui/material'
import { Icon1 } from '../Icons'
import { Typography, Tabs, Tab, Box } from '@mui/material'
const Item = () => {
    return (
        <div style={{width: '296px', display: 'flex'}}>
            <Icon1 />
            <Typography variant="body2" sx={{marginLeft: '12px'}}>
                Entrepreneurship
            </Typography>
        </div>
    )
}
interface contentProps {
   anchorEl: null | HTMLElement;
   handleClose : () => void;
}
const Content = ({ anchorEl, handleClose}: contentProps) => {
   const open = Boolean(anchorEl);
  return (
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{alignItems: 'center', width: '100%', height: '100%', display: 'flex'}}
      >
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <MenuList sx={{height: '395px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <MenuList sx={{width:'912px'}}>
            <Box sx={{ color: 'text2.main', width: '912px', borderBottom: 1, borderColor: 'text2.main'}}>  
            <Tabs
            textColor="inherit"
            
            >
                <div style={{width: '723px', display: 'flex'}}>
                <Tab label={<Typography variant="subtitle3">Explore by category</Typography> } />
                <Tab label={<Typography variant="subtitle3">See recently added titles</Typography>} />
                <Tab label={<Typography variant="subtitle3">See popular titles</Typography>} />
                </div>
            </Tabs>
            </Box>
            </MenuList>
            <div style={{display: 'flex'}}>
        <MenuList sx={{width: '296px'}}>
            <MenuItem sx={{width: '296px'}}>
               <Item />
            </MenuItem>
            <MenuItem>
               <Item />
            </MenuItem>
            <MenuItem>
               <Item />
            </MenuItem>
            <MenuItem>
               <Item />
            </MenuItem>
            <MenuItem>
               <Item />
            </MenuItem>
        </MenuList>
        <MenuList sx={{width: '296px'}}>
            <MenuItem sx={{width: '296px', paddingRight: '0px'}}>
               <Item />
            </MenuItem>
            <MenuItem>
               <Item />
            </MenuItem>
            <MenuItem>
               <Item />
            </MenuItem>
            <MenuItem>
               <Item />
            </MenuItem>
            <MenuItem>
               <Item />
            </MenuItem>
        </MenuList>
        <MenuList sx={{width: '296px'}}>
            <MenuItem>
               <Item />
            </MenuItem>
            <MenuItem>
               <Item />
            </MenuItem>
            <MenuItem>
               <Item />
            </MenuItem>
            <MenuItem>
               <Item />
            </MenuItem>
            <MenuItem>
               <Item />
            </MenuItem>
        </MenuList>
        </div>
        </MenuList>
        </div>
        </Menu>
  )
}

interface Props {
   handleClose: () => void;
   anchorEl: null | HTMLElement;
}
const DropDown = ({anchorEl, handleClose}: Props) => {

      const open = Boolean(anchorEl); 
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            
            <Content anchorEl={anchorEl} handleClose={handleClose} />
            {/* <Icon /> */}
        </div>
    )
}

export default DropDown