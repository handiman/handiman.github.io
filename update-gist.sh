#!/bin/bash

auth_token=$1
gist_id=$2

curl --output-file ./resume.json https://www.henrikbecker.net/assets/henrik-becker.json

content=$(<./resume.json)
payload='{"description":"CI","files":{"resume.json":{"filename":"resume.json","content":"$content"}}}'

curl https://api.github.com/gists/$gist_id -X PATCH -H "Accept: application/vnd.github.v3+json" -H "Authorization: Bearer $auth_token" -d $payload