#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int number, guess, attempts = 0;

    srand(time(0));
    number = rand() % 100 + 1;

    do {
        printf("Enter guess: ");
        scanf("%d", &guess);
        attempts++;

        if (guess > number)
            printf("Too High\n");
        else if (guess < number)
            printf("Too Low\n");
        else
            printf("Correct! Attempts: %d\n", attempts);

    } while (guess != number);

    return 0;
}