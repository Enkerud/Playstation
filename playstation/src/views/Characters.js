import { useState, useEffect } from 'react';



const styles = {
    sectionStyle: {
        body: "100%",
        height: "1000px"
    }
}

const Characters = () => {
    return (
        <section style={styles.sectionStyle} >
            <h3
            style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '80px'
            }} >Alle Karakterer</h3>
        </section>
    )
}

export default Characters;