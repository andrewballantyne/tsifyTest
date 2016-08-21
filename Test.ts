/// <reference path="uniq.d.ts" /> // TS Compile include
import * as uniq from 'uniq'; // Browser-Use include

abstract class Test {
  private data:number[];

  constructor(data:number[]) {
    this.data = this.modify(data);
  }

  public output():void {
    console.log('data-as-is...', this.data);
  }

  public outputUnique():void {
    console.log('\'uniq\' library...', uniq(this.data));
  }

  protected abstract modify(data:number[]):number[];
}

export default Test;
