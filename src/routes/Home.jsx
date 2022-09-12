import React from "react";
import {
  ArrowRightAltRounded,
  BugReportRounded,
  Computer,
  PeopleAltRounded,
  WaterfallChartRounded,
} from "@mui/icons-material";
import {
  Grid,
  Container,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import {
  faYoutube,
  faTwitch,
  faTwitter,
  faDiscord,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconCard } from "../components/IconCard";
import { Link } from "react-router-dom";

import VideoCard from "../components/VideoCard";

const Home = () => {
  const gradientText = {
    root: {
      background: "-webkit-linear-gradient(45deg, #d32f2f 30%, #9f1a1a 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  };

  const textStyles = {
    link: {
      color: "#fff",
      textDecoration: "none",
    },
    redLink: {
      color: "#d32f2f",
      textDecoration: "none",
    },
    footerHeading: {
      color: "#fff",
      fontWeight: "bold",
      marginBottom: 10,
    },
    footerText: {
      color: "#f7f7f7",
    },
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: { sm: 8, md: 15 }, py: 10 }}>
        <Grid container spacing={8}>
          <Grid item xs={12} lg={7}>
            <Typography variant="h2" component="h1" fontWeight="bold">
              This is where a <span style={gradientText.root}>very nice</span>{" "}
              slogan will go.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Lorem Ipsum dolar sit amet, lorem dolar sit amet ipsum dolar maset
              siotpum atep cartof. Amet ipsum dolar maset siotpum atep cartof.
            </Typography>
            <Stack direction="row" gap={2}>
              <Button
                color="error"
                variant="outlined"
                endIcon={<ArrowRightAltRounded />}
                sx={{ mt: 3 }}
                size="large"
                disableElevation
              >
                <Link to="/games" style={textStyles.redLink}>
                  Projects
                </Link>
              </Button>
              {/* <Button
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
                                    Community
                                </Link>
                            </Button> */}
            </Stack>
          </Grid>
          <Grid sx={{ display: { xs: "none", lg: "block" } }} md={5} item>
            <VideoCard />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xxl" sx={{ bgcolor: "#f7f7f7", py: 10 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            <span style={gradientText.root}>Explore</span> our studio
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} sx={{ height: "-webkit-fill-available" }}>
              <IconCard
                icon={<Computer color="error" />}
                text="From art to programming, meet our developers!"
                heading="Our Developers"
                url="/about"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <IconCard
                icon={<WaterfallChartRounded color="error" />}
                text="Learn what sets us apart from other Development Studios."
                heading="Our Method"
                url="/about"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <IconCard
                icon={<PeopleAltRounded color="error" />}
                text="Chat with other members, and enjoy exclusive updates!"
                heading="Join Our Community"
                url="https://discord.gg/8VTRKtj3dN"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <IconCard
                icon={<BugReportRounded color="error" />}
                text="Sign up for pre-release testing (comming soon)!"
                heading="Play Testing"
                url="/playtesting"
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Container maxWidth="xl" sx={{ my: 10 }}>
        <Typography
          variant="h3"
          component="h2"
          fontWeight="bold"
          sx={{ textAlign: "center", mb: 3 }}
        >
          Follow Us
        </Typography>
        <Stack
          spacing={{ sm: 10 }}
          direction="row"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            sx={{ color: "#6441A5" }}
            aria-label="twitch"
            href="https://www.twitch.tv/grimvisionstudios"
            target="_blank"
          >
            <FontAwesomeIcon size="2x" icon={faTwitch} />
          </IconButton>
          <IconButton
            aria-label="instagram"
            sx={{ color: "#000" }}
            href="https://www.tiktok.com/@grimvisionstudios?lang=en"
            target="_blank"
          >
            <FontAwesomeIcon size="2x" icon={faTiktok} />
          </IconButton>
          <IconButton
            sx={{ color: "#1DA1F2" }}
            aria-label="twitter"
            href="https://twitter.com/GrimVisionGames"
            target="_blank"
          >
            <FontAwesomeIcon size="2x" icon={faTwitter} />
          </IconButton>
          <IconButton
            aria-label="youtube"
            sx={{ color: "#FF0000" }}
            href="https://www.youtube.com/channel/UCIQAc5_2hF29sbOrmjSjQ7g"
            target="_blank"
          >
            <FontAwesomeIcon size="2x" icon={faYoutube} />
          </IconButton>
          <IconButton
            aria-label="discord"
            sx={{ color: "#738ADB" }}
            href="https://discord.gg/8VTRKtj3dN"
            target="_blank"
          >
            <FontAwesomeIcon size="2x" icon={faDiscord} />
          </IconButton>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
