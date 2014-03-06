exports.platform = 'Samsung';

// optional, if exist (ex. samsung 2011, samsung 2012)
exports.year = '2011';

exports.api = [
  {
    title: 'Browser engine',
    id: 0,
    enable: 'Maple',
    text: '',
    link: ''
  },
  {
    title: 'storage',
    id: 1,
    enable: true,
    text: 'File API',
    link: 'http://samsungdforum.com/Guide/ref00001/index.html'
  },
  {
    title: 'save to storage',
    id: 2,
    enable: true,
    text: 'Can be implemented with File API',
    link: 'http://samsungdforum.com/Guide/ref00001/index.html'
  },
  {
    title: 'get from storage',
    id: 3,
    enable: true,
    text: 'Can be implemented with File API',
    link: 'http://samsungdforum.com/Guide/ref00001/index.html'
  },
  {
    title: 'clear storage',
    id: 4,
    enable: true,
    text: 'Can be implemented with File API',
    link: 'http://samsungdforum.com/Guide/ref00001/index.html'
  },
  {
    title: 'remove item from storage',
    id: 5,
    enable: true,
    text: 'Can be implemented with File API',
    link: 'http://samsungdforum.com/Guide/ref00001/index.html'
  },
  {
    title: 'get DUID',
    id: 6,
    enable: true,
    text: 'GetDUID(MAC)',
    link: 'http://samsungdforum.com/Guide/ref00014/GetDUID.html'
  },
  {
    title: 'get MAC',
    id: 7,
    enable: true,
    text: 'GetMAC()',
    link: 'http://samsungdforum.com/Guide/ref00014/GetMAC.html'
  },
  {
    title: 'get IP',
    id: 8,
    enable: true,
    text: 'GetIP',
    link: 'http://samsungdforum.com/Guide/ref00014/GetIP.html'
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
    text: 'GetModelCode() The modified model code is the same as the real model code, except that panel size number is replaced with XX (see GetRealModel())',
    link: 'http://samsungdforum.com/Guide/ref00014/GetModelCode.html'
  },
  {
    title: 'get hardware version',
    id: 11,
    enable: true,
    text: 'GetSystemVersion(versionType) The version information if the command succeeds, or an error code if the command fails.',
    link: 'http://samsungdforum.com/Guide/ref00014/GetSystemVersion.html'
  },
  {
    title: 'get platform version',
    id: 12,
    enable: '',
    text: '',
    link: ''
  },
  {
    title: 'Volume controls enable',
    id: 13,
    enable: true,
    text: 'The Audio plugin controls the audio-related functions',
    link: 'http://samsungdforum.com/Guide/ref00014/sef_plugin_audio.html'
  },
  {
    title: 'Volume up/down',
    id: 14,
    enable: true,
    text: '',
    link: 'http://samsungdforum.com/Guide/ref00014/sef_plugin_audio.html'
  },
  {
    title: 'get Volume',
    id: 15,
    enable: true,
    text: 'The GetVolume function gets the volume level of the DTV platform. The range of volume is 0 ~ 100.',
    link: 'http://samsungdforum.com/Guide/ref00014/GetVolume.html'
  },
  {
    title: 'toggleMute',
    id: 16,
    enable: true,
    text: 'The SetUserMute plugin function sets the state of UserMute in DTV platform.',
    link: 'http://samsungdforum.com/Guide/ref00014/SetUserMute.html'
  },
  {
    title: 'exit function',
    id: 17,
    enable: true,
    text: 'sf.core.exit(true);',
    link: 'http://samsungdforum.com/Guide/ref00009/sfcore_exit.html'
  },
  {
    title: 'return function',
    id: 18,
    enable: true,
    text: 'sf.core.exit(false);',
    link: 'http://samsungdforum.com/Guide/ref00009/sfcore_exit.html'
  },
  {
    title: 'set aspect ration',
    id: 19,
    enable: '',
    text: '',
    link: ''
  },
  {
    title: 'mouse navigation',
    id: 20,
    enable: true,
    text: '',
    link: ''
  },
  {
    title: 'gesture navigation',
    id: 21,
    enable: true,
    text: '',
    link: ''
  },
  {
    title: 'voice recognition',
    id: 22,
    enable: true,
    text: '',
    link: ''
  },
  {
    title: 'screen saver function',
    id: 23,
    enable: true,
    text: '',
    link: ''
  },
  {
    title: 'get used memory',
    id: 24,
    enable: false,
    text: '',
    link: ''
  },
  {
    title: 'native keyboard',
    id: 25,
    enable: true,
    text: 'Platform has special IME Plugin',
    link: 'http://samsungdforum.com/Guide/ref00014/sef_plugin_ime.html'
  },
  {
    title: 'loading indicator',
    id: 26,
    enable: true,
    text: 'sfLoading component can be used to indicate that time consuming activity like XHR request is ongoing.',
    link: 'http://samsungdforum.com/Guide/c06/index.html#contents'
  },
  {
    title: 'Player',
    id: 27,
    enable: true,
    text: 'Developer can player object or "SEFPlugin"',
    link: 'http://samsungdforum.com/Guide/ref00014/sef_plugin_player.html'
  },
  {
    title: 'support 3d',
    id: 28,
    enable: true,
    text: 'Not documented. It can be used with SetPlayerProperty(2, "3");',
    link: ''
  },
  {
    title: 'Player buffering controls',
    id: 29,
    enable: true,
    text: 'Developer can set initial, pending and total buffer size',
    link: 'http://samsungdforum.com/Guide/ref00014/SetTotalBufferSize.html'
  },
  {
    title: 'Player support subtitle',
    id: 30,
    enable: true,
    text: 'this feature doesn\'t work normally',
    link: 'http://samsungdforum.com/SamsungDForum/ForumView/f0cd8ea6961d50c3?forumID=d950c71f388762f6'
  },
  {
    title: 'Player adjust playing speed',
    id: 31,
    enable: true,
    text: 'SetPlaybackSpeed(speed)',
    link: 'http://samsungdforum.com/Guide/ref00014/SetPlaybackSpeed.html'
  },
  {
    title: 'Player support playlists',
    id: 32,
    enable: false,
    text: '',
    link: ''
  },
  {
    title: 'Player media info',
    id: 33,
    enable: true,
    text: 'Developer can get duration, resolution, bitrates',
    link: 'http://samsungdforum.com/Guide/ref00014/sef_plugin_player.html'
  },
  {
    title: 'Player change sizes',
    id: 34,
    enable: true,
    text: 'Developer can change video object size or use SetDisplayArea',
    link: 'http://samsungdforum.com/Guide/ref00014/SetDisplayArea.html'
  },
  {
    title: 'Player support audio language',
    id: 35,
    enable: true,
    text: 'Feature exist, but not documented.',
    link: 'http://www.samsungdforum.com/SamsungDForum/ForumView/63c64adb0aeb53f8?forumID=1b44f3cf219c0f0f'
  }
];


