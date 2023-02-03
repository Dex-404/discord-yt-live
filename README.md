![npm](https://img.shields.io/npm/dt/discord-yt-live?style=flat-square) ![GitHub issues](https://img.shields.io/github/issues/Dex-404/discord-yt-live?style=flat-square)![npm](https://img.shields.io/npm/v/discord-yt-live?style=flat-square)  ![npm bundle size](https://img.shields.io/bundlephobia/min/discord-yt-live?style=flat-square)  ![NPM](https://img.shields.io/npm/l/discord-yt-live?style=flat-square)
<p align="center">
  <h2 align="center">discord-yt-live</h2>

[![NPM](https://nodei.co/npm/discord-yt-live.png?compact=true)](https://npmjs.org/package/discord-yt-live)


A NPM pakage to allows user to post annouuncements on Discord when a youtube streamer goes live. WITHOUT YOUTUBE API KEY <br>
Return object with live status, video title,video url and Thumbnail.
## 💿 Installation

``` bash
npm i discord-yt-live
```


## 🙌 Usage

```js
const { isYtLive } = require('discord-yt-live')

const channelID = 'UCAW-NpUFkMyCNrvRSSGIvDQ'
const thumbnail = true

isYtLive(channelID, thumbnail).then((data) => {
    console.log(data)
})

```
## ✅ Sample
<img src=https://i.ibb.co/L0Sf37G/Screenshot-2023-02-03-215302.png>