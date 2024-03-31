import os
path = 'C:\\Users\\neo\\Desktop\\2024\\05-recurobxodfiles\\p0'


def obxodFile(path, level=1):
    print('Level=', level, 'Content:', os.listdir(path))
    for i in os.listdir(path):
        if os.path.isdir(path+'\\'+i):
            print('spusk', path+'\\'+i)
            obxodFile(path+'\\'+i, level+1)
            print('vosvrat', path)


obxodFile(path)
