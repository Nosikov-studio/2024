def ftail(n, result=1):
    if n == 0:
        return result
    else:
        return ftail(n-1, result*n)


print(ftail(5))
