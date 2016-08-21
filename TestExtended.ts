import Test from './Test'; // required from tsify to include the class

class TestExtended extends Test {
  protected modify(data:number[]):number[] {
    data.push(-1);
    return data;
  }
}

export default TestExtended;
