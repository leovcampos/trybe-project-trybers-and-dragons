import Monster from './Monster';

class Dragon extends Monster {
  constructor(
    private _name: string = 'Dragon',
  ) {
    super(999, 88);
  }

  get name(): string {
    return this._name;
  }
}

export default Dragon;
