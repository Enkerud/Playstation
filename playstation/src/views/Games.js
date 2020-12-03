import { GameProvider } from '../contexts/GameContext';
import GameList from '../components/games/GameList';

const Games = () => {
    return (
        <section>
            <h3
            style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '80px'
            }} >Alle spill</h3>
            <GameProvider>
                <GameList></GameList>
            </GameProvider>    
        </section>
    )
}

export default Games;