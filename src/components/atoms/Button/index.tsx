import React from 'react';
import Icon from '../Icon/index';
import { Button as ShadcnButton, buttonVariants } from '@/components/ui/button';
import { cn } from '@/shared/utils/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  href?: string | URL;
  target?: "_blank" | "_self" | "_parent" | "_top" | "framename";
  icon?: string | string[];
  wFull?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  active = false, href, target, icon, wFull = true, onClick, className, children, ...props
}, ref) => {
  return (
    <ShadcnButton
      ref={ref}
      onClick={onClick}
      data-href={href}
      data-target={target}
      variant={active ? "default" : "secondary"}
      className={cn(
        className,
        wFull ? 'w-full' : '',
        'md:w-auto',
      )}
      {...props}
    >
      {icon && (<Icon i={icon} color={active ? "#fff" : "#000"} />)} {children}
    </ShadcnButton>
  );
});
Button.displayName = "Button";

export default Button;
