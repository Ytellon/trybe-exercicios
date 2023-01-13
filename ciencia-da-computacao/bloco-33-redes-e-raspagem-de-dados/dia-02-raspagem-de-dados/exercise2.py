import requests

response = requests.get("https://api.github.com/users").json()
for user in response:
    print(user["login"], user['url'])
