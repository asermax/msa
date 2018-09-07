# get version from argument
VERSION=$1
echo "Bumping to ${VERSION}"

# update docker images
sed -Ei "s/[0-9]\.[0-9]\.[0-9]/${VERSION}/" ./docker-compose.prod.yml

# update web
sed -Ei "/version/s/[0-9]\.[0-9]\.[0-9]/${VERSION}/" ./web/package.json
