import { LocationProvider } from '../contexts/LocationContext';
import LocationList from '../components/locations/LocationList';

const Locations = () => {
    return (
        <section>
            <h3
            style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '80px',
                height: '200%'
            }} >Spillverdener</h3>

            <LocationProvider>
                <LocationList></LocationList>
            </LocationProvider>          
        </section>
    )
}

export default Locations;