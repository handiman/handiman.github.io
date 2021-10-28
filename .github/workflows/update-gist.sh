#!/bin/bash

auth_token=$1
gist_id=$2
description='CI'
filename='resume.json' 

curl --output-file $filename https://www.henrikbecker.net/assets/henrik-becker.json

content=$(<$filename)
payload='{"description":"$description","files":{"$filename":{"filename":"$filename","content":"$content"}}}'

curl https://api.github.com/gists/$gist_id -X PATCH -H "Accept: application/vnd.github.v3+json" -H "Authorization: Bearer $auth_token" -d $payload

