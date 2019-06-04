import React from 'react';

const FadeTransition = (props) => {
  const extendedChildren = React.Children.map(props.children, (child) => {
    const {props: {className}} = child;

    return className ? React.cloneElement(
      child,
      {
        className: `${className} fade-in`,
      }
    ) : child;
  });

  return (
    <div>{extendedChildren}</div>
  );
};

export default FadeTransition;
