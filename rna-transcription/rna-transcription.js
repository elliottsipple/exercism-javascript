var DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function (dna) {
    var dnaToRna = makeHash('GCTA'.split(''), 'CGAU'.split(''));
    m = dna.split('');
    /* check dna for errors */
    m.forEach(e => {
        if (e != 'C' && e != 'G' && e != 'T' && e != 'A')
            throw Error("Invalid input");
    });
    /* If no errors, map each element of m to value in hash */
    return m.map(function (e) { return dnaToRna[e] }).join('');
}

/* Make hash when given arrays of keys, values */
function makeHash (keys, values) {
    var hash = {};
    keys.forEach(function (key, index) {
        hash[key] = values[index]
    });
    return hash;
}

module.exports = DnaTranscriber;