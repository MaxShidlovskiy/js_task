function isValidUserData(req, res, next) {
    const { name, surname, email, pwd } = req.body

    if (!name) throw new Error(`name is not a name`)
    if (!isNaN(name)) throw new Error(`name is a number`)

    if (!surname) throw new Error(`is not a surname`)
    if (!isNaN(surname)) throw new Error(`surname is a number`)

    if (!email) throw new Error(`is not a email`)
    if (!/^[a-zA-Z0-9\_\-\.]+@[a-zA-Z]+\.[a-z]{1,5}/gm.test(pwd)) {
        throw new Error(`это не почта`)
    }

    if (!pwd) throw new Error(`is not a pwd`)
    if (pwd.length < 9) throw new Error(`короткий пароль`)
    next()
}

module.exports = {
    isValidUserData
}