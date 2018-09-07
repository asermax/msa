# get version from argument
VERSION=`git branch | sed -En "s/.*release\/(.*)/\1/p"`
echo $VERSION

# update docker images
sed -Ei "s/[0-9]\.[0-9]\.[0-9]/${VERSION}/" ./docker-compose.prod.yml

# update web
sed -Ei "/version/s/[0-9]\.[0-9]\.[0-9]/${VERSION}/" ./web/package.json
