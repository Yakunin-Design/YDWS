const check_language = (req, res, next) => { 
    const language = req.params.lang

    if (language === 'ru' || 'en') {
        const filename = req.path
        const lang = require('../lang' + filename)
        res.lang = lang 
        return next()
    }
    
    res.render('404')
}

module.exports = check_language