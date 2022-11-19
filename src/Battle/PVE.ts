import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';
// import Monster from '../Monster';

type MonsterArray = [(SimpleFighter | Fighter), ...(SimpleFighter | Fighter)[]];

class PVE extends Battle {
  constructor(
    public charecterFighter: (Fighter | Character),
    public monster: MonsterArray,
  ) {
    super(charecterFighter);
  }
}

export default PVE;