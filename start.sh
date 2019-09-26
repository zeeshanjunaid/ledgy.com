#!/bin/sh
PORT="${PORT:-8000}"
HOST="${HOST:-localhost}"

lingui compile
ENABLE_GATSBY_REFRESH_ENDPOINT=true gatsby develop --port ${PORT} --host ${HOST}
