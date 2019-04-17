echo 'Start build with "npm"'
set -x
npm run build
set +x

echo 'Run application as a background process.'
echo 'Process ID is '
set -x
npm start &
sleep 1
echo $! > .pidfile
set +x