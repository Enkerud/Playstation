import GameItem from './GameItem';
import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';

const GameList = () => {
    const { games } = useContext( GameContext );
    const [ gamesState ] = games;

    // Går her gjennom games i GameContexten med map.
    const generateGames = () => {
        return gamesState.map( ( game, i ) => {
            return <GameItem key={i} { ...game } />
        } );
    }

    return (
        <section>
            <Row  xs={ 1 } sm={ 1 } md={ 1 } lg={ 2 } xl={ 3 } >
                { generateGames() }
            </Row>
        </section>
    )
}

export default GameList;