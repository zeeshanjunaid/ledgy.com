#!/bin/sh
PORT="${PORT:-8000}"
HOST="${HOST:-localhost}"

./getTranslations.sh
ENABLE_GATSBY_REFRESH_ENDPOINT=true gatsby develop --port ${PORT} --host ${HOST}
