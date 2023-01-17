import { Grid, Typography, Skeleton } from "@mui/material";
import { Container } from "@mui/system";
import HeroBanner from "../components/HeroBanner";
import ContactCard from "../components/ContactCard"
import Footer from "../components/Footer";

const About = () => {

    const developers = [
        {
            name: 'Bryce Montgomery',
            role: 'Chief Operating Officer',
            social1: 'https://twitter.com/BryceMontyGVS',
            // social2: 'https://www.instagram.com',
            desc: 'I have always had a passion for creating games, hiking, cars, and food.'
        },
        {
            name: 'Andrew DeRose',
            role: 'Level Designer',
            social1: 'https://www.youtube.com/user/themadbank6 ',
            social2: 'https://www.linkedin.com/in/andrew-derose-930411169/ ',
            desc: `What I do: I’m looking to become a full-on game designer… I love music, art, and editing. I got into editing videos a few years ago, and I plan to make funny content in videos and maybe in future games I design. I work as a Level Design, at Grim Vision Studios.`
        },
        {
            name: 'Chicago Cannon',
            role: '3D environment/Prop Artist',
            social1: 'https://www.linkedin.com/in/chicago-cannon-2bbba9243/',
            social2: 'https://www.instagram.com/darthmaum_/',
            desc: `My name is Chicago, but I'm fine with Chi (shy). I have two kids, soon to be
            three. I live on a farm in the Midwest with the cows and the corn, and I love all
            things video games! My favorite video game is Bloodborne, but I also love The
            Evil Within (both) and Call of Duty: Warzone. I won't indulge in the console war;
            they're all great! Nothing can beat good ol' Tetris or Pokémon, though. I'm a
            huge foodie; I make it a habit to try a new restaurant when I can afford to. So
            far, my favorite one is Screamers-- a cabaret in Lincoln, or The Monster Club in
            Omaha! I&#39;m currently attending Full Sail University to obtain a Bachelor&#39;s in
            Game Art, and I'm super excited to say that I'm a 3D environment/prop artist
            
            here at Grim Vision Studios!`
        },
        {
            name: 'Haylee Wagner',
            role: 'Animation Team Lead/Assistant Manager of Grim Studios',
            social1: 'ArtStation: https://www.artstation.com/timelessstormanimation',
            social2: 'https://www.linkedin.com/in/haylee-wagner-0a776989/',
            desc: `I've always had an interest in creating animations. It started with The Sims 2 when I was
            obsessed with music videos people made using the game. In my free time I play video
            games, stream to twitch, and do various crafts. I have a BA in Psychology and worked in
            that field for a while before eventually going back to school to get a degree in animation.
            I'm the animation team lead as well as an assistant manager with Grim Vision Studios.`
        },
        {
            name: 'Trang Le',
            role: 'Creative',
            social1: 'https://www.linkedin.com/in/trang-le-12b4ab24a',
            //social2: '',
            desc: `My name is Trang Le

            I am from Hanoi, Vietnam.
            I graduated from short film classes at TPD Cinema Talent Training and Development Center such as Acting Class, Scripting Class, and Film class. Meanwhile, I participated in supporting small independent film crews in various positions from actress, make-up artist, and costume, to producer assistant. “Phim ngan Cuoc Goi 2021” (published on Youtube) was the first short film I made with my classmates under the position of lead scriptwriter and producer.
            
            Currently, I am studying Creative Writing BFA at Full Sail University. I am happy to contribute my capability to help Grim Studio thrive with the goals it has set.
            `
        },
        {
            name: 'Michael Balthazar',
            role: 'Creative Writing Leader',
            social1: 'https://www.linkedin.com/in/michael-balthazar-a7707916b/',
            //social2: 'https://www.cheese.com',
            desc: `Hello there, my name is Michael Balthazar. I am the Creative Writing leader and I have a deep respect and love for horror. I joined Full Sail so that I can become a Game Designer and design wonderful horror games. Writing comes naturally for me, this allows me to give 110% to whatever story I am in.`
        },
        {
            name: 'Nick Towle',
            role: 'Character Modeling and Animation',
            social1: 'https://linktr.ee/artbynicktowle',
            //social2: '',
            desc: `I've always been interested in art for as long as I remember, but it was mostly a hobby for me. Growing up, there wasn’t a lot of encouragement for careers in the arts. Well after getting a business degree and trying that line of work for a while, I decided it was time to make a change and started at Full Sail for computer animation. Currently my interests are in character modeling. In my free time I DM a virtual Star Wars 5th Edition DND game, of which I create all the art and assets myself and also enjoy spending my time at the gym or playing piano.  I also run a small 2d art commission business on the side. For this project I will be working on the character model as well as animations.`
        },
        {
            name: 'Oz Bundrick',
            role: 'Creative Writing',
            social1: 'https://www.google.com',
            social2: 'https://www.cheese.com',
            desc: `My name is Oz Bundrick, online I'm known as Oracle_Arcana. I’m a writer, artist, streamer, etc. I have a BA in Political Science from the University of South Florida, and an MBA from Saint Leo University. Currently, I work for the Seminole Hard Rock Casino, but in my free time, I play video games, write, and work on the world-building for a future D&D game. I’m also working on a novel in my spare time.
            `
        },
        {
            name: 'Preston Woods',
            role: 'Lead Systems Designer/Assistant Manager',
            social1: 'https://gamedesign625093001.wordpress.com/ ',
            social2: 'https://www.linkedin.com/in/preston-michael-woods/ ',
            desc: `Hello there my name is Preston Woods, a forging game designer. I'm from the green state of Oregon and love the outdoors. I'm a creative mind that thinks outside the box, treading my own path to bring innovation to the systems and levels I help create. For Grim Vision Studios, I support the team as an assistant manager and lead systems designer. `
        },
        {
            name: 'Sam Drevo',
            role: 'Head of Managment/Level Designer',
            social1: 'https://twitter.com/samwiseth',
            social2: 'http://www.linkedin.com/in/sam-drevo-217a581b2',
            desc: `I was a line cook for a long time but always enjoyed video games and seeing how they are made so when the pandemic happened in 2020 I was put on leave from where I worked and started school at Full Sail University to become a videogame designer.`
        },
        {
            name: 'Shawn Singh',
            role: 'Level Designer',
            social1: 'http://www.linkedin.com/in/shawn-singh-201412248',
            social2: 'https://fulltech20204.wixsite.com/website',
            desc: `Hello my name is Shawn Singh, I am a game designer who loves anime and hope to work at least two triple A companies and indie companies that will bring joy to fellow players. I am a Level Designer at Grim Vision Studios. `
        },
        {
            name: 'Shelbi Baker',
            role: 'Music Producer',
            social1: 'https://twitter.com/Aura_Luna',
            //social2: '',
            desc: `Hi! My name is Shelbi Baker, but I’m better known online as Aura Luna. I’m a music producer, composer, sound designer, audio engineer, and vocalist. I’ve been a student at Full Sail University studying music since November 2020 and plan to graduate December 2022. In my free time, I play competitive Heroes of the Storm as well as a ton of casual games. I also enjoy traveling all over the world and going to music festivals.

            My role on the development team is music producer. Happy to be on board. :)
            `
        },
        {
            name: 'Maddie Gillis',
            role: 'Web Developer',
            social1:'https://github.com/maddiegillis',
            //social2:'',
            desc: `Heyo I'm Maddie. I'm a student with EdX through Universty of Oregon, and am currently studying to become a fullstack developer. In my spare time I can be found gaming, playing dnd, spoiling my dog Banana, or chasing after my nephew`
        }


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
                sx={{ my: 10 }}
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
                                social2={social2}
                            />
                        </Grid>

                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default About;