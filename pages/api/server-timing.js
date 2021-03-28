export default function handler(req, res) {
    res.statusCode = 200;
    // cache 5min
    res.setHeader('Cache-Control', 'max-age=5, s-maxage=10');
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    // Server Timing
    res.setHeader('Server-Timing', `unixTime;desc="Unix TimeStamp";dur=${Date.now()}`);
    res.send();
}
