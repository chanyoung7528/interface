import { ReactNode } from 'react';
import './Card.css';

export interface CardProps {
  /** 카드 타이틀 */
  title?: string;
  /** 카드 내용 */
  children: ReactNode;
  /** 카드 너비 */
  width?: string | number;
  /** 그림자 효과 */
  shadow?: boolean;
}

export function Card({ 
  title, 
  children, 
  width = '100%', 
  shadow = true 
}: CardProps) {
  return (
    <div 
      className={`card ${shadow ? 'card--shadow' : ''}`}
      style={{ width }}
    >
      {title && <h3 className="card__title">{title}</h3>}
      <div className="card__content">{children}</div>
    </div>
  );
}

export default Card;

