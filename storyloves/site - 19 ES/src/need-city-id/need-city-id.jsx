import React from "react";

const NeedntCityId = ({ setCity }) => {
  const onChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <input onChange={onChange} type="text" placeholder="Ubicación" />
    </>
  );
};

export default NeedntCityId;
