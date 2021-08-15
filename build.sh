index=./src/index.html
html=./src/html
rm ${index}
cp ${html}/skeletonDev.html ${index}
TimeNano=$(date +%s%N)
rm ${html}/scripts.html
echo >> ${html}/scripts.html
# jsFiles=$(find ./js/ -name '*.js')
cd src
for f in $(find js -name '*.js');
do
  echo "<script src='./$f?$TimeNano'></script>" >> html/scripts.html
done
cd ..

sed -i -e '/$head/r src/html/head.html' ${index}
sed -i -e '/$body/r src/html/body.html' ${index}
sed -i -e '/$scripts/r src/html/scripts.html' ${index}
sed -i -e "s/\$name/$(cat src/html/title.txt)/g" ${index}

rm ${index}-e