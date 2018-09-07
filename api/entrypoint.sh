#!/bin/bash
SCRIPT_DIR="$(dirname $0)"

# wait for db to start
$SCRIPT_DIR/wait-for-it.sh db:5432

if [[ $1 == 'manage' ]]; then
    cd $SCRIPT_DIR

    # run manage command
    cd /opt/app/src
    python manage.py ${@:2}
else
    eval "${@}"
fi
