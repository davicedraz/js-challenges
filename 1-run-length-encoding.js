function encodeString(input) {
  const caracteres = input.split(""); // array of caracters
  const caracteresTimes = {}; //caracteresTimes = {"A": 15, "B": 2, "C": 4}

  const result = [];

  caracteres.forEach(caracter => {
    if (!caracteresTimes[caracter]) caracteresTimes[caracter] = 0;
    caracteresTimes[caracter]++;
  });

  Object.keys(caracteresTimes).forEach(key => {
    const times = caracteresTimes[key]
    const numberOfPairs = Math.floor(times / 9);

    if (times < 10) return result.push(`${times}${key}`);

    for (let i = 0; i < numberOfPairs; i++) {
      result.push(`${9}${key}`);
    }

    result.push(`${times - (numberOfPairs * 9)}${key}`);
  });

  return result.join('');
}
