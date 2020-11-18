import GameItem from './GameItem';
import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';


const GameList = () => {

    const { games } = useContext( GameContext );
    const [ gamesState, setGames ] = games;

    const generateGames = () => {
        return gamesState.map( ( game, i ) => {
            return <GameItem key={i} { ...game } />
        } );
    }


    return (
        <section>
            <Row>
                { generateGames() }
            </Row>
        </section>
    )
}

export default GameList;
