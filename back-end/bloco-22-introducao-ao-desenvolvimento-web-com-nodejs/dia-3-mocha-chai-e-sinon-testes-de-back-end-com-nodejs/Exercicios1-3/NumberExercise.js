function verifyNumber (number) {
    if(typeof number !== 'number') {
        return 'O valor deve ser um número';
    }

    if (number > 0) {
        return 'Positivo';
    } else if (number < 0) {
        return 'Negativo';
    } else {
        return 'Neutro';
    }
}

module.exports = verifyNumber;