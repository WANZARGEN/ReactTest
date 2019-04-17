echo 'Kill the process '
set -x
kill $(cat .pidfile)