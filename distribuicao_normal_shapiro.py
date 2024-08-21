# pip install statsmodels
# pip install pandas
import pandas as pd
# pip install scipy
from scipy.stats import shapiro

LIMITE_P_VALOR = 0.05

# Criar um DataFrame com dados ficticios
data = {'values': [6.19, 7.24, 6.93, 5.09, 5.05, 4.50, 6.27, 4.34, 4.71, 3.94, 5.28, 6.26, 5.75, 3.57, 4.90, 5.36, 6.93, 4.30, 5.00, 4.74, 5.08, 5.43, 3.96, 6.98, 4.66, 3.53, 4.65, 5.35, 5.61, 3.48, 5.45, 4.11, 5.23, 4.03, 5.80, 4.24, 4.82, 5.00, 3.71, 5.80, 2.96, 5.29, 6.00, 6.80, 4.10, 4.57, 4.26, 5.41, 3.62, 7.36, 4.42, 4.18, 3.46, 3.25, 5.46, 6.42, 5.19, 4.69, 4.77, 4.47, 4.33, 4.51, 4.98, 7.07, 5.23, 5.20, 5.11, 4.05, 4.60, 4.51, 4.93, 5.38, 3.79, 4.73, 3.81, 3.15, 4.11, 3.10, 3.38, 4.83, 4.06, 3.35, 4.72, 4.21, 4.75, 5.69, 6.03, 6.41, 5.51, 5.70, 5.91, 3.85, 5.00, 5.59, 5.92, 4.45, 6.41, 4.72, 2.43, 4.55]}

df = pd.DataFrame(data)

print(df.head(5))

print(df.columns)
# Index(['values'], dtype='object')

print(df.shape)
# (100, 1)

print(df.describe())

# Vamos olhar para cada coluna a normalidade apos a reducao de dimensionalidade
for column in df.columns:
  stat, p_value = shapiro(df[column])
  print(f'Coluna: {column}, Estatistica: {stat}, Valor P: {p_value}')

  # Voce pode entao interpretar o valor p para determinar se a variavel segue uma distribuicao normal
  if p_value > LIMITE_P_VALOR:
    print(f'A coluna {column} parece seguir uma distribuicao normal.\n')
  else:
    print(f'A coluna {column} nao parece seguir uma distribuicao normal.\n')

"""
Coluna: values, Estatistica: 0.9891400933265686, Valor P: 0.5956221222877502
A coluna values parece seguir uma distribuicao normal
"""
