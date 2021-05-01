import React from 'react';


const styles = {
    container: {
        display: 'flex',
        justifyContent: "center",
        alignContent: "center",
        flex: 1
    }
}
export default function NotFound() {
    return (
        <div style={styles.container}>
            <h1>Page Not Found</h1>
        </div>
    )
}