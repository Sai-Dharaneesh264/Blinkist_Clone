import React from 'react'
import { Menu, MenuList, MenuItem } from '@mui/material'
import { Icon1 } from '../../Icons'
import { Grid, Typography, Tabs, Tab, Box, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { green } from '@mui/material/colors'
import NavItem from '../../atoms/NavItems/NavItem'
const a = [{
   icon: <Icon1 />,
   text: 'Entrepreneurship'
},
{
   icon: <Icon1 />,
   text: 'Entrepreneurship'
},
{
   icon: <Icon1 />,
   text: 'Entrepreneurship'
},
{
   icon: <Icon1 />,
   text: 'Entrepreneurship'
},
{
   icon: <Icon1 />,
   text: 'Entrepreneurship'
},
{
   icon: <Icon1 />,
   text: 'Entrepreneurship'
},
{
   icon: <Icon1 />,
   text: 'Entrepreneurship'
},
{
   icon: <Icon1 />,
   text: 'Entrepreneurship'
},
{
   icon: <Icon1 />,
   text: 'Entrepreneurship'
},
{
   icon: <Icon1 />,
   text: 'Entrepreneurship'
},
{
   icon: <Icon1 />,
   text: 'Entrepreneurship'
},
{
   icon: <Icon1 />,
   text: 'Entrepreneurship'
},
{
   icon: <Icon1 />,
   text: 'Entrepreneurship'
},
{
   icon: <Icon1 />,
   text: 'Entrepreneurship'
},
{
   icon: <Icon1 />,
   text: 'Entrepreneurship'
}
]

const useStyles = makeStyles({
   hover: {
      '&:hover': {
         color: green[600]
      }
   }
})
interface contentProps {
   anchorEl: null | HTMLElement;
   handleClose : () => void;
}
const Content = ({ anchorEl, handleClose}: contentProps) => {
   const classes = useStyles();
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
        sx={{position: 'absolute', width: '100%', height: '100%', display: 'flex', marginTop: '86px', backgroundColor: '#9DA3A673', padding: '0px'}}
      >
      <MenuList sx={{height: '100%'}}>
         <MenuItem disableRipple>
         <Box sx={{borderBottom: 2, width: '912px', borderColor: 'grey[300]', margin: 'auto'}}>
      <Tabs
         textColor="inherit"
         sx={{width: '723px', alignItems: 'center', display: 'flex', justifyContent: 'center'}}
         disableRipple
      >
         <div style={{display: 'flex', height: '20px', width: '723px', justifyContent: 'space-between'}}>
            <Tab sx={{display: 'flex', justifyContent: 'flex-start', width: 'fitContent'}} disableRipple label={<Typography className={classes.hover} variant="body1" >Explore by category</Typography> } />
            <Tab sx={{display: 'flex', justifyContent: 'flex-start', width: 'fitContent'}} disableRipple label={<Typography variant="body1">See recently added titles</Typography>} />
            <Tab sx={{display: 'flex', justifyContent: 'flex-start', width: 'fitContent'}} disableRipple label={<Typography variant="body1">See popular titles</Typography>} />
        </div>
      </Tabs>
      </Box>
         </MenuItem>
         <MenuItem disableRipple >
         <Grid container sx={{width: '912px', margin: 'auto', height: '264px'}}>
            {
               a.map(item => {
                 return ( 
                     <Grid item xs={4}>
                        <Link href="/bookdetails/1">
                        <NavItem children={item.text} left="12px" startIcon={item.icon} />
                        </Link>
                     </Grid>
                 )
               })
            }  
         </Grid>
         </MenuItem>
      </MenuList>
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