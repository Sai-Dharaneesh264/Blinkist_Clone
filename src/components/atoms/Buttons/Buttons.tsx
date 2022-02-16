import React from 'react'
import { Button, SvgIcon, Typography, Box } from '@mui/material'
import { RightArrowIcon } from '../../Icons'
interface Props {
    style: React.CSSProperties;
}
const Buttons = () => {
  return (
    <div>
         <Box sx={{height: '44px', width: '496px', display: 'flex', justifyContent: 'space-between', marginTop: '83px'}}>
           <Button variant="outlined" sx={{width: '122px'}}>
              <Typography variant="body1">
                Read more
              </Typography>
            </Button>
            <Button variant='contained' sx={{width: '170px'}}>
              <Typography variant="body1">
                Finished Reading
              </Typography>
            </Button>
            <Button endIcon={<RightArrowIcon sx={{marginTop: '8px'}} />} variant="text" sx={{color: 'text3.main', width: '136px', display: 'flex', padding: '0px', alignItems: 'center'}}>
              <Typography variant="body1">
                Send to Kindle
              </Typography>
            </Button>
         </Box>
    </div>
  )
}

export default Buttons 