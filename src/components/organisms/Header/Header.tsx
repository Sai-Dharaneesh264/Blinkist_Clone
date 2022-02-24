import React, { useState } from 'react'
import { Link, AppBar, Typography, IconButton, Toolbar, Avatar, Container } from '@mui/material'
import { SearchIcon, DownArrowIcon, UpArrowIcon } from '../../Icons'
import { orange } from '@mui/material/colors'
import DropDown from '../DropDown/DropDown'

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };



    return (
        <div style={{height: '86px', position: 'relative', top: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <AppBar position="relative" color='transparent' sx={{boxShadow: 'none', width: '952px' , height: '86px', display: 'flex', justifyContent: 'center'}}>
                <Container >
                    <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <Link href='/'>
                            <img src='/Images/logo.png' alt="logo" />
                            </Link>
                            <SearchIcon sx={{fontSize: '20.31px', marginLeft: '43.91px'}}/>
                            {/* <NavItem children="Explore" endIcon={<DownArrowIcon sx={{height: '24px', display: 'flex', marginTop: '5px', position: 'relative', left: '6.7px', top: '5px'}}/>}/> */}
                            <Typography variant="body1" sx={{fontWeight: '500', marginLeft: '41.69px',color: '#03314B'}}>
                                Explore
                            </Typography>
                            <IconButton disableRipple onClick={handleClick} sx={{width: '10.61px',margin: '0px 40.7px 0px 6.7px'}}>
                            {
                                !anchorEl ? <DownArrowIcon sx={{marginTop: '15px', marginLeft: '5px'}}/> : <UpArrowIcon />
                            }
                                {/* <DownArrowIcon /> */}
                            </IconButton>
                            <Link href="/mylibrary">
                            <Typography variant="body1" sx={{fontWeight: '500', color: '#03314B'}}>
                                My Library
                            </Typography>
                            </Link>
                        </div>
                        <div style={{display: 'flex', alignItems:'center'}}>
                            <Avatar sx={{ display: 'flex', justifyContent: 'flexEnd', backgroundColor: orange[500]}}>
                                S
                            </Avatar>
                            
                            <DownArrowIcon sx={{marginLeft: '5px', marginTop: '20px'}}/>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
            <div style={{width: '100%'}}>
            {anchorEl && <DropDown anchorEl={anchorEl} handleClose={handleClose} />}
            </div>
        </div>
    )
}

export default Header;