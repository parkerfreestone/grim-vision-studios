import React from "react";

import {
    PhoneAndroidRounded,
    VolunteerActivism,
} from "@mui/icons-material";
import {
    Grid,
    Container,
    Typography,
    Button,
    Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {

    const textStyles = {
        link: {
            color: '#fff',
            textDecoration: 'none'
        },
        redLink: {
            color: '#d32f2f',
            textDecoration: 'none'
        },
        footerHeading: {
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 10,
        },
        footerText: {
            color: '#f7f7f7'
        }
    }

    return (
        <>
            <Container
                maxWidth='xxl'
                sx={{
                    bgcolor: '#02182B',
                    py: 10
                }}
            >
                <Container
                    maxWidth='xl'
                    sx={{ textAlign: { xs: 'center', md: 'left' } }}
                >
                    <Grid
                        container
                        spacing={{ xs: 5, md: 15 }}
                    >
                        <Grid
                            item
                            md={3}
                            xs={12}
                        >
                            <Typography
                                variant="h5"
                                style={textStyles.footerHeading}
                            >
                                Grim Vision Studios
                            </Typography>
                            <Typography
                                variant="body1"
                                style={textStyles.footerText}
                            >
                                Lorem ipsum dolar sit amet, lorem ipsum dola asit gret moritz.
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            md={3}
                            sm={6}
                            xs={12}
                        >
                            <Stack spacing={1}>
                                <Typography
                                    variant='h5'
                                    style={textStyles.footerHeading}
                                >
                                    Explore
                                </Typography>
                                <Link
                                    to='/'
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    Home
                                </Link>
                                <Link
                                    to='/about'
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    About
                                </Link>
                                <Link
                                    to='/games'
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    Games
                                </Link>
                                {/* <Link
                                    to='/community'
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    Community
                                </Link> */}
                            </Stack>
                        </Grid>
                        <Grid
                            item
                            md={3}
                            sm={6}
                            xs={12}
                        >
                            <Stack spacing={1}>
                                <Typography
                                    variant='h5'
                                    style={textStyles.footerHeading}
                                >
                                    Legal
                                </Typography>
                                <Link
                                    to='/privacy'
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    Privacy
                                </Link>
                                <Link
                                    to='/tos'
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    Terms of Service
                                </Link>
                            </Stack>
                        </Grid>
                        <Grid
                            item
                            md={3}
                            xs={12}
                        >
                            <Stack spacing={1}>
                                <Button
                                    variant='contained'
                                    color='error'
                                    endIcon={<PhoneAndroidRounded />}
                                >
                                    Contact Us
                                </Button>
                                <Button
                                    variant='contained'
                                    color='error'
                                    endIcon={<VolunteerActivism />}
                                >
                                    Support Us
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <Container
                maxWidth='xxl'
                sx={{
                    bgcolor: '#061F35',
                    py: 3
                }}
            >
                <Container maxWidth='xl'>
                    <Typography style={textStyles.link}>
                        All rights reserved © 2022 Grim Vision Studios
                    </Typography>
                </Container>
            </Container>
        </>
    );
}

export default Footer;