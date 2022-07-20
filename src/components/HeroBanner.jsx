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
            height: (height === 'long' ? '60vh' : '20vh'),
            background: (image ? `url(${image})` : 'linear-gradient(45deg, rgba(109,114,195,1) 0%, rgba(89,65,169,1) 100%)'),
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
                                px: { md: 8 },
                                py: { md: 3 },
                                mb: { md: 4 },
                                textAlign: { xs: 'center', md: 'left' }
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