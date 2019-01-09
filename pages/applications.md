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

## Home Row

| App               | Notes                     |
| ----------------- | ------------------------- |
| Apple Music       | Music. Replaced Spotify.  |
| IRCCloud          | IRC.                      |
| Safari            | Web browser.              |  
| Apollo            | Reddit.                   |

## First Page

| App               | Notes                     |
| ----------------- | ------------------------- |
| Messages          | Default.                  |
| Phone             | Default.                  |
| Camera            | Default.                  |
| Mail              | Default.                  |
| Weather           | Default.                  |
| Clock             | Default.                  |
| Calculator        | Default.                  |
| Notes             | Default.                  |
| Reminders         | Default.                  |
| Maps              | Default.                  |
| App Store         | Default.                  |
| Activity          | Default.                  |
| Home              | Default.                  |
| Apple TV Remote   | Default.                  |

## Second Page

| App               | Notes                     |
| ----------------- | ------------------------- |
| Days              | Event coutndowns.         |
| Deliveries        | Package management.       |
| EnPass            | Key & password storage.   |
| goMoney NZ        | For Google WiFi router we have at home.   |
| Google Maps       | Alternative to Apple Maps when needed. |
| Google WiFi       | Home WiFi monitoring.     |
| GoPro             | GoPro app.                |
| HealthMate        | Connects to Nokia Body+ Scale, and sends weight information into Apple Health. |
| LIFX              | Smart lightbulb management. |
| Paprika 3         | Recipe manager.           |
| Plex              | Household media streaming for Apple TV.   |
| RunGap            | Exporting of workout data through GPX files. |
| Snapchat          | Ugh.                      |
| Speedtest         | Useful when travelling.   |
| Strava            | Health & fitness.         |
| T-Zero            | Countdown app. Investigate replacing with custom domain and site. |
| Uber              | Always force close this where possible. |
| VSCO              | Image editing & presets before export to Instagram. |
| Waterminder       | Water consumption tracking. |
| WhatsApp          | Paragliding group chat.   |
| YouTube           | Videos.                   |

## Third Page

| App               | Notes                     |
| ----------------- | ------------------------- |
| Apple TV Remote   |                           |
| Compass           |                           |
| Contacts          |                           |
| FaceTime          |                           |
| Files             |                           |
| Find iPhone       |                           |
| Health            |                           |
| iBooks            |                           |
| iTunes Store      |                           |
| Measure           |                           |
| Numbers           |                           |
| Pages             |                           |
} Podcasts          |                           |
| Remote            |                           |
| Settings          |                           |
| Shortcuts         |                           |
| Voice Memos       |                           |
| Wallet            |                           |
| Watch             |                           |