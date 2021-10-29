#include <bits/stdc++.h>

using namespace std;

void swap(int &a, int &b)
{
	a = a + b;
	b = a - b;
	a = a - b;
}

int main()
{
	int num1, num2;
	cout << "Enter the two space seperated no. : ";
	cin >> num1 >> num2;
	swap(num1, num2);
	cout << "The no. after swaping are : " << num1 << " & " << num2 << endl;

	return 0;
}
