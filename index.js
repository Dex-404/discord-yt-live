const checklive = require("./src/check.js");
const thumb = require("video-thumbnail-url");

async function assembleData(data, thumbnail) {
  let live = data.live;
  let title = data.title;
  let url = data.url;
  let image = await getThumbnail(url);
  if (thumbnail == true) {
    let dataObject = {
      live: live,
      title: title,
      url: url,
      thumbnail: image,
    };
    return dataObject;
  } else {
    let dataObject = {
      live: live,
      title: title,
      url: url,
    };
    return dataObject;
  }
}

var thumnail = function (url) {
  return new Promise(async (resolve, reject) => {
    let image = await thumb(url);
    resolve(image);
  });
};

async function getThumbnail(url) {
  let image = await thumnail(url);
  return image;
}

async function isYtLive(channelID, thumbnail) {
  let data = await checklive(channelID);
  if (data.live == true) {
    let assembledData = await assembleData(data, thumbnail);
    return assembledData;
  } else {
    return "Channel is currently not streaming";
  }
}

module.exports = {
  isYtLive,
};