exports.modules = {
  "Widget": {
    url: '$MANAGER_WIDGET/Common/API/Widget.js',
    descr: "Widget object has functions needed for running an application efficiently, such as a method that notifies the Application Manager of the starting of an application, a method that registers and frees up keys the users want to use, and so on.",
    doc: "http://samsungdforum.com/Guide/ref00006/common_module_widget_object.html",
    methods: {
      "sendReadyEvent": "notifies the Application Manager that the application is ready to be displayed. This event is passed to the display and the application is run on the screen.",
      "sendExitEvent": "The sendExitEvent() method brings about the same effect as pressing the Exit key. Stops the application and returns to the TV screen.",
      "sendReturnEvent": "The sendReturnEvent() method brings about the same effect as pressing the Return key. Finishes the application and takes you to the Application Manager.",
      "blockNavigation": "The blockNavigation() method ensures that key event cannot be forced to return.",
      "putInnerHTML": "The putInnerHTML() method fixes memory issues. Required to use this method because the repetitive use of innerHTML can cause memory issues."
    }
  },
  "Plugin": {
    url: "$MANAGER_WIDGET/Common/API/Plugin.js",
    descr: "The Application Manager provides a wrapper class that allows you to use some plugin functions. To use this class, insert the objects needed for the use of plugins in the index.html file.",
    doc: "http://samsungdforum.com/Guide/ref00006/common_module_plugin_object.html",
    objects: [
      "pluginObjectTVMW",
      "pluginObjectVideo",
      "pluginObjectNNavi",
      "pluginObjectAppCommon"
    ],
    methods: {
      "setOnWatchDog()": "The setOnWatchDog() method turns on the Watch dog function.",
      "setOffWatchDog()": "The setOffWatchDog() method turns off the Watch dog function.",
      "setOnOSDState(left, top, width, height)": "The setOnOSDState() method sets the area where the OSD is protected.",
      "setOffOSDState(left, top, width, height)": "The setOffOSDState() method cancels the previously set OSD area.",
      "registKey(pNumKeyCode)": "Registration/unregistration of keys should be done after window.onshow event.",
      "unregistKey(pNumKeyCode)": "Registration/unregistration of keys should be done after window.onshow event.",
      "registIMEKey()": "Registers number keys from 0 to 9, - (hyphen), and previous channel key used for entering IME. Registration/unregistration of keys should be done after window.onshow event.",
      "unregistIMEKey()": "lets the Application Manager unregister IME key",
      "registAllKey()": "Registers all keys",
      "unregistAllKey()": "Unregisters all keys",
      "registFullWidgetKey()": "Let the Application Manager register a specific key group. Registers keys for fullwidget.",
      "registPartWidgetKey()": "Registers keys for part widget.",
      "SetBannerState(nState)": "Sets volume and channel OSD with the application.",
      "ShowTools(nTool)": "Displays pop-up windows for screen and sound adjustment",
      "setOnIdleEvent()": "Enables the closing of the application if there is no input for a certain amount of time. Default is set as Idle ON.",
      "setOffIdleEvent()": "Sets idle OFF, which disables the closing of the application even if there is no input for a certain amount of time.",
      "setOnScreenSaver()": "Sets the screen saver on. Screensaver is OFF when the application is closed.",
      "setOffScreenSaver()": "Available after calling setOnScreenSaver.",
      "isViewerKey(pKeyCode)": "Method decides whether the key value entered is applicable for TV View or for the application.",
      "setOnFullScreen()": "In case of <fullwidget>y</fullwidget>, it is not necessary to call this function.",
      "setOffFullScreen()": "Available after calling setOnFullScreen."
    }
  },
  "TVKeyValue": {
    url: "$MANAGER_WIDGET/Common/API/TVKeyValue.js",
    descr: "This object has a key code which the TV uses as a member variable, and identifies the remote control keys pressed by the user by referring to these member variables.",
    doc: "http://samsungdforum.com/Guide/ref00006/common_module_tvkeyvalue_object.html"
  },
  "CImageViewer": {
    url: "$MANAGER_WIDGET/Common/API/CImageViewer.js",
    descr: "CImageViewer is a common module that enables JPEG files to be displayed on Samsung DTV. With this module, images can be displayed on the DTV screen with a high resolution of 1920x1080 pixels. In addition, the size, location and transition effects of the images are also displayed.",
    doc: "http://samsungdforum.com/Guide/ref00006/common_module_cimageviewer.html"
  }
};