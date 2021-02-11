import React from 'react';

const styles = {
    root: {
        position: 'relative',
        padding: '0 20px',
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    textRed: {
        marginLeft: 10,
        color: '#ff0000',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    textGreen: {
        marginLeft: 10,
        color: '#64dd17',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
}
const PriceCells = ({value}) => {
    return (
        <div style={styles.root}>
            {
                value > 0 ?
                    <React.Fragment>
                        <span style={styles.textGreen}>{value}</span>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <span style={styles.textRed}>{value}</span>
                    </React.Fragment>
            }
        </div>
    )
}

export default PriceCells;