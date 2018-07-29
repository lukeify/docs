## Principles

* Bash scripts are suffixed with the `.sh` file type.
* Bash scripts can be marked as executable by prepending `#!/bin/bash` to the beginning of the file. This is called the "shebang", and tells bash where to find the bash executable for execution of the script.
* A bash script can be executed by running `./ scriptname.sh`.
* `for` loops take the form of: `for i in <x>; do <y>; done`.

## `~/.bashrc`

* Under the assets folder of this repository, you will find my bashrc file containing aliases I have set. Note than on macOS, you must `source ~/.bashrc` in `~/.profile` for your preferences to take effect on each terminal startup.

| Alias | For |
| ----- | --- |
| myrepos | `cd /Volumes/PATRIOT32/repos` |

