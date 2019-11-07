#!/bin/sh

curl https://localise.biz/api/export/locale/de.po?key=jnXvFinOCKAyCWlV7BradDB0Vh9RSbjc > src/locale/de/messages.po &&
curl https://localise.biz/api/export/locale/fr.po?key=jnXvFinOCKAyCWlV7BradDB0Vh9RSbjc > src/locale/fr/messages.po &&
lingui compile &&
gatsby build
