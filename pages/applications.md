Applications that I endorse and use on desktop & mobile. Ultimate goal is to use as few non-native applications as possible in an attempt to reduce system bloat as well as keeping operational maintenance to a minimum.

Applications are tagged with the following characteristics to indicate aspects of their use & integration into my lifestyle:

* **Infrequent**. May be downloaded on-demand when needed.
* **GUI**. Downloaded from an external source via GUI.
* **Mac App Store**. Downloaded directly from the Mac App Store via `mas`.
* **Legacy**. Investigate a replacement soon.
* **Brew/Brew Cask**. GUI application that was installed via brew. Preferred.

This document is also subsequently broken down into macOS, macOS CLI, and iOS applications.

# macOS

| Application               | Aspects               | Notes                                                                                             |
| ------------------------- | --------------------- | ------------------------------------------------------------------------------------------------- |
| Adobe Photoshop CC 2018   | GUI                   | Detailed image editing, part of the Adobe Creative Cloud suite.                                   | 
| Bartender 3               | Brew Cask             | Manages applications that sit in the menu bar.                                                    |
| ColorSnapper 2            | Mac App Store         | Pick colors across the screen from the toolbar.                                                   |
| Deliveries                | Mac App Store         | Tracks my orders and deliveries.                                                                  |
| EnPass                    | Mac App Store         | Password manager, replaced LastPass.                                                              |
| Firefox                   | Infrequent, Brew Cask | Infrequently used for web development.                                                            |
| Gifox                     | Mac App Store         | Create gifs from what you see on screen. Ensure 30fps recording and playback is set.              |
| Google Chrome             | Infrequent, Brew Cask | Infrequently used for web development.                                                            |
| IINA                      | Brew Cask             | The modern video player for macOS. Installed via Brew. Based on an mpv.io wrapper.                |
| mac2imgur                 | Legacy, GUI           | Upload images directly from snapshot to imgur. No longer being actively maintained, replace with personal solution that uploads to fs.lukeify.com. |
| MacVim                    | Brew                  | GUI window wrapper around Vim with some helper functionality. Replaces Atom.                      |
| Magnet                    | Mac App Store         | Useful for organizing windows in a display using keyboard shortcuts.                              |
| Numbers                   | Mac App Store         | Spreadsheet creation with iCloud integration. Replaced Google Sheets as part of Google Drive.     |
| Pages                     | Mac App Store         | Document creation with iCloud integration. Replaced Google Docs as part of Google Drive.          |
| Paprika Recipe Manager 3  | Mac App Store         | Stores recipes in the cloud for use on my iPad.                                                   |    
| Paw                       | Brew Cask             | Paw is a full-featured HTTP client that lets you test and describe the APIs you build or consume. |
| PhpStorm                  | Brew Cask             | Preferred Integrated Development Environment for PHP and Javascript development. By JetBrains. Plugins to be installed are `.ignore`, `BashSupport`, `Lua`, `Markdown Navigator`, `Material Theme UI`, `Pug (ex-Jade)`, `Vue.js` |
| PyCharm                   | Brew Cask             | Preferred Integrated Development Environment for Python development. By JetBrains.                |
| Sequel Pro                | Brew Cask             | GUI database interaction.                                                                         | 
| Sketch                    | Brew Cask             | UI designer and mockup tool.                                                                      |
| TheUnarchiver             | Mac App Store         | Handle all the compressed formats you can think of.                                               |
| Tower                     | Brew Cask             | Replaced GitHub for Windows as my preferred visual source control application.                    |
| Transmission              | Brew Cask             | Replacing Deluge due to the former's inability to handle magnet links and wonkiness with keeping torrents downloaded properly. |
| Visual Studio for Mac     | Brew Cask             | Allows for C# & ASP.NET development.                                                              |
| World Clock Pro           | Mac App Store         | Gives you access to multiple programs in the notification center.                                 |
| Xcode                     | Mac App Store         | Native editor for macOS & iOS apps.                                                               |

# macOS CLI

Aspects applied to the following entries:

* `Brew`/`Brew Cask`. Installed view the brew package manager. Ideally all applications should be installed this way.
* `NPM`/`Yarn`. Installed via Node Package Manager. Discouraged.
* `Standalone`. Installed either with a custom command or with a GUI. Discouraged.

