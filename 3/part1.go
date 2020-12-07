package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

func main() {
	const Movement = 3
	const Tree = '#'

	bytes, err := ioutil.ReadFile("input.txt")

	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	input := strings.Split(string(bytes), "\n")
	rows := len(input)
	columns := len(input[0])
	count := 0
	j := 0
	for i := 1; i < rows; i++ {
		j = (j + Movement) % columns
		if input[i][j] == Tree {
			count++
		}
	}

	fmt.Println(count)
}
