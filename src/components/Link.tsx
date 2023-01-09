import React from "react";

interface LinkProps {
  text: string;
  href?: string;
}

function Link(props: LinkProps) {
  return <h2>{props.text}</h2>;
}

export { Link };
