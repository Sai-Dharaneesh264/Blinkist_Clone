import React, { useState } from 'react'
import { Tabs, Tab, Box, Menu, Typography } from '@mui/material'
import ExtendedNav from './ExtendedNav'

interface Props {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: Props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
    >
      {
        value === index && (
          <Box sx={{ p: 3 }}>
            <ExtendedNav />
          </Box>
        )
      }
    </div>
  )
}
const Menus = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null);
  }
  // const open = Boolean(anchorEl);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }
  return (
    <div style={{zIndex: '1200', backgroundColor: 'red', height: '100%'}}>
      <Menu
        // id="demo-positioned-menu"
        // aria-labelledby="demo-positioned-button"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{height: '100%', backgroundColor: '#9DA3A673', display: 'flex', justifyContent: 'center', marginTop: '80px'}}
      >
      <Box sx={{borderBottom: 1, borderColor: 'divider', zIndex: '1200', backgroundColor: '#F1F4F3'}}>
      <Tabs value={value} onChange={handleChange} style={{zIndex: '1200', marginLeft: '20px', backgroundColor: '#F1F4F3'}}>
        <Tab id='simple-tab-0' aria-controls='simple-tabpanel-0' label='Explore by category' sx={{color: 'red'}}/>
        <Tab id='simple-tab-1' aria-controls='simple-tabpanel-1' label="See recently added titles" />
        <Tab id='simple-tab-2' aria-controls='simple-tabpanel-2' label="See popular titles" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      </Box>
      </Menu>
    </div>
  )
}

export default Menus