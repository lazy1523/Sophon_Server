function parseExpiresIn(expiresIn) {
    let unit = expiresIn.slice(-1);
    let amount = parseInt(expiresIn.slice(0, -1), 10);

    switch (unit) {
        case 's':
            return amount * 1000;
        case 'm':
            return amount * 60 * 1000;
        case 'h':
            return amount * 60 * 60 * 1000;
        case 'd':
            return amount * 24 * 60 * 60 * 1000;
        default:
            throw new Error(`Unknown time unit in "${expiresIn}"`);
    }
}

export default parseExpiresIn;