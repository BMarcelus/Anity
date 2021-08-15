for f in $(find /Users/brianmac15/Downloads -name '*.ALEVEL.js');
do
  filename=$(basename -- "$f")
  echo $f
  cp $f ./src/js/Levels/Generated/$filename
  rm $f
done

for f in $(find /Users/brianmac15/Downloads -name '*ALEVEL*');
do
  echo "removing $f"
  rm $f
done

./build.sh