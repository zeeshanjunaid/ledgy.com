#!/bin/sh

./getTranslations.sh

if [ "$BRANCH" = "master" ]; then
  npm run extract
  curl -u ${LOCO_KEY}: --data-binary @src/locale/en/messages.po https://localise.biz/api/import/po?tag-absent=deprecated
fi

gatsby build
