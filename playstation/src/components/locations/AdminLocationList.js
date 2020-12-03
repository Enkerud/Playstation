import AdminLocationItem from './AdminLocationItem';
import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import { LocationContext } from '../../contexts/LocationContext';


const AdminLocationList = () => {

    const { locations } = useContext( LocationContext );
    const [ locationsState, setLocations ] = locations;

    const generateLocations = () => {
        return locationsState.map( ( location, i ) => {
            return <AdminLocationItem key={i} { ...location } />
        } );
    }
    

    return (
        <section>
            <Row   xs={ 1 } sm={ 2 } md={ 3 } lg={ 4 } xl={ 4 } >
                { generateLocations() }
            </Row>
        </section>
    )
    
}

export default AdminLocationList;
