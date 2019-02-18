#!/bin/sh
######################################################################
# Filename:
#   publish.sh
# Author:
#   Paul Kim 
# Create Date:
#   02/17/2019
# Description:
#   Production shell script for publishing the package to npm.
######################################################################

# Refuse to proceed if a command fails
set -e
# Authenticate npm token
echo "//registry.npmjs.org/:_authToken=$CI_NPM_TOKEN" > .npmrc
# # Publish React-FX to npm
npm publish dist
