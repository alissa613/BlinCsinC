set pic=%1
call "C:\Program Files\PuTTY\plink.exe" pi@192.168.1.15 -pw BlinCsinC123 -no-antispoof "python3 -c 'import image_display_test; image_display_test.display_image(""%pic%"")'; exit"