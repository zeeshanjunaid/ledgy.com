#!/bin/sh

# Exit if any command fails
set -e

export GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES=true

./getTranslations.sh

npm rebuild sharp node-sass
gatsby build --log-pages

if [ "$BRANCH" = "master" ]; then
  npm run extract
  cd src/locale/en
  cat dynamic.po >> messages.po
  curl -u ${LOCO_KEY_REBRANDING}: --data-binary @messages.po https://localise.biz/api/import/po?tag-absent=deprecated
fi
