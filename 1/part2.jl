input = [parse(Int, ss) for ss in readlines("input.txt")]

size = length(input)

for i in 1:size
  for j in (i + 1):size
    for k in (j + 1):size
      if input[i] + input[j] + input[k] == 2020
        println("$(input[i]) * $(input[j]) * $(input[k]) = $(input[i] * input[j] * input[k])")
      end
    end
  end
end
