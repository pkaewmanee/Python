################################################
import speech_recognition as sr
from time import ctime
import time
import os
from gtts import gTTS

from google.cloud import dialogflow_v2beta1 as dialogflow

session_client = dialogflow.SessionsClient()
session = session_client.session_path('abun-wogl', 'Abun-session')
print('Session path: {}\n'.format(session))

def speak(audioString):
    print(audioString)
    tts = gTTS(text=audioString, lang='th')
    tts.save("audio.mp3")
    os.system("mpg123 -q audio.mp3")
 
def recordAudio():
# Record Audio
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Say something!")
        audio = r.listen(source)
 
    # Speech recognition using Google Speech Recognition
    data = ""
    try:
    # Uses the default API key
    # To use another API key: `r.recognize_google(audio, key="GOOGLE_SPEECH_RECOGNITION_API_KEY")`
        data = r.recognize_google(audio,language="th")

        print("You said: " + data)
    except sr.UnknownValueError:
        print("Google Speech Recognition could not understand audio")
    except sr.RequestError as e:
        print("Could not request results from Google Speech Recognition service; {0}".format(e))
    
    return data
 
def dekdoydev(data):
    
    if data != '':
        text_input  = dialogflow.types.TextInput(text=data, language_code='th')
        query_input = dialogflow.types.QueryInput(text=text_input)
     
        response = session_client.detect_intent(session=session, query_input=query_input)

        resultTxt = response.query_result.fulfillment_text
        if resultTxt != '':
            speak(resultTxt)
        else:
            speak("พูดอีกครั้งค่ะ")
            
# initialization

time.sleep(2)
speak("สวัสดีค่ะพี่ วันนี้มีอะไรให้ช่วยไหมคะ")

while 1:
    data = recordAudio()
    dekdoydev(data)

