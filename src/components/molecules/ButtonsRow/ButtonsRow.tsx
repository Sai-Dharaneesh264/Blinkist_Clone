import React from 'react'
import { Box } from '@mui/material'
import { RightArrowIcon } from '../../Icons'
import Buttons from '../../atoms/Buttons/Buttons'

const ButtonsRow = () => {
  return (
    <div>
         <Box sx={{height: '44px', width: '496px', display: 'flex', justifyContent: 'space-between',marginTop: '83px'}}>
           <Buttons 
           variant="outlined" 
           width='122px' 
          //  color='text2'  
           typoColor="primary" 
           typo="body1" 
           children="Read more" 
           />
           <Buttons variant="contained" width='172px' typo="body1" children="Finished Reading" />
           <Buttons 
              typoColor="text3" 
              variant="text" 
              // color="text3" 
              endIcon={<RightArrowIcon sx={{position: 'relative', left: '15px', top: '10px'}}/>} 
              width='136px' 
              typo="body1" 
              children="Send to" 
            /> 
         </Box>
    </div>
  )
}

export default ButtonsRow