import React from "react";

const ArrowComponent = ({name, ghgh, children}) => {
  return (
    <>
      <div className="react">
        <div>{name || "We don't have props.name"}</div>
        <div>{ghgh || "We don't have props.ghgh value"}</div>
        <div>{name}!!</div>
        <br/>
        <div>children은 {children}</div>
      </div>
    </>
  );
};

ArrowComponent.defaultProps = {
    name: 'defaultName',
    ghgh: 'defaultghgh'
};

export default ArrowComponent;
