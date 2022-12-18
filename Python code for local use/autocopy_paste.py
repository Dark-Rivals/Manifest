import time
import sys
import os

sys.path.append(os.path.abspath("SO_sitepackages"))

import pyperclip
recent_value = " "


while True:
    tmp_value = pyperclip.paste()
    if tmp_value != recent_value:
        recent_value = tmp_value
        print("Value changed: %s" % str(recent_value)[:20])
        with open("out_clipboard.txt", "+a") as output:
            try:
                output.write("%s\n\n"%str(tmp_value))
                
            except:
                output.write("%s\n\n"%str(tmp_value.encode('UTF-8')))
    time.sleep(0.1) 