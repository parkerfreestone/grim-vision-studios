import { Paper, Grid, Typography, Box, Stack, IconButton, Skeleton, Badge, Divider } from "@mui/material";
import { Container } from "@mui/system";
import HeroBanner from "../components/HeroBanner";
import ContactCard from "../components/ContactCard"
import Footer from "../components/Footer";

const About = () => {

    const developers = [
        {
            name: 'Parker Freestone',
            role: 'Website Developer',
            social1: 'https://www.google.com',
            social2: 'https://www.cheese.com',
            desc: 'A very small description about the developer will go here.'
        },
        {
            name: 'Parker Freestone',
            role: 'Website Developer',
            social1: 'https://www.google.com',
            social2: 'https://www.cheese.com',
            desc: 'A very small description about the developer will go here.'
        },
        {
            name: 'Parker Freestone',
            role: 'Website Developer',
            social1: 'https://www.google.com',
            social2: 'https://www.cheese.com',
            desc: 'A very small description about the developer will go here.'
        },
        {
            name: 'Parker Freestone',
            role: 'Website Developer',
            social1: 'https://www.google.com',
            social2: 'https://www.cheese.com',
            desc: 'A very small description about the developer will go here.'
        },
        {
            name: 'Parker Freestone',
            role: 'Website Developer',
            social1: 'https://www.google.com',
            social2: 'https://www.cheese.com',
            desc: 'A very small description about the developer will go here.'
        },
        {
            name: 'Parker Freestone',
            role: 'Website Developer',
            social1: 'https://www.google.com',
            social2: 'https://www.cheese.com',
            desc: 'A very small description about the developer will go here.'
        },
        {
            name: 'Parker Freestone',
            role: 'Website Developer',
            social1: 'https://www.google.com',
            social2: 'https://www.cheese.com',
            desc: 'A very small description about the developer will go here.'
        },
        {
            name: 'Parker Freestone',
            role: 'Website Developer',
            social1: 'https://www.google.com',
            social2: 'https://www.cheese.com',
            desc: 'A very small description about the developer will go here.'
        },
    ]

    return (
        <>
            <HeroBanner
                heading='About Us'
            // text='Example text for page heading...'
            // height='long'
            // image={'./home-page.jpg'}
            />

            <Container
                maxWidth='xxl'
                sx={{ bgcolor: '#f7f7f7' }}
            >
                <Container
                    maxWidth='xl'
                    sx={{ py: 5 }}
                >
                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                        Method
                    </Typography>
                    <Typography variant="body1">
                        The things that make our studio different.
                    </Typography>
                    <Grid
                        container
                        spacing={5}
                        sx={{ my: 1 }}
                    >
                        <Grid
                            item
                            md={4}
                            xs={12}
                        >
                            <Skeleton
                                variant="rectangle"
                                height={200}
                            />
                        </Grid>
                        <Grid
                            item
                            md={4}
                            xs={12}
                        >
                            <Skeleton
                                variant="rectangle"
                                height={200}
                            />
                        </Grid>
                        <Grid
                            item
                            md={4}
                            xs={12}
                        >
                            <Skeleton
                                variant="rectangle"
                                height={200}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Container>

            <Container
                maxWidth="xl"
                sx={{ my: 5 }}
            >
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    Team
                </Typography>
                <Typography variant="body1">
                    Our games are carefully curated by these fine individuals.
                </Typography>
                <Grid
                    container
                    spacing={5}
                    sx={{ marginTop: 1 }}
                >
                    {developers.map(({ name, role, social1, social2, desc }) => (
                        <Grid
                            item
                            xl={3}
                            md={4}
                            sm={6}
                            xs={12}
                        >
                            <ContactCard
                                name={name}
                                role={role}
                                desc={desc}
                                social1={social1}
                                socail2={social2}
                            />
                        </Grid>

                    ))}
                </Grid>
            </Container>

            <Footer />
        </>
    );
}

export default About;