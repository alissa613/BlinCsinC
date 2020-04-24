#This is only for raspberry pi installation purposes
import subprocess
from time import sleep
from picamera import PiCamera
import os 

def display_image(pic):
    camera = PiCamera()
    path,dirs,files = next(os.walk("/home/pi/Desktop/picsTaken"))
    file_count = len(files)


    image = subprocess.Popen(["sudo", "fbi", "-a", '-T', "1", "/home/pi/Pictures/" + pic])
    
    for i in range(3):
        sleep(1)
        camera.capture('/home/pi/Desktop/picsTaken/image%s.jpg' % (i+file_count))
        
    subprocess.Popen(["sudo", "killall", "-15", "fbi"])