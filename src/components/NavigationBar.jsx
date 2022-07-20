import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Stack,
    Button,
    Container,
    Drawer,
    Box,
    List,
    ListItemButton,
    ListItemText,
    ListItem,
    Divider,
    ListItemIcon,
} from "@mui/material";

// ICONS
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIphone from "@mui/icons-material/PhoneIphone";
import VolunteerActivism from "@mui/icons-material/VolunteerActivism";


import React, { useState } from "react";
import { ChevronLeftRounded } from "@mui/icons-material";

const NavigationBar = () => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(open);
    }

    const drawerItems = (
        <Box
            sx={{ width: 250 }}
            role='presentation'
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home', 'About', 'Games', 'Community'].map((text) => (
                    <ListItem
                        key={text}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Contact Us', 'Support Us'].map((text, index) => (
                    <ListItem
                        key={text}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0
                                    ? <PhoneIphone
                                        sx={{ color: '#6D72C3' }}
                                    />
                                    : <VolunteerActivism
                                        sx={{ color: '#6D72C3' }}
                                    />}
                            </ListItemIcon>
                            {index === 0
                                ? <ListItemText primary={text} secondary='Ask a question' />
                                : <ListItemText primary={text} secondary='Set up donations' />
                            }

                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>)


    return (
        <AppBar
            sx={{
                bgcolor: '#1D1128',
            }}
            position='static'
            component='nav'
        >
            <Container
                maxWidth='xl'
            >
                <Toolbar
                    disableGutters
                >
                    <Box
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <IconButton
                            size='lg'
                            edge='start'
                            color='inherit'
                            aria-label='open drawer'
                            onClick={toggleDrawer(true)}
                            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{ flexGrow: 1 }}
                    >
                        <Typography
                            variant='h6'
                            component='div'
                            fontWeight='bold'
                            sx={{ textAlign: { xs: 'center', md: 'left' } }}
                        >
                            Grim Vision Studios
                        </Typography>
                    </Box>
                    <Stack
                        direction='row'
                        spacing={2}
                        sx={{
                            display: { xs: 'none', md: 'block' }
                        }}
                    >
                        <Button color='inherit'>Home</Button>
                        <Button color='inherit'>About</Button>
                        <Button color='inherit'>Games</Button>
                        <Button color='inherit'>Contact</Button>
                        <Button
                            color='secondary'
                            variant='contained'
                            endIcon={<VolunteerActivism />}
                        >
                            Support Us
                        </Button>
                        <IconButton>

                        </IconButton>
                    </Stack>
                    <Drawer
                        anchor='left'
                        variant='temporary'
                        open={open}
                        onClose={toggleDrawer(false)}
                    >
                        <Box>
                            <IconButton
                                onClick={toggleDrawer(false)}
                            >
                                <ChevronLeftRounded />
                            </IconButton>
                        </Box>
                        <Divider />
                        {drawerItems}
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavigationBar;