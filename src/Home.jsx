import HeroBanner from "./components/HeroBanner";
import NavigationBar from "./components/NavigationBar";


const Home = () => {
    return (
        <>
            <NavigationBar />
            <HeroBanner
                heading='Example Heading'
                text='Example text for page heading...'
                height='long'
                image={'./home-page.jpg'}
            />
        </>
    );
}

export default Home;