import { BugReportRounded, Computer, PeopleAltRounded, WaterfallChartRounded } from "@mui/icons-material";
import { Grid, Container, Typography } from "@mui/material";
import { IconCard } from "../components/IconCard";

const Home = () => {

    const gradientText = {
        root: {
            background: "-webkit-linear-gradient(45deg, #1976d2 30%, #0d47a1 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        }
    }

    return (
        <>
            <Container
                maxWidth='xl'
                sx={{ mt: 5 }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Typography
                            variant="h2"
                            component="h1"
                            fontWeight='bold'
                        >
                            This will be <br />a <span style={gradientText.root}>very nice </span><br /> slogan.
                        </Typography>
                        <Typography
                            variant="body1"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                </Grid>
                <Typography
                    variant="h3"
                    component="h2"
                    fontWeight='bold'
                >
                    <span style={gradientText.root}>Explore</span> our studio
                </Typography>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={6} md={3}>
                        <IconCard
                            icon={<Computer color='primary' />}
                            text='From art to programming, meet our developers!'
                            heading='Our Developers'
                        // bg='#E86A92'
                        />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <IconCard
                            icon={<WaterfallChartRounded color='primary' />}
                            text='Learn what sets us apart from other Development Studios.'
                            heading='Our Method'
                        // bg='#F7E733'
                        />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <IconCard
                            icon={<PeopleAltRounded color='primary' />}
                            text='Chat with other members, and enjoy exclusive updates!'
                            heading='Join Our Community'
                        // bg='#41E2BA'
                        />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <IconCard
                            icon={<BugReportRounded color='primary' />}
                            text='Want exclusive access into our games? Learn more about playtesting here.'
                            heading='Play Testing'
                        // bg='#2B2D42'
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Home;