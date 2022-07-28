import React from "react";

import {
    PeopleAltRounded,
    VolunteerActivism,
} from "@mui/icons-material";
import {
    Grid,
    Container,
    Typography,
    Button,
    Stack,
} from "@mui/material";

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
                <Container maxWidth='xl'>
                    <Grid
                        container
                        spacing={15}
                    >
                        <Grid
                            item
                            xl={3}
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
                            xl={3}
                        >
                            <Stack spacing={1}>
                                <Typography
                                    variant='h5'
                                    style={textStyles.footerHeading}
                                >
                                    Explore
                                </Typography>
                                <a
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    Home
                                </a>
                                <a
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    About
                                </a>
                                <a
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    Games
                                </a>
                                <a
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    Community
                                </a>
                            </Stack>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                        >
                            <Stack spacing={1}>
                                <Typography
                                    variant='h5'
                                    style={textStyles.footerHeading}
                                >
                                    Legal
                                </Typography>
                                <a
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    Privacy
                                </a>
                                <a
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    Terms of Service
                                </a>
                            </Stack>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                        >
                            <Stack spacing={1}>
                                <Button
                                    variant='contained'
                                    color='error'
                                    endIcon={<PeopleAltRounded />}
                                >
                                    Join the Community
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