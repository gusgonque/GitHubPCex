const HOST = "https://api.github.com";

const headers = () => ({
    Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
});

async function handler(req, res) {
    const { username } = req.query;
    const url = `${HOST}/users/${username}`;
    const response = await fetch(url, { headers: headers() });
    const user = await response.json;
    res.status(200).json(user);
}