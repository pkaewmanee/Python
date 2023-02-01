#include <iostream>
#include <string>
#include <cstring>
using namespace std;
#include "sort.h"

int main(int argc, char **argv) {

  int *pa, temp, i, j, n = argc - 2;
  pa = new int[n];

  for (i = 0; i < n; i++) {
    pa[i] = atoi(*(argv + 2 + i));
  }

  if(strcasecmp("bubble",argv[1]) == 0){
    bubblesort(n, pa);
    cout << "Bubble Sort: ";
  } else if(strcasecmp("insert",argv[1]) == 0){
    insertionsort(n,pa);
    cout << "Insertion Sort: ";
  } else if(strcasecmp("select",argv[1]) == 0){
    selectionsort(n,pa);
    cout << "Selection Sort: ";
  }
  
  //display(n,pa);
  
  delete[] pa;
  return 0;
}