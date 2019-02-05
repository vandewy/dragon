var TRAITS = require('../data/traits.json');
var DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
    get birthdate() {
        return new Date().toString();
    },
    get randomTraits() {
        var traits = [];
        TRAITS.forEach(function (TRAITS) {
            var traitType = TRAITS.type;
            var traitValues = TRAITS.values;
            var traitValue = traitValues[Math.floor(Math.random() * traitValues.length)];
            traits.push({ traitType: traitType, traitValue: traitValue });
        });
        return traits;
    }
};
var Dragon = /** @class */ (function () {
    function Dragon(birthdate, nickname, traits) {
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    }
    return Dragon;
}());
module.exports = Dragon;
