import math

def pos(input: str, min: int, max: int, lower_val: str) -> int:
  if len(input) == 1:
    return min if input == lower_val else max
  else:
    if input[:1] == lower_val:
      return pos(input[1:], min, math.floor((min + max) / 2), lower_val)
    else:
      return pos(input[1:], math.ceil((min + max) / 2), max, lower_val)

def row(input: str) -> int:
  return pos(input[:-3], 0, 127, 'F')

def col(input: str) -> int:
  return pos(input[-3:], 0, 7, 'L')

def seat_id_by_row_and_col(row: int, col: int) -> int:
  return row * 8 + col

def seat_id(input: str) -> int:
  return seat_id_by_row_and_col(row(input), col(input))

def seats() -> list:
  with open('input.txt') as f:
    return [seat_id(line.rstrip()) for line in f.readlines()]

def get_missing_seat(ids: list) -> int:
  for i in range(min(ids), max(ids)):
    if i not in ids and i-1 in ids and i+1 in ids:
      return i
  return -1

print(get_missing_seat(seats()))
