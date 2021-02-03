from classes_file1 import Person

steve = Person('Steve', 45, 100)
# print(steve)

# print(steve.get_age())

# print(steve.update_age(55))

# print(dir(steve))


# Inheritance or extend one Class to another

# class Employee is of type Person

class Employee(Person):
    
    def __init__(self, salary, name, age, weight):
        self.salary = salary
        # self.name = name
        # self.age = age
        # self.weight = weight

        # Invoke a super() class
        # super(Employee, self).__init__(name, age, weight)
        super().__init__(name, age, weight)

    def __str__(self):
        return f"Amanda is an Employee who makes {self.salary} per month"

    def update_salary(self, new_salary):
        self.salary = new_salary


# amanda = Employee('Amanda', 45, 50)
amanda = Employee(25000, 'Amanda', 30, 50)
# print(amanda)
# amanda.update_salary(35000)
# print(amanda)
# print(amanda.__class__)
# print(dir(amanda))
# print(amanda)
# print(Employee.__mro__)

# These are coming from the Original Class of Person
print(amanda.get_age())
print(amanda.update_age(50))
print(amanda.get_age())















