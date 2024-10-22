import express from "express";
import ytdl from "youtube-dl-exec"; 
const app = express();
const PORT = 3000;
const ytDlpPath = 'node_modules/youtube-dl-exec/bin/yt-dlp.exe';
app.get('/getMp3', async (req, res) => {
    const videoUrl = req.query.url;

    if (!videoUrl) {
        return res.status(400).send({ error: 'No video URL provided!' });
    }

    try {
       
        const mp3Url = await ytdl(videoUrl, {
            extractAudio: true,
            audioFormat: 'mp3',
            getUrl: true,  
            noCheckCertificates: true,
            noWarnings: true,
            preferFreeFormats: true,
            addHeader: [
              'referer:youtube.com',
              'user-agent:googlebot'
            ]
        });

        res.json({
            mp3Url: "Hello"
        });

    } catch (error) {
        console.error('Error fetching MP3 URL:', error);
        return res.status(500).send({ error: 'Failed to fetch MP3 URL!' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
