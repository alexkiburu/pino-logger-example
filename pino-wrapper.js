

const LogOnRequest = (req, res, next) => {
    req.id = 1;
    res.set('X-REQUEST-ID', 1);
    next();
};

export default LogOnRequest;