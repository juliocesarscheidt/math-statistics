from scipy.spatial import distance

a = [3.0, 3.5, 1.5, 5.0, 3.0, 3.5]
b = [2.5, 3.5, 3.0, 3.5, 2.5, 3.0]
dist = distance.cityblock(a, b)

print(f"{dist:.4f}")
# 4.5000

def manhattan(a, b):
  return sum(abs(val1 - val2) for val1, val2 in zip(a, b))

dist = manhattan(a, b)

print(f"{dist:.4f}")
# 4.5000
