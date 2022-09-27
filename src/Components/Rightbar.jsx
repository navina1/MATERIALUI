import React from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';



function Rightbar() {
  return (
    <Box 
       flex={2} 
       p={2} 
       sx={{display:{xs: "none", sm: "block" }}}>
        <Box position="fixed">
            <Typography variant='h6' fontWeight={100}>
              Online Friends
            </Typography>
            <AvatarGroup max={7}>
                <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwGkhs7QDcfWMhtkzPtnF492xSUBoiBaKcw&usqp=CAU" />
                <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRouhZHP-SGT5SX3_PvaPjkiL5MQ2j9_4IKsw&usqp=CAU" />
                <Avatar alt="Cindy Baker" src="http://media.gettyimages.com/photos/actress-january-jones-attends-the-67th-annual-directors-guild-of-at-picture-id462945954?k=6&m=462945954&s=594x594&w=0&h=Jp5pbs7QrANOf665y2RJ4bd6R8YYmuYfQBQ3eFbWpH4=&p=1" />
                <Avatar alt="Agnes Walker" src="https://img.jakpost.net/c/2017/06/22/2017_06_22_29032_1498113310._large.jpg" />
                <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx_9Z2B5r2UiEIdDD7tXJzci-vIu8Js_jLFg&usqp=CAU" />
                <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwGkhs7QDcfWMhtkzPtnF492xSUBoiBaKcw&usqp=CAU" />
                <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRouhZHP-SGT5SX3_PvaPjkiL5MQ2j9_4IKsw&usqp=CAU" />
                <Avatar alt="Cindy Baker" src="http://media.gettyimages.com/photos/actress-january-jones-attends-the-67th-annual-directors-guild-of-at-picture-id462945954?k=6&m=462945954&s=594x594&w=0&h=Jp5pbs7QrANOf665y2RJ4bd6R8YYmuYfQBQ3eFbWpH4=&p=1" />
                <Avatar alt="Agnes Walker" src="https://img.jakpost.net/c/2017/06/22/2017_06_22_29032_1498113310._large.jpg" />
                <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx_9Z2B5r2UiEIdDD7tXJzci-vIu8Js_jLFg&usqp=CAU" />
            </AvatarGroup>
            <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
              Latest Post
            </Typography>
            <ImageList cols={3} rowHeight={100} gap={5}>
                <ImageListItem>
                  <img
                    src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
                    alt=""
                  />
                </ImageListItem>
                <ImageListItem>
                  <img
                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
                    alt=""
                  />
                </ImageListItem>
                <ImageListItem>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1A0dHglrHcfrvsNjT5OE4CiSzG9q1i5lIWKU3H5TsZ3Yl-81u-yBP8w9p-DCcAGqVC7I&usqp=CAU"
                    alt=""
                  />
                </ImageListItem>
                <ImageListItem>
                  <img
                    src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/01/31/0/FNK_ONEPOT_LEMON_RICOTTA_SPAGHETTONI_H_f_s4x3.jpg.rend.hgtvcom.406.271.suffix/1643665133276.jpeg"
                    alt=""
                  />
                </ImageListItem>
                <ImageListItem>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbejhOStFlts7yb9xW2xr23Cu7w9WCNcTjHw&usqp=CAU"
                    alt=""
                  />
                </ImageListItem>
                
            </ImageList>
            <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
              Latest Conversations
            </Typography>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>    

        </Box>

    </Box>
  )
}

export default Rightbar