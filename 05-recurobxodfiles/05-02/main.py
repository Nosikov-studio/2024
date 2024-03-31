import os
pathx = 'C:\\Users\\neo\\Desktop\\2024\\05-recurobxodfiles\\05-02\\p'


def obxodFile(path, level=1):
    print('Level=', level, 'Content:', os.listdir(path))
    for i in os.listdir(path):
        if os.path.isdir(path+'\\'+i):
            print('spusk', path+'\\'+i)
            obxodFile(path+'\\'+i, level+1)
            print('vosvrat', path)


obxodFile(pathx)
