#!/bin/sh

# Exit if any command fails
set -e

./getTranslations.sh

npm rebuild sharp node-sass
gatsby build --log-pages

if [ "$BRANCH" = "master" ]; then
  npm run extract
  cd src/locale/en
  cat dynamic.po >> messages.po
  curl -u ${LOCO_KEY_REBRANDING}: --data-binary @messages.po https://localise.biz/api/import/po?tag-absent=deprecated
fi
