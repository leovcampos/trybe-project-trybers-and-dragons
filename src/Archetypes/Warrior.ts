import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private type_: EnergyType;
  private static ArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this.type_ = 'stamina';
    Warrior.ArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances(): number {
    return this.ArchetypeInstances;
  } 
}

export default Warrior;