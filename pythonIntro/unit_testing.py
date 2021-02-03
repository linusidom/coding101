# def add(int1, int2):
#     return int1 + int2

# print(add(3,4))
# print(add(4,5))
# print(add(124235125,1241242351351))

import unittest

# class TestStringMethods(unittest.TestCase):

#     def test_upper(self):
#         self.assertEqual('foo'.upper(), 'FOO')

#     def test_isupper(self):

#         # I want this test to return TRUE
#         self.assertTrue('FOO'.isupper())

#         # I want this test to return FALSE
#         self.assertFalse('FoO'.isupper())

#     def test_split(self):
#         s = 'hello world'
#         self.assertEqual(s.split(), ['hello', 'world'])
#         # check that s.split fails when the separator is not a string
#         with self.assertRaises(TypeError):
#             s.split(2)

# if __name__ == '__main__':
#     unittest.main()



class Calculator:

    def add(self, int1, int2):
        return int1 + int2

    def sub(self, int1, int2):
        return int1 - int2

    def mult(self, int1, int2):
        return int1 * int2

    def div(self, int1, int2):
        return int1 / int2


class TestCalculator(unittest.TestCase):


    def setUp(self):
        # initializing the calculator
        self.calc = Calculator()

    # The word 'test_' is very important to run the tests
    def test_add(self):
        self.assertEqual(self.calc.add(1,2), 3)
        self.assertEqual(self.calc.add(10,20), 30)
        self.assertEqual(self.calc.add(100,200), 300)

    def test_sub(self):
        self.assertEqual(self.calc.sub(1,2), -1)
        self.assertEqual(self.calc.sub(10,20), -10)
        self.assertEqual(self.calc.sub(100,200), -100)
    
    def test_mult(self):
        self.assertEqual(self.calc.mult(1,2), 2)
        self.assertEqual(self.calc.mult(10,20), 200)
        self.assertEqual(self.calc.mult(100,200), 20000)

    def test_div(self):
        self.assertEqual(self.calc.div(1,2), 0.5)
        self.assertEqual(self.calc.div(10,2), 5)
        self.assertEqual(self.calc.div(100,200), 0.5)


if __name__ == '__main__':
    unittest.main()


























