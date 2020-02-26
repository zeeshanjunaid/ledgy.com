#!/bin/sh

./getTranslations.sh

if [ "$NETLIFY_BUILD_BASE" ]; then
  cp -r $NETLIFY_BUILD_BASE/cache/gatsby/.cache .cache
fi

npm rebuild sharp node-sass
gatsby build

if [ "$BRANCH" = "master" ]; then
  npm run extract
  cd src/local/en
  cat dynamic.po >> messages.po
  curl -u ${LOCO_KEY}: --data-binary @messages.po https://localise.biz/api/import/po?tag-absent=deprecated
fi
