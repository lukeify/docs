Vim commands and functionality that I use. Continue to add to this document as more commands are learned.

## Files

* Under `./assets`, find the file `lukeify.vim` for my terminal design, place this under `~/.vim/colors`.
* Under `./assets`, find the file `.gvimrc` for vim settings, place this under `~`.

## Structural

* `i`. Go into insert mode, placing the cursor before the current position.
* `a`. Go into insert mode via append, placing the cursor after the current position.
* `ESC`. Go to command mode.

## Navigation

* `$`. Go to the end of the current line.
* `0`. Go to the beginning of the current line.
* `50gg`. Go to line 50.
* `h`. Move the cursor back one position.
* `j`. Move the cursor up one line.
* `k`. Move the cursor down one line.
* `l`. Move the cursor forward one position.
* `w`. Move the cursor to the beginning of the next word.
* `b`. Move the cursor to the beginning of the previous word.
* `G`. Move the cursor to the end of the document.

## Editing

* `dd`. Delete the current line.
* `3dd`. Delete the current line, as well as the two lines below it.
* `ciw`. Change the current word under the cursor.
* `A`. Start editing at the end of the current line.

## Visual Selection

* `V`. Select a whole line.
* `d`. Cut the selection.
* `y`. Copy the selection.
* `p`. Paste after the cursor.
* `P`. Paste before the cursor.

## Vim Commands

* `:w`. Write out the current file.
* `:q`. Quit this instance of Vim.
* `:wq`. Save and quit the current file.
