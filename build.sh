#!/bin/sh


if [ "$BRANCH" = "master" ]; then
  npm run extract
  curl -u ${LOCO_KEY}: --data-binary @src/locale/en/messages.po https://localise.biz/api/import/po
fi

getPo () {
  LANG=$1
  curl https://localise.biz/api/export/locale/${LANG}.po?key=jnXvFinOCKAyCWlV7BradDB0Vh9RSbjc > src/locale/${LANG}/messages.po
}

getPo en &&
getPo de &&
getPo fr &&
lingui compile &&
gatsby build
