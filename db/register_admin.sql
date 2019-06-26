INSERT INTO users(email, password)
VALUES (${email}, ${password})
returning email, ID;