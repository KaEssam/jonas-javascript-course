## Tasks:

1. Create an arrow function `calcAverage` to calculate the average of 3 scores.
2. Use the function to calculate the average for both teams.
3. Create a function `checkWinner` that takes the average score of each team as parameters (`avgDolphins` and `avgKoalas`), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Use the `checkWinner` function to determine the winner for both Data 1 and Data 2.
5. Ignore draws this time.

### Test Data:
- Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49.
- Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27.

### Hints:
- To calculate the average of 3 values, add them all together and divide by 3.
- To check if number A is at least double number B, check for `A >= 2 * B`. Apply this to the team's average scores.
