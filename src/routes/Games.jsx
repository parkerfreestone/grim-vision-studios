import HeroBanner from "../components/HeroBanner";
import { Container } from "@mui/material";
import GameContainer from "../components/GameContainer";

const Games = () => {
  return (
    <>
      <HeroBanner
        heading="Games"
        // text='Example text for page heading...'
        // height='long'
        // image={'./home-page.jpg'}
      />
      <Container maxWidth="xl">
        <GameContainer
          title="Game Name"
          desc="Lorem Ipsum dolar sit amet, lorem dolar sit amet ipsum dolar maset
          siotpum atep cartof. Amet ipsum dolar maset siotpum atep cartof. Lorem
          Ipsum dolar sit amet, lorem dolar sit amet ipsum dolar maset siotpum
          atep cartof. Amet ipsum dolar maset siotpum atep cartof. Lorem Ipsum
          dolar sit amet, lorem dolar sit amet ipsum dolar maset siotpum atep
          cartof. Amet ipsum dolar maset siotpum atep cartof."
          playtestingLink="/playtesting"
        />
      </Container>
    </>
  );
};

export default Games;