#!/bin/sh
PORT="${PORT:-8000}"
HOST="${HOST:-localhost}"
export CONTENTFUL_SPACE_ID=ojxc8xtj0owo
export CONTENTFUL_ACCESS_TOKEN=yLFux70Qr28JixCB_sorK4k_61MHqMxBZTlO528ORSA
export GREENHOUSE_API_TOKEN=1a99973024ba7eae9521ed1f45a85b08-101
export SEGMENT_DESTINATIONS="Google Analytics,HubSpot,Hotjar"
export ENABLE_GATSBY_REFRESH_ENDPOINT=true
./getTranslations.sh
gatsby develop --port ${PORT} --host ${HOST}
