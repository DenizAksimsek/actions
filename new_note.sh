
if [ ! -d www ]
then
  git clone $ACTIONS_REPO_NAME
fi

cd www
notes/new.sh "$@"

