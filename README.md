# inkdrop-perma-delete

Perma Delete is an [Inkdrop](https://www.inkdrop.app) plugin to permanently delete selected notes by skipping Trash.

## Installation
```
ipm install perma-delete
```

## Commands
The plugin exposes the following commands.

* `perma-delete:delete`  
Deletes the selected notes permanently.

## Menu Items
The plugin provides the following menu items.

* `Application Menu` -> `File` -> `Remove Note Permantentely`  
Calls `perma-delete:delete`. Deletes the selected notes permanently.  
* `Note context menu` -> `Remove Permanentely`  
Calls `perma-delete:delete`. Deletes the selected notes permanently.

## Keyboard Shortcuts
The plugin provides the following keyboard shortcuts.

* `Ctrl + Shift + Backspace` or `Cmd + Shift + Backspace`  
Calls `perma-delete:delete`. Deletes the selected notes permanently.
