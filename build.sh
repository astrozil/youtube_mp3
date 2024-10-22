#!/usr/bin/env bash

# Create a bin directory in /tmp for yt-dlp
mkdir -p /tmp/bin

# Download yt-dlp binary to the /tmp/bin directory
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /tmp/bin/yt-dlp

# Make it executable
chmod +x /tmp/bin/yt-dlp
