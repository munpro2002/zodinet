#include <iostream>
using namespace std;

#define SIZE 20

class Stack
{
private:
    int *arr;
    int top;
    int capacity;

public:
    // constructor
    Stack(int size = SIZE)
    {
        capacity = size;
        top = -1;
        arr = new int[size];
    };
    // destructor
    ~Stack()
    {
        delete[] arr;
    };
    void find(int value)
    {
        for (int i = 0; i <= top; i++)
        {
            if (arr[i] == value)
            {
                // return index of the value
                cout << "The index of value: " << value << " is " << i << endl;
                return;
            }
        }
        cout << "There is no value: " << value << " in the stack" << endl;
    }
    void push(int value)
    {
        if (isFull())
        {
            cout << "The stack is currently full, cannot add more value" << endl;
        }
        else
        {
            arr[++top] = value;
            cout << "successfully add " << value << " to the stack" << endl;
        }
    }
    void pop()
    {
        if (isEmpty())
        {
            cout << "The stack is now empty, cannot remove an element" << endl;
        }
        else
        {
            cout << "Successfully remove " << arr[top--] << " from the stack" << endl;
        }
    }
    int size()
    {
        return top + 1;
    }
    void printStack()
    {
        cout << "Print all value of the stack:" << endl;
        for (int i = 0; i <= top; i++)
        {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
    bool isFull()
    {
        return top == capacity - 1;
    }
    bool isEmpty()
    {
        return top == -1;
    }
};

int main()
{
    Stack st(10);
    st.pop();
    st.push(2);
    st.push(1);
    st.printStack();
    st.find(1);
    st.find(3);
    st.pop();
    st.printStack();
    cout << "Size of the stack: " << st.size() << endl;

    return 0;
}