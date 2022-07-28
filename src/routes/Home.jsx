import {
    ArrowRightAltRounded,
    BugReportRounded,
    Computer,
    PeopleAltRounded,
    SupportAgentRounded,
    WaterfallChartRounded
} from "@mui/icons-material";
import {
    Grid,
    Container,
    Typography,
    Button,
    Stack,
    IconButton
} from "@mui/material";
import {
    faYoutube,
    faTwitch,
    faTwitter,
    faDiscord,
    faTiktok
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconCard } from "../components/IconCard";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

const Home = () => {

    const gradientText = {
        root: {
            background: "-webkit-linear-gradient(45deg, #d32f2f 30%, #9f1a1a 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        }
    }

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
                maxWidth='xl'
                sx={{ mt: 15, py: 10 }}
            >
                <Grid container spacing={8}>
                    <Grid item xs={12} lg={7}>
                        <Typography
                            variant="h2"
                            component="h1"
                            fontWeight='bold'
                        >
                            This is where a <span style={gradientText.root}>very nice</span> slogan will go.
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{ mt: 1 }}
                        >
                            Lorem Ipsum dolar sit amet, lorem dolar sit amet ipsum dolar maset siotpum atep cartof. Amet ipsum dolar maset siotpum atep cartof.
                        </Typography>
                        <Stack
                            direction='row'
                            gap={2}
                        >
                            <Button
                                color='error'
                                variant='contained'
                                endIcon={<ArrowRightAltRounded />}
                                sx={{ mt: 3 }}
                                size='large'
                                disableElevation
                            >
                                <Link
                                    to="/games"
                                    style={textStyles.link}
                                >
                                    Projects
                                </Link>
                            </Button>
                            <Button
                                color='error'
                                variant='outlined'
                                size='large'
                                endIcon={<SupportAgentRounded />}
                                sx={{ mt: 3 }}
                            >
                                <Link
                                    to="/community"
                                    style={textStyles.redLink}
                                >
                                    Support
                                </Link>
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid
                        sx={{ display: { xs: 'none', lg: 'block' } }}
                        md={5}
                        item
                    >
                        <svg viewBox="0 0 535 337" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="40" y="34" width="495" height="303" rx="7" fill="#afafaf" fill-opacity="0.34" />
                            <rect x="0.5" y="0.5" width="494" height="302" rx="6.5" stroke="black" />
                            <rect x="13" y="15" width="495" height="303" rx="7" fill="#d32f2f" fill-opacity="0.41" />
                            <path d="M13 22C13 18.134 16.134 15 20 15H501C504.866 15 508 18.134 508 22V42H13V22Z" fill="#d32f2f" />
                            <circle cx="29.5" cy="28.5" r="5.5" fill="white" />
                            <circle cx="45.5" cy="28.5" r="5.5" fill="white" />
                            <circle cx="61.5" cy="28.5" r="5.5" fill="white" />
                            <rect x="24" y="53" width="84" height="164" rx="7" fill="#d32f2f" />
                            <rect x="411" y="53" width="84" height="250" rx="7" fill="#d32f2f" />
                            <rect x="24" y="226" width="380" height="77" rx="7" fill="#d32f2f" />
                        </svg>

                    </Grid>
                </Grid>

            </Container>
            <Container
                maxWidth='xxl'
                sx={{ bgcolor: '#f7f7f7', py: 10 }}
            >
                <Container
                    maxWidth='xl'
                >
                    <Typography
                        variant="h3"
                        component="h2"
                        fontWeight='bold'
                        sx={{ mb: 3 }}
                    >
                        <span style={gradientText.root}>Explore</span> our studio
                    </Typography>
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid item xs={12} md={3} sx={{ height: '-webkit-fill-available' }}>
                            <IconCard
                                icon={<Computer color='error' />}
                                text='From art to programming, meet our developers!'
                                heading='Our Developers'
                                url='/developers'
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <IconCard
                                icon={<WaterfallChartRounded color='error' />}
                                text='Learn what sets us apart from other Development Studios.'
                                heading='Our Method'
                                url='/method'
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <IconCard
                                icon={<PeopleAltRounded color='error' />}
                                text='Chat with other members, and enjoy exclusive updates!'
                                heading='Join Our Community'
                                url='/community'
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <IconCard
                                icon={<BugReportRounded color='error' />}
                                text='Sign up for pre-release testing (comming soon)!'
                                heading='Play Testing'
                                url='/playtesting'
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <Container
                maxWidth="xl"
                sx={{ my: 10 }}
            >
                <Typography
                    variant="h3"
                    component="h2"
                    fontWeight='bold'
                    sx={{ textAlign: 'center', mb: 3 }}
                >
                    Follow Us
                </Typography>
                <Stack
                    spacing={{ sm: 10 }}
                    direction='row'
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <IconButton
                        sx={{ color: '#6441A5' }}
                        aria-label="twitch"
                    >
                        <FontAwesomeIcon
                            size='2x'
                            icon={faTwitch}
                        />
                    </IconButton>
                    <IconButton
                        aria-label="instagram"
                        sx={{ color: '#000' }}
                    >
                        <FontAwesomeIcon
                            size='2x'
                            icon={faTiktok}
                        />
                    </IconButton>
                    <IconButton
                        sx={{ color: '#1DA1F2' }}
                        aria-label="twitter"
                    >
                        <FontAwesomeIcon
                            size='2x'
                            icon={faTwitter}
                        />
                    </IconButton>
                    <IconButton
                        aria-label="youtube"
                        sx={{ color: '#FF0000' }}
                    >
                        <FontAwesomeIcon
                            size='2x'
                            icon={faYoutube}
                        />
                    </IconButton>
                    <IconButton
                        aria-label="discord"
                        sx={{ color: '#738ADB' }}
                    >
                        <FontAwesomeIcon
                            size='2x'
                            icon={faDiscord}
                        />
                    </IconButton>
                </Stack>
            </Container>

            <Footer />

        </>
    );
}

export default Home;