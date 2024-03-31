def fi(n):
    if n in (1, 2):
        return 1
    else:
        return fi(n-1)+fi(n-2)


print(fi(7))
