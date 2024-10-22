import express from "express";
import { exec } from "child_process"; 
import path from "path"; // Used to construct the correct path to yt-dlp

const app = express();
const PORT = 3000;

// Specify the yt-dlp binary path
const ytDlpPath = path.resolve("/tmp/bin/yt-dlp");

app.get('/getMp3', async (req, res) => {
    const videoUrl = req.query.url;

    if (!videoUrl) {
        return res.status(400).send({ error: 'No video URL provided!' });
    }

    try {
        exec(`${ytDlpPath} ${videoUrl} --extract-audio --audio-format mp3 --get-url --no-check-certificates --no-warnings --prefer-free-formats --add-header referer:youtube.com --add-header user-agent:googlebot`, (error, stdout, stderr) => {
            if (error) {
                console.error('Error fetching MP3 URL:', error);
                return res.status(500).send({ error: 'Failed to fetch MP3 URL!' });
            }

            res.json({
                url: stdout.trim()
            });
        });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).send({ error: 'Failed to process request!' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
