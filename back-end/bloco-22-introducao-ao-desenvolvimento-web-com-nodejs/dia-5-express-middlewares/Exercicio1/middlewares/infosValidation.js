const infosValidation = (req, res, next) => {
    const { infos } = req.body;
    if (!infos) {
        return res.status(400).json({
            "message": "O campo infos é obrigatório",
        });
    }
    next();
}

const saleDateValidation = (req, res, next) => {
    const { infos: { saleDate } } = req.body;
    const date_regex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

    if (!date_regex.test(saleDate)) {
        return res.status(400).json({
            "message": "O campo saleDate não é uma data válida",
        });
    }
    if (!saleDate) {
        return res.status(400).json({
            "message": "O campo saleDate é obrigatório",

        });
    }
    next();
}

module.exports = { infosValidation, saleDateValidation };