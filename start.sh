#!/bin/sh
PORT="${PORT:-8000}"
HOST="${HOST:-localhost}"

lingui compile
gatsby develop --port ${PORT} --host ${HOST}
