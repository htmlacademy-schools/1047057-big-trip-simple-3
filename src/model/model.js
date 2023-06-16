import { generatePoints } from '../mock/mock';

export default class Model {
  static POINT_AMOUNT = 5;
  #points = new Array(Model.POINT_AMOUNT);
  constructor () {
    this.#points = generatePoints(Model.POINT_AMOUNT);
  }

  get points() {
    return this.#points;
  }

  set points(points) {
    this.#points = points;
  }

  get pointsAmount() {
    return Model.POINT_AMOUNT;
  }
}
