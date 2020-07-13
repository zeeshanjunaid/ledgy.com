#!/usr/bin/env bash

npx ncu -u
rm -R -f node_modules/
rm package-lock.json
npm i