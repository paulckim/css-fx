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
# Setup distribution directory
rm -rf dist; mkdir dist
# Copy React source code
cp package.json dist
cp yarn.lock dist
cp -r src/* dist
# Add license
cp LICENSE dist
