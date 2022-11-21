import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

type MonsterArray = [(SimpleFighter | Fighter), ...(SimpleFighter | Fighter)[]];

class PVE extends Battle {
  constructor(
    public charecterFighter: (Fighter | Character),
    public monster: MonsterArray,
  ) {
    super(charecterFighter);
  }

  fight(): number {
    const monsters = this.monster;
    while (monsters.length > 0 && this.player.lifePoints > 0) {
      this.player.attack(monsters[0]);
      if (monsters[0].lifePoints < 0) {
        monsters.shift();
      }
      monsters.forEach((enemy) => enemy.attack(this.player));
    }
    return super.fight();
  }
}

export default PVE;