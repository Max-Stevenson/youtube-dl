
# Youtube Downloader

This guide will walk you through the process of setting up and using a simple script to download YouTube videos as MP3 files. No prior technical knowledge is required.


## Installation
You will need:

- A computer with internet access.
- The URL of a YouTube video that you want to download the audio from.

### Step-by-step Guide
1. Install Node.js
Node.js is a runtime that will allow us to run our script.
Go to the official Node.js download page.
Download the LTS (Long Term Support) version suitable for your operating system (Windows, macOS, or Linux).
Run the downloaded installer and follow the instructions to install Node.js

2. Install YouTube Audio Downloader
Download the YouTube Audio Downloader script. The script will be a file called index.js.
Save this file in a location on your computer where you want to download the audio files. For example, you might create a new folder called YouTube Audio Downloader and save the index.js file there.

3. Install Required Libraries
Our script relies on a couple of libraries. We need to install these libraries using Node.js.
Open a Command Prompt (Windows) or Terminal (macOS or Linux).
Change directory to where you saved the index.js file. You can do this by typing cd followed by the path to the directory. For example: cd C:\Users\YourName\YouTube Audio Downloader.
Type the following command and press Enter:
```
npm install
```

4. Download Audio from a YouTube Video
In the Command Prompt or Terminal window, type the following command but replace URL with the URL of the YouTube video you want to download: 
```
node index.js https://youtu.be/dQw4w9WgXcQ
```
Press Enter to run the command.
The script will download the audio from the YouTube video and save it as an MP3 file in the same directory as the index.js file. The MP3 file will be named after the title of the video.
