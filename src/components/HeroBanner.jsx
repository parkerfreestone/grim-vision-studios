import {
    Container,
    Box,
    Typography,
    Paper,
} from "@mui/material";
import React from "react";

const HeroBanner = ({ heading, text, height, image = null }) => {

    const styles = {
        heroBannerContainer: {
            height: (height === 'long' ? '60vh' : '30vh'),
            background: (image ? `url(${image})` : 'linear-gradient(45deg, #d32f2f 30%, #9f1a1a 90%)'),
            backgroundSize: 'cover',
            backgroundPosition: '25%',
            backgroundRepeat: 'no-repeat'
        },
        paperContainer: {
            background: 'rgba(0,0,0, 0.55)',
            color: '#fff',
        }
    }

    return (
        <Container
            maxWidth='xxl'
            style={styles.heroBannerContainer}
        >
            <Container
                maxWidth='xl'
                sx={{ height: '100%' }}
            >
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'start',
                        justifyContent: 'end',
                        flexDirection: 'column',
                    }}
                >
                    {heading
                        ? <Paper
                            style={styles.paperContainer}
                            sx={{
                                textAlign: {
                                    xs: 'center',
                                    md: 'left'
                                },
                                px: {
                                    xs: 1,
                                    md: 8
                                },
                                mb: {
                                    xs: 2,
                                    md: 4
                                },
                                py: { md: 3 },
                            }}
                        >
                            <Typography
                                variant='h2'
                                component='h1'
                                fontWeight='bold'
                            >
                                {heading}
                            </Typography>

                            {text
                                ? <Typography
                                    variant='overline'
                                >
                                    {text}
                                </Typography>
                                : null
                            }
                        </Paper>
                        : null
                    }

                </Box>
            </Container>
        </Container>
    );
}

export default HeroBanner;