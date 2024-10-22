#!/usr/bin/env bash
# Install yt-dlp in the Render environment

# Download yt-dlp binary
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp

# Make it executable
chmod a+rx /usr/local/bin/yt-dlp

# Install ffmpeg
apt-get update && apt-get install -y ffmpeg
