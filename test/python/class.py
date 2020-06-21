# EC Test file
# Python 3.7 Class

class Test:
    # Constructor
    def __init__(self):
        # Class variable
        self.test = "Hello, "
        # Function return
        return

    def class_function(self, param1):
        """
        Example class function documentation
        comment
        """

        return f"{self.test} - {param1}"

# Create an object from the class
obj = Test()

response = obj.class_function("World!")

print(response) # Hello, World!