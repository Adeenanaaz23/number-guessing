
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(0));

    int number = rand() % 100 + 1;
    int guess;

    printf("Number Guessing Game\n");

    while (1) {
        printf("Enter guess: ");
        scanf("%d", &guess);

        if (guess == number) {
            printf("Correct!\n");
            break;
        } else if (guess > number) {
            printf("Too High\n");
        } else {
            printf("Too Low\n");
        }
    }

    return 0;
}