#include <iostream>
using namespace std;

void bubblesort(int, int[]);
void display(int, int[]);
void insertionsort(int, int[]);
void selectionsort(int, int[]);
void swap(int *x, int *y);

void bubblesort(int n, int a[]) {

  int i, j, moves = 0;

  for (i = n - 1; i >= 1; i--) {
    int sorted = 0;
    for (j = 0; j < i; j++) {
      if (a[j] >
          a[j + 1]) { // check any value to it's right, if it's smaller. we swap
        int temp = a[j]; // swapping pa[j] and pa[j+1], use swap(a[j], a[j+1])
                         // it's easier to understand
        a[j] = a[j + 1];
        a[j + 1] = temp;
        moves++;
        sorted = 1;
      }
    }
    if (sorted == 0)
      break;
  }
  cout << "Moves: " << moves << endl;
}

void insertionsort(int n, int a[]) 
{ 
    int i, key, j, moves = 0; 
    for (i = 1; i < n; i++)
    { 
        key = a[i]; 
        j = i - 1; 
  
        // Move elements of arr[0..i-1],  
        // that are greater than key, to one 
        // position ahead of their 
        // current position
        while (j >= 0 && a[j] > key)
        { 
            a[j + 1] = a[j]; 
            j = j - 1; 
            moves++;
        } 
        a[j + 1] = key; 
    } 
  cout << "Moves: " << moves << endl;
}

void selectionsort(int n, int a[]){

  int i,j,min, moves = 0;

  for (i = 0; i < n-1; i++){
    min = i;
    for (j = i+1; j < n; j++)
      if (a[j] < a[min]){        
        min = j;
      }
      if(min!=i){
        swap(&a[min], &a[i]);
        moves++;
      }
    }
  cout << "Moves: " << moves << endl;
}

void swap(int *x, int *y){
    int temp = *x;
    *x = *y;
    *y = temp;
}

void display(int n, int pa[]) {

  int i;
  
  for (i = 0; i < n; i++) {
    cout << pa[i] << " ";
  }

  cout << endl;
}