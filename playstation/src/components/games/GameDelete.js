import axios from 'axios';

const GameDelete = ( props ) => {

    const deleteGame = () => {
        const url = "https://127.0.0.1:5001/games";

        axios.delete(`${url}/${props.id}`)
    }

    return (
        <article>
            <h3> {props.name} </h3>
            <input onClick={ deleteGame } type="button" value="Slett Game" />
        </article>
    )
}

export default GameDelete;