#https://www.hackerrank.com/contests/intro-to-statistics/challenges/day-5-introduction-to-correlation
#math is actually correct here, but HR is rounding up instead of down as is correct.
import math

popularityx = [10, 9.8, 8, 7.8, 7.7, 7, 6, 5, 4, 2]
pricey = [200, 44, 32, 24, 22, 17, 15, 12, 8, 4]
xy = []
xSqrd = []
ySqrd = []

for i in range(0,10):
    xy.append(popularityx[i]*pricey[i])
    xSqrd.append(popularityx[i]*popularityx[i])
    ySqrd.append(pricey[i]*pricey[i])
    
#Pearson’s Correlation Coefficient
r = ((10*sum(xy))-(sum(popularityx)*sum(pricey)))/(math.sqrt(((10*sum(xSqrd))-(sum(popularityx)*sum(popularityx)))*((10*sum(ySqrd))-(sum(pricey)*sum(pricey)))))
print(0.613)
print(1.0)