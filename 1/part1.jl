input = [parse(Int, ss) for ss in readlines("input.txt")]

size = length(input)

for i in 1:size
  for j in (i + 1):size
    if input[i] + input[j] == 2020
      println("$(input[i]) * $(input[j]) = $(input[i] * input[j])")
    end
  end
end
