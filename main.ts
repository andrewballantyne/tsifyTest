import TestExtended from './TestExtended'; // required from tsify to include the class

const obj:TestExtended = new TestExtended([1, 2, 2, 3, 5, 5, 5]);

obj.output();
obj.outputUnique();
