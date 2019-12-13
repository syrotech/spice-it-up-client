curl "https://young-beach-16870.herokuapp.com/spices/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "spice": {
      "name": "'"${NAME}"'",
      "origin": "'"${ORIGIN}"'",
      "culinary_use": "'"${CULINARY_USE}"'",
      "weight": "'"${WEIGHT}"'",
      "price": "'"${PRICE}"'",
      "user_id": "'"${USER_ID}"'"
    }
  }'
