const calculateShare = (a: number, b: number) => {
  let result = a / b;

  if (Number.isNaN(result)) {
    result = 0;
  }

  return result;
} 

const transformToPersent = (a: number) => a * 100;

export default (part: number, whole: number) => Math.round(transformToPersent(calculateShare(part, whole)));
