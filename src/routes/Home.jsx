import HeroBanner from "../components/HeroBanner";

const Home = () => {
    return (
        <>
            <HeroBanner
                heading='Home Page'
                text='Example text for page heading...'
                height='long'
                image={require('../images/home/homeImage.jpg')}
            />
        </>
    );
}

export default Home;