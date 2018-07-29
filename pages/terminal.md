Current command line functionality I know how to use, and a quick man-like guide on how they can be used for my work.

## `cd [dir]`

Changes directory within the file system to the specified `dir`. Dir can contain a variety of symbols to aid in direction:

* `~` for home to refer to the executing user's home file in `/home`.
* `/` when used as a prefix refers to the root of the current filesystem and can be used to navigate to a new absolute file path.
* `..` to navigate up a directory.

### Options

None.

## `ls`

Lists the contents of a directory. Shorthand command is `l`. Options:

## `grep`

`ls` can be combined with grep to filter files and directories by name. Example:

```
$ ls | grep "foo"
```

## `nano`

The nano editor for a file. Use: `nano filename`.

## `clear`

Clears the current console.

## `man`

Manual page for a command. Syntax:

`man name`

Where name is the name of the command to find.

## `zip`

Useful for zipping a file or folders. Options:

### `-e`

Encrypts a zip file. Not secure at all. After the `zip` command is run, you will be asked to enter and confirm the current password.

### `-r`

Recursively zip a folder.

Example:

```
$ zip -e -r zipfile.zip folder
```

## `systemctl`

Control the systemd system and service manager. Example usage:

`systemctl start nginx`, `systemctl restart nginx`, `systemctl stop nginx`

## `echo`

Write arguments to the standard output.

```
echo [-n] [string ...]
```

## `cat`

Original intention was to concatenate files together, but is most often used to echo the contents of a file to the standard output. Example usage:

`cat foo.txt`

This will print the contents of `foo.txt` to standard output.

## `(cd && ls)`

List files in a directory separate to the one you are currently in.

## `pwd`

Output the location of the current working directory. Short for print working directory. Example output:

```bash
$ pwd
> /home/foobar
```

## `mkdir`

Makes a directory. Example:

```
$ mkdir
```

## `rm`

Removes a file, or a folder when used appropriately.

## `whoami`

Find the name of the current user.

## `adduser`

## `touch`

Creates an empty file.

## `certbot`

Custom: Let's Encrypt.

## `forever`

Custom: forever.js.

## `reboot`

Reboots the server.

## `crontab`

## `git`

## `scp`

## `ssh`

Used to login over the SSH protocol, often to a remote server. Syntax as such:

```
sssh user@domain:optionalport
```

SSH can also be used for tunneling and port forwarding. Use the `-L` command to specify how the tunnel should be mapped:

```
ssh -L port:host:port user@domain
```

Additionally, use the `-N` flag to disable the need of remote shell. As per man: `Do not execute a remote command.  This is useful for just forwarding ports.`.

```
ssh -N -L port:host:port user@domain
```

## `sh`

## `nginx`

Test if the nginx configuration is okay with `nginx -t`.

## `dig`

Find out information

## `whois`

Find out the ownership details of a domain.

## `caffeinate`

For a given number of seconds (timeout option) prevent the system from sleeping.

```
caffeinate [-t timeout]
```

## `ffmpeg`

Useful for video-related functionality. Two commands issued often:

1. Merge SRT file subs into mkv:

   `ffmpeg -i input.mkv -i input.srt -map 0 -map 1 -c copy output.srt`

2. Split subs from mkv into separate file:

   `ffmpeg -i input.mkv -map 0:s:0 subs.srt`

3. Remap an .m2ts file into .mkv:

   `ffmpeg -i input.m2ts -scodec copy -acodec copy -vcodec copy -f matroska output.mkv`

## `youtube-dl`

Download videos from YouTube and other sites. To ensure the best quality on a YouTube video:

`youtube-dl [url] -f`

Followed by:

`youtube-dl [url] -F [videoquality+audioquality]`
