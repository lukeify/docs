Current command line functionality I know how to use, and a quick man-like guide on how they can be used for my work.

## `adduser`

## `cat`

Original intention was to concatenate files together, but is most often used to echo the contents of a file to the standard output. Example usage:

```bash
cat [file]
```

This will print the contents of the file to standard output.

## `caffeinate`

For a given number of seconds (timeout option) prevent the system from sleeping.

```bash
caffeinate [-t timeout]
```

## `cd [dir]`

Changes directory within the file system to the specified `dir`. Dir can contain a variety of symbols to aid in direction:

* `~` for home to refer to the executing user's home file in `/home`.
* `/` when used as a prefix refers to the root of the current filesystem and can be used to navigate to a new absolute file path.
* `..` to navigate up a directory.

## `certbot`

Custom: Let's Encrypt.

## `clear`

Clears the current console.

## `crontab`

## `dig`

Find out information about domains.

## `dotnet`

Publish, build, or run dotnet applications.

## `echo`

Write arguments to the standard output.

```bash
echo [-n] [string ...]
```

## `ffmpeg`

Useful for video-related functionality. Two commands issued often:

1. Merge SRT file subs into mkv:

   `ffmpeg -i input.mkv -i input.srt -map 0 -map 1 -c copy output.srt`

2. Split subs from mkv into separate file:

   `ffmpeg -i input.mkv -map 0:s:0 subs.srt`

3. Remap an .m2ts file into .mkv:

   `ffmpeg -i input.m2ts -scodec copy -acodec copy -vcodec copy -f matroska output.mkv`

## `git`

* `git status`. Check the status of a git repository.
* `git add .`. Add all untracked files.

## `grep`

`ls` can be combined with grep to filter files and directories by name. Example:

```bash
ls | grep "foo"
```

## `jobs`

List all jobs running from nohup. Example:

* `jobs -l`.

## `ls`

Lists the contents of a directory. Shorthand command is `l`. Options:

* `ls -l`. Use a long list format.
* `ls -a`. List all files, including hidden entries & navigators.
* `ls -A`. List almost all files, excluding `.` and `.``.
* `ls -h`. List with human-readable file sizes.
* `ls -S`. Sort by filesize, largest first.

Useful combinations:

* `ls -lA`. List almost all files in long list format.
* `ls -lAhS`. List almost all files by human-readable filesize.

## `man`

Manual page for a command. Syntax:

`man [name]`

Where name is the name of the command to find.

## `mkdir`

Makes a directory. Example:

```bash
mkdir [name]
```

## `nano`

The nano editor for a file. Use: `nano filename`. Prefer vim.

## `nginx`

Test if the nginx configuration is okay with `nginx -t`.

## `nohup`

Run something in the background. Example:

```bash
nohup [whattorun] &
```

## `pm2`

Process manager to run services.

* `pm2 ls`. List all services.
* `pm2 run [command] -- [...options]`. Run a service.

## `pwd`

Output the location of the current working directory. Short for print working directory. Example output:

```bash
$ pwd
/home/foobar
```

## `reboot`

Reboots the server.

## `rm`

Removes a file, or a folder when used appropriately.

* `rm -r`. Remove recursively.
* `rm -f`. Force.

## `scp`

File transfers over the SSH protocol.

## `sh`

## `ssh`

Used to login over the SSH protocol, often to a remote server. Syntax as such:

```bash
ssh user@domain:optionalport
```

SSH can also be used for tunneling and port forwarding. Use the `-L` command to specify how the tunnel should be mapped:

```bash
ssh -L port:host:port user@domain
```

Additionally, use the `-N` flag to disable the need of remote shell. As per man: `Do not execute a remote command.  This is useful for just forwarding ports.`.

```bash
ssh -N -L port:host:port user@domain
```

## `systemctl`

Control the systemd system and service manager. Example usage:

* `systemctl start`. Starts a service.
* `systemctl restart`. Restarts a service.
* `systemctl stop`. Stops a service.
* `systemctl status`. Returns the status of a service.

## `touch`

* `touch [name]`. Creates an empty file.

## `whoami`

Find the name of the current user.

## `whois`

Find out the ownership details of a domain.

## `youtube-dl`

Download videos from YouTube and other sites. To ensure the best quality on a YouTube video:

`youtube-dl [url] -f`

Followed by:

`youtube-dl [url] -F [videoquality+audioquality]`

## `zip`

Useful for zipping a file or folders. Options:

* `e`. Encrypts a zip file. Not secure at all. After the `zip` command is run, you will be asked to enter and confirm the current password.
* `r`. Recursively zip a folder.

    Example:

    ```bash
    zip -e -r zipfile.zip folder
    ```