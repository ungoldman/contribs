#!/bin/bash

./index.js > tmp.md

if [[ $(cmp --silent CONTRIBUTING.md tmp.md) ]]; then
  echo "D: <[ maledetto !! ]"
  exit 1
else
  echo "[ va bene ]> B)"
  exit 0
fi
