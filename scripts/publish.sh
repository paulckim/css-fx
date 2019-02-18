#!/bin/sh
######################################################################
# Filename:
#   package.sh
# Author:
#   Paul Kim 
# Create Date:
#   02/17/2019
# Description:
#   Shell script for packaging the React-FX source-code into a /dist 
#   directory.
######################################################################

# Refuse to proceed if a command fails
set -e
# Authenticate npm token
cd dist && echo "//registry.npmjs.org/:_authToken=$CI_NPM_TOKEN" > .npmrc
# Publish React-FX to npm
npm publish
