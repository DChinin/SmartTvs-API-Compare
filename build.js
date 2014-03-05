var fs = require('fs');
var api = require('./API');
var lg = require('./platforms/lg');
//var htmlTemplate = fs.readFileSync(__dirname + '/template.html', 'utf-8');

var platforms = [];
platforms.push(lg);

generate(api, platforms);

function generate(apiTitles, platforms) {
  var api = {};

  apiTitles.api.forEach(function ( item ) {
    if (api[item.id]) {
      throw new Error('Conflict id: ' + item.id + ' with titles: ' + item.title + ' & ' + api[item.id].title);
    }
    api[item.id] = {
      title: item.title,
      platforms: {}
    }
  });

  platforms.forEach(function (platform) {
    api = mergeData(api, platform);
  });

  console.log(api);
}

function mergeData (api, platform) {
  var name = platform.platform;

  platform.api.forEach(function (prop) {
    var apiItem = api[prop.id];

    if (!apiItem) {
      apiItem = api[prop.id] = {
        title: prop.title,
        platforms: {}
      }
    }

    apiItem.platforms[name] = {
      enable: prop.enable,
      text: prop.text,
      link: prop.link
    };
  });

  return api;
}



function dataToHtml(data) {
  return '';
}