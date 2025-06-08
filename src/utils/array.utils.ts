export function clone<Type>(a: Type[]): Type[] {
  return [...a];
}

export function clone2d<Type>(a: Type[][]): Type[][] {
  const retVal: Type[][] = [];
  for (let x = 0; x < a.length; x++) {
    retVal[x] = clone(a[x]);
  }
  return retVal;
}

export function equals<Type>(a: Type[], b: Type[]): boolean {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

export function equals2d<Type>(a: Type[][], b: Type[][]): boolean {
  if (a.length !== b.length) {
    return false;
  }

  for (let x = 0; x < a.length; x++) {
    if (equals(a[x], b[x]) === false) {
      return false;
    }
  }

  return true;
}