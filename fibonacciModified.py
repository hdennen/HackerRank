//https://www.hackerrank.com/challenges/fibonacci-modified
//python 2

arr = map(long, raw_input().split())
a = arr[0]
b = arr[1]
n = arr[2]

def fibMod(first, second, final):
    while(final>2):
        third = second*second + first
        first = second
        second = third
        final = final - 1
    print long(third)

fibMod(a,b,n)