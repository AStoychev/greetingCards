const jwt = require('../lib/jsonwebtoken');
const SECRET = 'secretisnotverysecretbutissomesecretwemusthave';

// With this code we can find user id and after that we can save user id in card as card owner, this information is from network from browser

exports.authentication = () => async (req, res, next) => {
    const token = req.header('X-Authorization');

    if (token) {
        try {
            const decodetToken = await jwt.verify(token, SECRET);

            req.user = decodetToken;
            // res.locals.isAuthenticated = true;
            // res.locals.user = decodetToken;
        } catch (err) {
            return res.status(401).json({ ok: false });
        }
    }

    next();
}