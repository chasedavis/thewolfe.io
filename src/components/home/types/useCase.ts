export type Position = 'left' | 'right';

export interface UseCase {
  title: string;
  description: string;
  backgroundImage: string;
  position: Position;
  buttonText: string;
  buttonHref: string;
}