import os
import pyperclip

if os.path.exists("fileNames.txt"):
    os.remove("fileNames.txt")

filenames = [fn for fn in os.listdir('.') if fn.endswith('.png')]

for name in filenames:
    with open("fileNames.txt", "a") as f:
        f.write('"' + name[:-4] + '",\n')

with open("fileNames.txt") as f:
    file = f.read()
    print(file)
    pyperclip.copy(file)

os.remove("fileNames.txt")