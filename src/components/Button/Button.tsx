import { ButtonHTMLAttributes } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 라벨 */
  label: string;
  /** 버튼 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 버튼 variant */
  variant?: 'primary' | 'secondary' | 'danger';
}

export function Button({
  label,
  size = 'medium',
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`btn btn--${size} btn--${variant} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;

