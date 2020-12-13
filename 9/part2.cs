using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Day9
{
    class Part2
    {
        public static void Main(string[] args)
        {
            var input = File.ReadAllLines(@"input.txt").Select(ulong.Parse).ToList();

            ulong invalid = 0;
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
                    invalid = value;
                    break;
                }
            }

            for (var i = 0; i < input.Count; i++)
            {
                var value = input[i];
                var list = new List<ulong>();
                var found = false;
                for (var j = i + 1; j < input.Count; j++)
                {
                    value += input[j];
                    if (value == invalid)
                    {
                        found = true;
                        list = input.Skip(i).Take(j - i + 1).ToList();
                        break;
                    }
                    else if (value > invalid)
                    {
                        break;
                    }
                }
                if (found)
                {
                    Console.WriteLine(list.Min() + list.Max());
                }
            }
        }
    }
}
