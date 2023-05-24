const fs = require('fs');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');

// URL of the video you want to download is the first command line argument
const url = process.argv[2];

if (!url) {
  console.error('Please provide a URL as the first argument');
  process.exit(1);
}

ytdl.getInfo(url).then(info => {
  let title = info.videoDetails.title;

  // Replace any character that isn't alphanumeric or a space with an underscore
  title = title.replace(/[^a-z0-9 ]/gi, '_');

  // Path to the output audio file
  const outputPath = `${title}.mp3`;

  const videoDownloadStream = ytdl.downloadFromInfo(info, {
    quality: 'highestaudio',
  });

  const ffmpegConverter = ffmpeg(videoDownloadStream)
    .audioBitrate(320)
    .save(outputPath)
    .on('error', console.error)
    .on('progress', progress => {
      console.log(`Processing: ${progress.timemark}, output size: ${progress.targetSize}KB`);
    })
    .on('end', () => {
      console.log('Conversion finished!');
    });
}).catch(console.error);
