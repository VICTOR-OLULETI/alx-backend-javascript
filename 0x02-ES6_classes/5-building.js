export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  // getter for sqft
  get sqft() {
    return this._sqft;
  }

  // setter for sqft
  set sqft(newsqft) {
    this._sqft = newsqft;
  }
}
