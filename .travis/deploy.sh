#!/usr/bin/env bash
set -e

if [[ $TRAVIS_PULL_REQUEST != "false" ]]; then
  echo "not publishing because this is a pull request."
  exit 0
fi

if [[ $TRAVIS_BRANCH != "master" ]]; then
  echo "not publishing because this is not the master branch."
  exit 0
fi

eval "$(ssh-agent -s)"

openssl aes-256-cbc -K $encrypted_56e43b2f3fa7_key -iv $encrypted_56e43b2f3fa7_iv -in .travis/deploy_key.enc -out .travis/deploy_key -d
chmod 600 .travis/deploy_key
ssh-add .travis/deploy_key

npm run build
cd build
git init
git config user.name "Travis"
git config user.email "noreply@travis-ci.org"
git add .
git commit -m "Deploy to GitHub Pages"
git push --force --quiet git@github.com:kamalaknn/chatly.git master:gh-pages > /dev/null 2>&1
