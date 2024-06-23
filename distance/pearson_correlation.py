# pearson correlation
from scipy.stats import linregress

a = [3.0, 3.5, 1.5, 5.0, 3.0, 3.5]
b = [2.5, 3.5, 3.0, 3.5, 2.5, 3.0]

correlation = linregress(a, b)

# print(correlation)
# LinregressResult(slope=np.float64(0.196078431372549), intercept=np.float64(2.3627450980392157), rvalue=np.float64(0.49507377148833714), pvalue=np.float64(0.31806014809694755), stderr=np.float64(0.17205812524298278), intercept_stderr=np.float64(0.5866399936266369))

print(f"correlation {correlation.rvalue:.4f}")
# correlation 0.4951
