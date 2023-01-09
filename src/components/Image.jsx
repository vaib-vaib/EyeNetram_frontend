import React from 'react'

export function Image() {
    const styles = {
        logoimg: {
            position: "absolute",
            left: "1040px",
            top: "200px",
            borderRadius : "8px", 
            zIndex: "2",
            width: "25%",
            height: "500px",
        },
      };
    return (
        <div style={styles.logoimg}>
            <img src="assets\images\logo.jpg" alt="Image loading"/>
        </div>
    )
}
