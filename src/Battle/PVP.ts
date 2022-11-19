import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    public player: Fighter,
    public enemy: Fighter,
  ) { super(player); }

  fight(): number {
    while (this.player.lifePoints > 0 && this.enemy.lifePoints > 0) {
      this.player.attack(this.enemy);

      this.enemy.attack(this.player);
    }

    return this.player.lifePoints > 0 ? 1 : -1;
  }
}

export default PVP;
