using System;
using System.Threading;


namespace Test2
{
    public class Program
    {
        static void Main(string[] args)
        {
            int x = 56;

            static void TestFunction()
            {
                static bool SecondTestFunction(int x)
                {
                    return x < 100;
                }
            }

            
            bool b = SecondTestFunction(50);
            TestFunction();

            Console.WriteLine(x);
            Console.WriteLine(b);
        }
    }
}
