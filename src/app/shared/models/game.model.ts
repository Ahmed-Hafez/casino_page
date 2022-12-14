export interface Game {
  id: string;
  name: string;
  image: string;
  categories: string[];
  isJackpot?: boolean;
  amount?: number;
}
