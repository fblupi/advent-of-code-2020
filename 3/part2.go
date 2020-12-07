package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

func getTrees(input []string, movementRight int, movementDown int) int {
	const Tree = '#'

	rows := len(input)
	columns := len(input[0])
	count := 0
	j := 0
	for i := movementDown; i < rows; i += movementDown {
		j = (j + movementRight) % columns
		if input[i][j] == Tree {
			count++
		}
	}

	return count
}

func main() {
	bytes, err := ioutil.ReadFile("input.txt")

	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	input := strings.Split(string(bytes), "\n")

	fmt.Println(getTrees(input, 1, 1) * getTrees(input, 3, 1) * getTrees(input, 5, 1) * getTrees(input, 7, 1) * getTrees(input, 1, 2))
}
