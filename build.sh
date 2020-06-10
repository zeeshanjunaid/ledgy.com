#!/bin/sh

# Exit if any command fails
set -e

./getTranslations.sh

CACHE_DIR=$NETLIFY_BUILD_BASE/cache/gatsby/.cache
if [ -d "$CACHE_DIR" ]; then
  cp -r $CACHE_DIR .cache
fi

npm rebuild sharp node-sass
gatsby build

if [ "$BRANCH" = "master" ]; then
  npm run extract
  cd src/locale/en
  cat dynamic.po >> messages.po
  curl -u ${LOCO_KEY_REBRANDING}: --data-binary @messages.po https://localise.biz/api/import/po?tag-absent=deprecated
fi
