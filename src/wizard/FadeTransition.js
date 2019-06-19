import React from 'react';
import './FadeTransition.scss';

const FadeTransition = (props) => {
  const extendedChildren = React.Children.map(props.children, (child) => {
    const {props: {className}} = child;

    return className ? React.cloneElement(
      child,
      {
        className: `${className} FadeTransition`,
      }
    ) : child;
  });

  return (
    <div>{extendedChildren}</div>
  );
};

export default FadeTransition;
