from scipy.spatial import distance
from math import sqrt, pow

a = [3.0, 3.5, 1.5, 5.0, 3.0, 3.5]
b = [2.5, 3.5, 3.0, 3.5, 2.5, 3.0]
dist = distance.euclidean(a, b)

print(f"{dist:.4f}")
# 2.2913

def euclidean(a, b):
  return sqrt(sum(abs(pow(val1 - val2, 2)) for val1, val2 in zip(a, b)))

dist = euclidean(a, b)

print(f"{dist:.4f}")
# 2.2913
