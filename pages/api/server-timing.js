export default function handler(req, res) {
    res.statusCode = 200;
    // cache 5min
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    // Server Timing
    res.setHeader('Server-Timing', `unixTime;desc="Unix TimeStamp";dur=${Date.now()}`);
    res.send();
}
