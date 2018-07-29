#!/bin/bash
if [ $1 = 'manage' ]; then
    cd "$(dirname $0)"
    # wait for db to start
    ./wait-for-it.sh db:5432

    # run manage command
    cd /opt/app/src
    python manage.py ${@:2}
else
    eval "${@}"
fi
