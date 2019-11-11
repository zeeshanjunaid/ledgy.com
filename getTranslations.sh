#!/bin/sh

getPo () {
  LANG=$1
  curl https://localise.biz/api/export/locale/${LANG}.po?key=jnXvFinOCKAyCWlV7BradDB0Vh9RSbjc > src/locale/${LANG}/messages.po
}

getPo en &&
getPo de &&
getPo fr &&
lingui compile
