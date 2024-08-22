import numpy as np

def generate_numbers(starting_number, sequences_quantity, ratio):
  stop = starting_number + ((sequences_quantity - 1) * ratio)
  return np.linspace(start=starting_number, stop=stop, num=sequences_quantity, endpoint=True)

print(generate_numbers(1, 5, 2))
# [1. 3. 5. 7. 9.]

print(generate_numbers(1, 5, 4))
# [ 1.  5.  9. 13. 17.]

print(generate_numbers(0, 5, 10))
# [ 0. 10. 20. 30. 40.]

print(generate_numbers(-10, 5, 10))
# [-10.   0.  10.  20.  30.]

print(generate_numbers(100, 10, 25))
# [100. 125. 150. 175. 200. 225. 250. 275. 300. 325.]               
