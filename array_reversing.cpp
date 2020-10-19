#include<iostream>
using namespace std;

void swap (int *a, int *b) {
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}

void reverseArray (int A[], int length) {
    length--;
    int i;
    for ( i = 0 ; i <= length/2; i++ ) {
        swap(&A[i], &A[length-i]);
    }
}

int main () {
    int A[7] = {1, 2, 3, 4, 5, 6, 7};
    reverseArray(A, 7);
    for (int i = 0 ; i < 7; i++ ) {
        cout<<A[i]<<"\t";
    }
    return 0;
}