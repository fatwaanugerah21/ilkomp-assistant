import React from "react";

export const OtherMenuItem = ({ onClick, text }) => {
   return (
      <div style={styles.otherMenuItem} onClick={onClick}>
         {text}
      </div>
   );
};

const styles = {
   otherMenuItem: {
      display: "flex",
      cursor: "pointer",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      margin: "1rem",
      maxHeight: "120px",
      backgroundColor: "blueviolet",
      fontSize: "18pt",
      textAlign: "center",
      animation: "slide-in 200ms",
      color: "white",
   },
};
