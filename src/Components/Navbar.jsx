import { AppBar, Avatar, InputBase, styled, Toolbar, Typography } from '@mui/material';
import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import { Box } from '@mui/system';
import {Badge} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%",

}))

const Icons = styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
        display:"flex",

  },
  gap:"20px"
}))


const UserBox = styled(Box)(({theme})=>({
    display:"flex",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none",
    }
  }))



function Navbar() {
    const [open,setOpen]=useState(false);
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>Neo</Typography>
            <PetsIcon sx={{display:{xs:"block",sm:"none"}}} />
            <Search>
                <InputBase placeholder='search........'/>
            </Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <MailIcon/>
                </Badge>

                <Badge badgeContent={2} color="error">
                    <NotificationsIcon/>
                </Badge>
                <Avatar 
                    sx={{width:30, height:30}} 
                    src='https://thumbs.dreamstime.com/z/husky-dog-puppies-4732506.jpg'
                    onClick={e=>setOpen(true)}
                    />
            </Icons>
            <UserBox>
                <Avatar sx={{width:30, height:30}} src='https://thumbs.dreamstime.com/z/husky-dog-puppies-4732506.jpg'/>
                <Typography variant='span'>John</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e)=>setOpen(false)} 
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
            }}
         >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar