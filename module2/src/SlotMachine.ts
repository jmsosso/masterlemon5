class SlotMachine {
  private coins = 0;

  /**
   * Play the machine.
   */
  public play() {
    this.coins++;
    const move = this.generateMove();

    if (move[0] && move[1] && move[2]) {
      console.log(`You won ${this.coins} coins!`);
      this.coins = 0;
    }
    else {
      console.log('Good luck next time...');
    }
  }

  /**
   * Generate the move for the three slots.
   */
  private generateMove(): Array<boolean> {
    const move = [];

    for (let i = 0; i < 3; i++) {
      move[i] = Math.random() < 0.5;
    }

    return move;
  }
}