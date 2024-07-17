import { ComponentProps } from "react";

interface LinkProps extends ComponentProps<'a'> {}

export function Link(props: LinkProps) {
  return (
    <a 
      {...props}
      className="rounded-md shadow-md bg-orange-400/20 p-2"
    >
      {props.children}
    </a>
  )
}