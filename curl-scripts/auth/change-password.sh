# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

curl "https://young-beach-16870.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPASSWORD}"'",
      "new": "'"${NEWPASSWORD}"'"
    }
  }'

echo
