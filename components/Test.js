import React, { useState } from "react";

const Test = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isToggled ? "Kapat" : "Aç"}</button>
      <p>Durum: {isToggled ? "Açık" : "Kapalı"}</p>
    </div>
  );
};

export default Test;
