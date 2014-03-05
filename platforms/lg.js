exports.platform = 'LG';

// optional, if exist(release year or SDK version)
exports.version = '1.5';

exports.api = [
  {
    title: 'storage',
    id: 1,
    enable: true,
    text: 'Localstorage enabled',
    link: ''
  },
  {
    title: 'save to storage',
    id: 2,
    enable: true,
    text: 'Localstorage enabled',
    link: ''
  },
  {
    title: 'get from storage',
    id: 3,
    enable: true,
    text: 'Localstorage enabled',
    link: ''
  },
  {
    title: 'clear storage',
    id: 4,
    enable: true,
    text: 'Localstorage enabled',
    link: ''
  },
  {
    title: 'remove item from storage',
    id: 5,
    enable: true,
    text: 'Localstorage enabled',
    link: ''
  },
  {
    title: 'get DUID or serial number',
    id: 6,
    enable: true,
    text: 'device.serialNumber; device - Html el of device object; API 1.5+',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Properties2.htm?path=1_3_4_1_1_3#_Toc358880883'
  },
  {
    title: 'get MAC',
    id: 7,
    enable: true,
    text: 'device.net_macAddress; device - Html el of device object; API 1.5+',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Properties2.htm?path=1_3_4_1_1_9#_Toc358880889'
  },
  {
    title: 'get IP',
    id: 8,
    enable: true,
    text: 'device.net_ipAddress; device - Html el of device object; API 1.5+',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Properties2.htm?path=1_3_4_1_1_14#_Toc358880894'
  },
  {
    title: 'get SDI',
    id: 9,
    enable: '',
    text: '',
    link: ''
  },
  {
    title: 'get model code',
    id: 10,
    enable: true,
    text: 'device.modelName; device - Html el of device object; API 1.5+',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Properties2.htm?path=1_3_4_1_1_2#_Toc358880882'
  },
  {
    title: 'get hardware version',
    id: 11,
    enable: true,
    text: 'device.hwVersion; device - Html el of device object; API 1.5+',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Properties2.htm?path=1_3_4_1_1_5#_Toc358880885'
  },
  {
    title: 'get platform version',
    id: 12,
    enable: true,
    text: 'device.version; device - Html el of device object; API 1.5+',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Properties2.htm?path=1_3_4_1_1_0#_Toc358880880'
  },
  {
    title: 'Volume controls enable',
    id: 13,
    enable: false,
    text: '',
    link: ''
  },
  {
    title: 'Volume up/down',
    id: 14,
    enable: false,
    text: '',
    link: ''
  },
  {
    title: 'get Volume',
    id: 15,
    enable: false,
    text: '',
    link: ''
  },
  {
    title: 'toggleMute',
    id: 16,
    enable: false,
    text: '',
    link: ''
  },
  {
    title: 'exit function',
    id: 17,
    enable: true,
    text: 'window.NetCastExit(); API 1.5+',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Methods.htm?path=1_3_2_0_0_0#_Toc358880814'
  },
  {
    title: 'return function',
    id: 18,
    enable: true,
    text: 'window.NetCastBack(); API 1.5+',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Methods.htm?path=1_3_2_0_0_1#_Toc358880815'
  },
  {
    title: 'set aspect ration',
    id: 19,
    enable: true,
    text: 'window.NetCastSetDefaultAspectRatio("original"|"zoom"|"full"); This API call applies only once for a whole application life cycle. Second and subsequent calls will be ignored by the LG Browser automatically.',
    link: ''
  },
  {
    title: 'mouse/remote navigation',
    id: 20,
    enable: true,
    text: 'It is possible to get remote status, to disable remote',
    link: ''
  },
  {
    title: 'gesture navigation',
    id: 21,
    enable: false,
    text: '',
    link: ''
  },
  {
    title: 'voice recognition',
    id: 22,
    enable: true,
    text: 'To check recognition enable device.supportVoiceRecog; API 2.2+',
    link: ''
  },
  {
    title: 'screen saver function',
    id: 23,
    enable: false,
    text: '',
    link: ''
  },
  {
    title: 'get used memory',
    id: 24,
    enable: true,
    text: 'window.NetCastGetUsedMemorySize(); API 1.5+',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Methods.htm?path=1_3_2_0_0_10#_Toc358880824'
  },
  {
    title: 'native keyboard',
    id: 25,
    enable: true,
    text: 'To enable/disable keyboard window.NetCastSystemKeyboardVisible(true|false); API 3.0+',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Methods.htm?path=1_3_2_0_0_10#_Toc358880824'
  },
  {
    title: 'loading indicator',
    id: 26,
    enable: true,
    text: 'window.NetCastSetPageLoadingIcon("enabled"|"disabled"); 1.5 or higher',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Methods.htm?path=1_3_2_0_0_2#_Toc358880816'
  },
  {
    title: 'Player',
    id: 27,
    enable: true,
    text: 'It is possible to use html5 player or player object',
    link: ''
  },
  {
    title: 'support 3d',
    id: 28,
    enable: true,
    text: 'to check support use device.support3D ',
    link: ''
  },
  {
    title: 'Player buffering controls',
    id: 29,
    enable: true,
    text: 'it is possible to adjust pre buffering time, check buffering progress',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Properties1.htm?path=1_3_3_3_1#_Toc358880849'
  },

  {
    title: 'Player support subtitle',
    id: 30,
    enable: true,
    text: 'media.subtitle = newSubtitleURL;',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Properties1.htm?path=1_3_3_3_1_12#_Toc358880862'
  },
  {
    title: 'Player adjust playing speed',
    id: 31,
    enable: true,
    text: 'media.play(speed); API 1.5+',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Methods1.htm?path=1_3_3_3_0_0#_Toc358880842'
  },
  {
    title: 'Player support playlists',
    id: 32,
    enable: true,
    text: 'The NetCast Platform supports playlist (ASX), and developers can play the next media by calling media.next() API.',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Methods1.htm?path=1_3_3_3_0_0#_Toc358880842'
  },
  {
    title: 'Player media info',
    id: 33,
    enable: true,
    text: 'media.mediaPlayInfo();',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Methods1.htm?path=1_3_3_3_0_5#_Toc358880847'
  },
  {
    title: 'Player change sizes',
    id: 34,
    enable: true,
    text: 'You can adjust sizes with media.width/media.heigh propertirs',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Properties1.htm?path=1_3_3_3_1_3#_Toc358880853'
  },
  {
    title: 'Player support audio language',
    id: 35,
    enable: true,
    text: 'media.audioLanguage = newAudioLanguage; API 1.5+',
    link: 'http://developer.lgappstv.com/TV_HELP/topic/lge.tvsdk.developing.book/html/API/API/Properties1.htm?path=1_3_3_3_1_15#_Toc358880865'
  },
];

exports.events = {
  "mouseon": "window.onmouseon; This event is generated when the Magic Remote is activated.",
  "mouseoff": "window.onmouseoff; This event is generated when the Magic Remote is deactivated.",
  "outofmemory": "window.onoutofmemory; Web application gets force shut down when the TV system memory goes under 20 MB. " +
                 "The ‘outofmemory’ event gives the remaining memory size to developer before the web application gets " +
                 "force shut down. This event occurs three times (at about 50 MB (20 MB + 30 MB), 40 MB (20 MB + 20 MB), " +
                 "30 MB (20 MB + 10 MB)). If you use ‘event.available’ property, you can get the current available memory size.",
  "onPlayStateChange": "media.onPlayStateChange;",
  "onBuffering": "media.onBuffering; A Boolean type parameter specifies whether data buffering has started or finished. A value of true indicates that the data buffering has started. Buffering also occurs whenever playback stops and then restarts (either from calls to play() and stop()) methods or when network congestion occurs during playing streamed media.",
  "onError": "media.onError;  Developers can receive an error event when the media player encounters an error while playing."

};