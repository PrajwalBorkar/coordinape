#!/bin/bash
<<<<<<< HEAD
set -e

git submodule update --init --recursive
yarn hardhat:install --frozen-lockfile
yarn hardhat:compile
yarn hardhat:build

cd hardhat
yarn link
cd ..
yarn link @coordinape/hardhat

=======
echo "noop -- waiting for merge"
>>>>>>> origin/master
