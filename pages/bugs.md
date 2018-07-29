Issues and bugs I have identified with applications I use that I have reported to developers (or otherwise intend to report to developers), along with the date & screenshot of the report.

## Reported & Outstanding

### Attachments in Mail.app no longer has "View as Icon" in right click context menu.

| Key               | Value                     |
| ----------------- | ------------------------- |
| Bug Owner         | Apple                     |
| Date Reported     | 2017-11-10                |
| Fixed?            | No (as of 2017-11-11)     |
| Bug ID            | rdar://35463033           |

Closed as duplicate.

### ANZ Online Banking in Safari results in user being logged-out.

| Key               | Value                     |
| ----------------- | ------------------------- |
| Bug Owner         | ANZ Banking               |
| Date Reported     | 2017-11-11                |
| Fixed?            | No (as of 2017-11-14)     |
| Bug ID            | Unknown                   |

Bug text:

```
# Summary

Using Safari on macOS, with the LastPass Safari plugin installed, ANZ online banking customers cannot reliably access their account, instead being redirected in a loop which re-presents them with the login page, after attempting to login.

# Steps to Reproduce

1. Have configuration of applications as described below.
2. Navigate to https://anz.co.nz.
3. Click "Log In" in top/middle right of screen.
4. Login form is prepopulated. Click "Log In".

# Expected Results

User is able to access their account balances, and perform transactions.

# Actual Results

User MAY be able to access their account balances, but will automatically be logged out after another click, and taken to `https://digital.anz.co.nz/preauth/web/service/login?redirect=true`.

# Version/Build

macOS 10.13.0 High Sierra w/ Supplemental Update
Safari 11.0 (13604.1.38.1.6)
LastPass Safari Plugin 4.1.6, with Autofill enabled.
ANZ Online Internet Banking as of 2017-11-11

# Configuration

As supplied above.
```

### Provide user with option to retry when repository can't be found.

| Key               | Value                     |
| ----------------- | ------------------------- |
| Bug Owner         | GitHub                    |
| Date Reported     | 2017-11-11                |
| Fixed?            | No (as of 2017-11-14)     |
| Bug ID            | desktop/desktop#3301      |

"Enhancement" label added to issue.

### Status bar animation is sequenced poorly following Apple Pay de-invocation animation

| Key               | Value                     |
| ----------------- | ------------------------- |
| Bug Owner         | Apple                     |
| Date Reported     | 2017-11-12                |
| Fixed?            | No (as of 2017-11-14)     |
| Bug ID            | rdar://35491442           |

### Incorrect documented location of plists in pmset manual page.

| Key               | Value                     |
| ----------------- | ------------------------- |
| Bug Owner         | Apple                     |
| Date Reported     | 2017-11-13                |
| Fixed?            | No (as of 2017-11-14)     |
| Bug ID            | rdar://35499834           |

### Scope with `includes` prevents eager loading of same association in query due to correlation being specified multiple times.

| Key               | Value                     |
| ----------------- | ------------------------- |
| Bug Owner         | sequelize/sequelize       |
| Date Reported     | 2017-11-13                |
| Fixed?            | No (as of 2017-11-14)     |
| Bug ID            | [8624](https://github.com/sequelize/sequelize/issues/8624) |

### Offer current elevation as available metric for suitable workouts.

| Key               | Value                     |
| ----------------- | ------------------------- |
| Bug Owner         | Apple                     |
| Date Reported     | 2017-11-13                |
| Fixed?            | No (as of 2017-11-14)     |
| Bug ID            | rdar://35499131           |

### Hide "new tab" icon when all tabs in Safari Developer Tools are open.

| Key               | Value                     |
| ----------------- | ------------------------- |
| Bug Owner         | Apple                     |
| Date Reported     | 2017-11-14                |
| Fixed?            | No (as of 2017-11-14)     |
| Bug ID            | rdar://35521404           |

### Show elevation data over time as graph for suitable workouts in workout summary in Activity app on iPhone.

| Key               | Value                     |
| ----------------- | ------------------------- |
| Bug Owner         | Apple                     |
| Date Reported     | 2017-11-14                |
| Fixed?            | No (as of 2017-11-14)     |
| Bug ID            | rdar://35521629           |

### Static value symbol resolution error prevents use of isDevMode() in NgModule annotation when compiled with AOT.

| Key               | Value                     |
| ----------------- | ------------------------- |
| Bug Owner         | angular/angular           |
| Date Reported     | 2017-11-14                |
| Fixed?            | No (as of 2017-11-14)     |
| Bug ID            | [20409](https://github.com/angular/angular/issues/20409) |

### Password Assistant UI elements appear overly dated.

| Key               | Value                     |
| ----------------- | ------------------------- |
| Bug Owner         | Apple                     |
| Date Reported     | 2017-11-14                |
| Fixed?            | No (as of 2017-11-14)     |
| Bug ID            | rdar://35527488           |

## Unreported

* Support Health + Activity apps on macOS
* Spotlight math should support unbalanced bracketed equations similar to Google Search.
* Spotlight math should support percentage math.
* When locked, activity progress should show as a padlock instead of `--`, which looks confusing.
* Apple Watch should not require to be connected to power to sync music.
* Introduce "Google My Maps"-esque feature into Apple Maps
* Apple Music should have "Spotify Connect"-esque functionality.
* Apple Watch should allow for outdoor skating workout
* When Apple Watch is locked and user attempts to access notification menu, after correct passcode, notifications menu should appear.
* Sceenshotting application does not include some components of windows.
* AirPods should include touch-sensitive area on outward-facing fraction of device to allow for volume adjustments with a gesture.
* Alow for the displaying of favicons in Safari bookmarks toolbar.
* Increase resolution of MacBook iSight camera.

## Fixed

None :(
