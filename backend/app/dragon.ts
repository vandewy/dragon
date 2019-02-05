const TRAITS = require('./traits.json');

const DEFAULT_PROPERTIES = {
  nickname: 'unnamed',
  get birthdate(){
    return new Date().toString()
  },
  get randomTraits(){
    const traits = [];

    TRAITS.forEach(TRAITS => {
      const traitType = TRAITS.type;
      const traitValues = TRAITS.values;
      const traitValue = traitValues[Math.floor(Math.random() * traitValues.length)];

      traits.push({traitType, traitValue});

    });
    return traits;
  }
}

class Dragon{

  birthdate: string;
  nickname: string;
  traits;

  constructor(birthdate: string, nickname: string, traits ){
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
  }

}

module.exports = Dragon;
