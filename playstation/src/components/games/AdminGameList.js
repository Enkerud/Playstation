import AdminGameItem from './AdminGameItem';
import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';


const AdminGameList = () => {

    const { games } = useContext( GameContext );
    const [ gamesState, setGames ] = games;

    const generateGames = () => {
        return gamesState.map( ( game, i ) => {
            return <AdminGameItem key={i} { ...game } />
        } );
    }


    return (
        <section>
            <Row   xs={ 1 } sm={ 2 } md={ 3 } lg={ 3 } xl={ 4 } >
                { generateGames() }
            </Row>
        </section>
    )
}

export default AdminGameList;
