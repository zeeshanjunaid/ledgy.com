#!/bin/sh

./getTranslations.sh

if [ "$NETLIFY_BUILD_BASE" ]; then
  cp -r $NETLIFY_BUILD_BASE/cache/gatsby/.cache .cache
fi

npm rebuild sharp node-sass
gatsby build

if [ "$REVIEW_ID" = "289" ]; then
  npm run extract
  cd src/locale/en
  cat dynamic.po >> messages.po
  curl -u ${LOCO_KEY_REBRANDING}: --data-binary @messages.po https://localise.biz/api/import/po?tag-absent=deprecated
fi
