import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { DownArrowIcon, UpArrowIcon } from './components/Icons';
import { orange } from '@mui/material/colors'
import { HorizontalRule } from '@mui/icons-material';

const LogoutButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl === null)
    setAnchorEl(event.currentTarget);
    else
    handleClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { logout } = useAuth0();
  return (
    <div>
      <Button
      disableRipple
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{width: '100px'}}
      >
        <div style={{display: 'flex', alignItems:'center'}}>
          <Avatar sx={{ display: 'flex', justifyContent: 'flexEnd', backgroundColor: orange[500]}}>
              S
          </Avatar>
          
          {!anchorEl ? <DownArrowIcon sx={{marginTop: '15px', marginLeft: '5px', color:'text2.main'}}/> : <UpArrowIcon sx={{color: 'text2.main'}}/>}
          </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{width: '150px', display: 'flex', justifyContent: 'center', marginTop: '0px', marginLeft: '0px'}}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom'
        }}
      >
        <MenuItem sx={{height: '50px', display: 'flex', alignItems: 'center', padding: '0px', justifyContent: 'center'}} onClick={() => logout({returnTo: window.location.origin})}>Logout</MenuItem>
      </Menu>
    </div>
  );
  //   const { logout } = useAuth0();
  // return (
  //   <button onClick={() => logout({returnTo: window.location.origin})}>
  //       Log Out
  //   </button>
  // )
}

export default LogoutButton