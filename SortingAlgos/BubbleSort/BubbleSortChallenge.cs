using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Result
{

    /*
     * Complete the 'countSwaps' function below.
     *
     * The function accepts INTEGER_ARRAY a as parameter.
     */

    public static void countSwaps(List<int> a, int? numberOfSwaps)
    {
        bool isSorted = true;
        for(int i=0; i < a.Count; i++)
        {
            if(i+1 < a.Count)
            {
                if(a[i+1] < a[i])
                {
                    int temp = a[i];
                    a[i] = a[i+1];
                    a[i+1] = temp;
                    numberOfSwaps++;
                    isSorted = false;
                    break;
                }
            }
        }
        
        if(!isSorted)
        countSwaps(a, numberOfSwaps);
        else {
            Console.WriteLine("Array is sorted in {0} swaps.", numberOfSwaps);
            Console.WriteLine("First Element: {0}", a[0]);
            Console.WriteLine("Last Element: {0}", a[a.Count-1]);
        }
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        int n = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> a = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(aTemp => Convert.ToInt32(aTemp)).ToList();

        Result.countSwaps(a, 0);
    }
}
