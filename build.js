var fs = require('fs');
var api = require('./API');
var lg = require('./platforms/lg');
var samsung = require('./platforms/samsung');
var targetFile = 'index.html';
var htmlTemplate = fs.readFileSync(__dirname + '/template.html', 'utf-8');

var platforms = [samsung, lg];

generate(api, platforms);

function generate(apiTitles, platforms) {
  var api = {},
    platformsNames = [],
    html;

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
    platformsNames.push(platform.platform);
    api = mergeData(api, platform);
  });

  html = generateTableHtml(api, platformsNames);
  saveHtml(html);
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

function generateTableHtml( api, titles ) {
  var length = titles.length,
    result = '<table><thead><tr><td></td>',
    id, item, platforms;

  // generating table headers
  titles.forEach(function ( name ) {
    result += '<td>' + name + '</td>';
  });

  result += '</tr></thead><tbody>';

  for (id in api) {
    item = api[id];
    platforms = item.platforms || {};
    result +='<tr><td>' + item.title + '</td>';

    titles.forEach(function ( title ) {
      var apiItem = platforms[title] || {},
        enable = apiItem.enable;

      result += '<td class="item-' + (enable ? 'enabled' : 'disabled') + '">'+ (enable? 'YES' : 'NO') + '</td>';
    });


    result +='</tr>';
  }

  result += '</tbody></table>';

  return result;
}

function saveHtml(html) {
  var result = htmlTemplate.replace('<!-- TABLE  -->', html);
  var target = __dirname + '/' + targetFile;

  var old_result;
  try {
    old_result = fs.readFileSync(target, 'utf-8');
  } catch (e) {}
  if (old_result === result) {
    console.log('File not changed');
  } else {
    fs.writeFileSync(target, result);
    console.log('Write to file ' + targetFile);
  }

}