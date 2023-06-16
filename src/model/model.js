import { generatePoints } from '../mock/mock';

export default class Model {
  static POINT_AMOUNT = 5;
  constructor () {
    this.points = generatePoints(Model.POINT_AMOUNT);
  }

  getPoints() {
    return this.points;
  }

  getPointsAmount() {
    return Model.POINT_AMOUNT;
  }
}
