import React from 'react';
import { useState } from 'react';
import { Avatar, Fab,styled, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import {Add as AddIcon} from "@mui/icons-material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const StyledModal= styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox=styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginBottom:"20px"
})

function Add() {

  const [open, setOpen] = useState(false);
  
  return (
    <div>
        <Tooltip onClick={e=>setOpen(true)} title="Delete" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% -25px)",md:30}}}>
            <Fab color="primary" aria-label="add">
                <AddIcon/>
            </Fab>
        </Tooltip>
        
      <StyledModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"}  p={3} borderRadius={5}>
          <Typography variant='h6' color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
                    src='https://thumbs.dreamstime.com/z/husky-dog-puppies-4732506.jpg'
                      sx= {{width : 30, height : 30}}
          />
          <Typography fontWeight={500} variant='span'>John Doe</Typography>
          </UserBox>

          <TextField
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="Whats on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color='primary'/>
            <ImageIcon color='secondary'/>
            <VideoCameraBackIcon color='success'/>
            <PersonAddIcon color='error'/>
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                <Button sx={{width:"100px"}}>Post</Button>
                <Button><CalendarMonthIcon/></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>  
    </div>
  )
}

export default Add