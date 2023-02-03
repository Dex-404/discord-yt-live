const cheerio = require("cheerio");
const needle = require("needle");

module.exports = async function checklive(channelID) {
  let url = `https://www.youtube.com/channel/${channelID}/live`;
  const response = {
    live: false,
    title: null,
    url: null,
  };
  try {
    let res = await needle("get", encodeURI(url), { follow_max: 3 });

    let $ = cheerio.load(res.body);
    if ($('link[rel="canonical"]').attr("href")) {
      response.url = $('link[rel="canonical"]').attr("href");
      response.title = $('meta[name="title"]').attr("content");
      response.live = response.url.startsWith("https://www.youtube.com/watch?v")
        ? true
        : false;
    } else {
      response.live = false;
      response.title = "API ERROR";
      response.url = "API ERROR";
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};
