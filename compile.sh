build=./docs
rm -r ${build}
mkdir ${build}
index=${build}/index.html
compiledjs=${build}/compiled.js

cp -r src/Assets ${build}/Assets/

cp src/html/skeletonProd.html ${index}
TimeNano=$(date +%s%N)
rm ./src/html/scripts.html
echo >> ./src/html/scripts.html

echo "<script src=./compiled.js></script>" >> ./src/html/scripts.html

echo >> ${compiledjs}
for f in $(find src/js -name '*.js');
do
  cat $f >> ${compiledjs}
  echo -e "\n" >> ${compiledjs}
done

title=$(cat src/html/title.txt)

sed -i -e '/$head/r src/html/head.html' ${index}
sed -i -e '/$body/r src/html/body.html' ${index}
sed -i -e '/$scripts/r src/html/scripts.html' ${index}
sed -i -e "s/\$name/$title/g" ${index}

rm ${index}-e

rm ${title}.zip
zip -r ${title}.zip ${build}