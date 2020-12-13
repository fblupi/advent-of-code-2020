using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Day9
{
    class Part1
    {
        public static void Main(string[] args)
        {
            var input = File.ReadAllLines(@"input.txt").Select(ulong.Parse).ToList();

            for (var i = 25; i < input.Count; i++)
            {
                var value = input[i];
                var list = input.Skip(i - 25).Take(25).ToList();
                var found = false;
                for (var j = 0; j < list.Count; j++)
                {
                    for (var k = j + 1; k < list.Count; k++)
                    {
                        if (list[j] + list[k] == value)
                        {
                            found = true;
                        }
                    }
                }
                if (!found)
                {
                    Console.WriteLine(value);
                    break;
                }
            }
        }
    }
}
