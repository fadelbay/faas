
/**
 * Send "Hello, World!"
 * @param req https://expressjs.com/en/api.html#req
 * @param res https://expressjs.com/en/api.html#res
 */

export const helloESM = (req, res) => {

    res.json(req.body)
};