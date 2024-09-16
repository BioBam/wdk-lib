name=`basename $(inputs.p.path)`
ls -l $(inputs.p.path)
if test $name = $(inputs.checkname) ; then
  echo success
else
  echo expected basename to be $(inputs.checkname) but was $name
  exit 1
fi
