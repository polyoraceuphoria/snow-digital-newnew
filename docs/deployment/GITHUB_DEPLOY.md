# GitHub Deploy Guide

Preferred repository name:

`snow-digital-newnew`

Repository URL:

`https://github.com/polyoraceuphoria/snow-digital-newnew`

Default visibility:

Private, unless Michael explicitly chooses public.

Manual setup:

```bash
git remote add origin git@github.com:polyoraceuphoria/snow-digital-newnew.git
git branch -M main
git push -u origin main
```

HTTPS alternative:

```bash
git remote add origin https://github.com/polyoraceuphoria/snow-digital-newnew.git
git branch -M main
git push -u origin main
```

The GitHub CLI was not available in the initial environment audit, so repository creation may need to be completed in GitHub's dashboard or after installing/authenticating `gh`.

Current environment note:

`git init .` was attempted, but this generated Codex folder refused creation of a `.git` entry with `Operation not permitted`. If that persists, move or copy the project folder to a normal local directory, then run the setup commands above.