| Tool                  | Aspects       | Notes                                                                                 |
| --------------------- | ------------- | ------------------------------------------------------------------------------------- |
| `aerial`              | Brew Cask     | Screensaver for macOS that shows the aerial shots recorded via drone on an Apple TV.  |
| `brew`                | Standalone    | Mac package manager. Used to install many of the packages below.                      |
| `composer`            | Brew          | PHP dependency management.                                                            |
| `dockutil`            | Brew          | Manages applications visible in the dock from the command line.                       |
| `dotnet`              | Brew          | Microsoft ASP.NET Core CLI.                                                           |
| `exiftool`            | Brew          | View exif data for a photo.                                                           |
| `ffmpeg`              | Brew          | Video encoding/muxing/conversions. See here for installation notes: https://trac.ffmpeg.org/wiki/CompilationGuide/macOS | 
| `lua`                 | Brew          | lua interpreter.                                                                      |    
| `mysql`               | Brew          | MySQL database. Start a server with `mysql.server start`.                             |
| `ng`                  | NPM/Yarn      | Angular scaffolding CLI.                                                              |
| `node`                | Brew          | JavaScript execution environment.                                                     |
| `npm`                 | Brew          | 10.x. Installed with node.                                                            |
| `smartmontools`       | Brew          | HDD health monitoring.                                                                |
| `redis`               | Brew          | Key-value store.                                                                      |
| `rethinkdb`           | Brew          | Document store.                                                                       |
| `python3` & `pip3`    | Brew          | 3.6.2. Python interpreter.                                                            |
| `vagrant`             | Brew          | Development environments.                                                             |
| `vagrant-manager`     | Brew          | Helps manage vagrant environments.                                                    |
| `virtualbox`          | Brew          | Virtualized environment for running VMs. See http://sourabhbajaj.com/mac-setup/Vagrant/README.html for installation instructions.
| `wget`                | Brew          | wget for Mac.                                                                         |
| `yarn`                | Brew          | Alternative to node package manager.                                                  |
| `youtube-dl`          | Brew          | 2017.09.24                                                                            |

# iOS

General goal is to have no more than approximately a single page of third party apps. A web browser suffices most of the time. The third page is relegated to infrequently used apps.

| App               | Location          | Notes                     |
| ----------------- | ----------------- | ------------------------- |
| Apple Music       | Home Row          | Music. Replaced Spotify.  |
| IRCCloud          | Home Row          | IRC.                      |
| Safari            | Home Row          | Web browser.              |  
| Apollo            | Home Row > News   | Reddit.                   |
| Hacker News       | Home Row > News   | Hacker News.              |
| Twitter           | Home Row > News   | Twitter.                  |
| Messages          | Home Page         | Default.                  |
| Phone             | Home Page         | Default.                  |
| Camera            | Home Page         | Default.                  |
| Mail              | Home Page         | Default.                  |
| Weather           | Home Page         | Default.                  |
| Clock             | Home Page         | Default.                  |
| Calculator        | Home Page         | Default.                  |
| Notes             | Home Page         | Default.                  |
| Reminders         | Home Page         | Default.                  |
| Maps              | Home Page         | Default.                  |
| App Store         | Home Page         | Default.                  |
| Activity          | Home Page         | Default.                  |
| Home              | Home Page         | Default.                  |
| Apple TV Remote   | Home Page         | Default.                  |
| Daylio            | Page 2            | Mood tracking.            |
| EnPass            | Page 2            | Key & password storage.   |
| goMoney NZ        | Page 2            | For Google WiFi router we have at home.   |
| Google Maps       | Page 2            | Alternative to Apple Maps when needed. |
| Google WiFi       | Page 2            | Home WiFi monitoring.     |
| HealthMate        | Page 2            | Connects to Nokia Body+ Scale, and sends weight information into Apple Health. |
| HQ                | Page 2            | Fun game.                 |
| LIFX              | Page 2            | Smart lightbulb management. |
| Paprika 3         | Page 2            | Recipe manager.           |
| Plex              | Page 2            | Household media streaming for Apple TV.   |
| RunGap            | Page 2            | Exporting of workout data through GPX files. |
| Snapchat          | Page 2            | Ugh.                      |
| Speedtest         | Page 2            | Useful when travelling.   |
| Strava            | Page 2            | Health & fitness.         |
| T-Zero            | Page 2            | Countdown app. Investigate replacing with custom domain and site. |
| Uber              | Page 2            | Always force close this where possible. |
| VSCO              | Page 2            | Image editing & presets before export to Instagram. |
| Waterminder       | Page 2            | Water consumption tracking. |
| YouTube           | Page 2            | Videos.                   |
| Compass           | Page 3            |                           |
| Contacts          | Page 3            |                           |
| Files             | Page 3            |                           |
| Find iPhone       | Page 3            |                           |
| Health            | Page 3            |                           |
| iBooks            | Page 3            |                           |
| iTunes Store      | Page 3            |                           |
| Measure           | Page 3            |                           |
| Numbers           | Page 3            |                           |
| Pages             | Page 3            |                           |
} Podcasts          | Page 3            |                           |
| Remote            | Page 3            |                           |
| Settings          | Page 3            |                           |
| Voice Memos       | Page 3            |                           |
| Wallet            | Page 3            |                           |
| Watch             | Page 3            |                           |
| Workflow          | Page 3            |                           |
| Feedback          | Page 3            |                           |