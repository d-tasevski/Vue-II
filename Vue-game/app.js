new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		enemyHealth: 100,
		gameIsRunning: false,
		turns: [],
	},
	methods: {
		startGame() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.enemyHealth = 100;
		},
		attack() {
			const damage = this.calculateDmg(3, 10);
			this.enemyHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: `Player hits for ${damage} damage`,
			});
			if (this.checkWin()) return;

			this.enemyAttack();
		},
		heal() {
			this.playerHealth > 90 ? (this.playerHealth = 100) : (this.playerHealth += 10);
			this.turns.unshift({
				isPlayer: true,
				text: `Player heals for 10 hit points`,
			});
			this.enemyAttack();
		},
		specAttack() {
			const dmg = this.calculateDmg(10, 20);
			this.enemyHealth -= dmg;
			this.turns.unshift({
				isPlayer: true,
				text: `Player strikes in anger for ${dmg} damage`,
			});
			if (this.checkWin()) return;

			this.enemyAttack();
		},
		giveUp() {
			this.gameIsRunning = false;
			this.turns = [];
		},
		calculateDmg(min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		enemyAttack() {
			const damage = this.calculateDmg(5, 12);
			this.playerHealth -= damage;
			this.turns.unshift({
				isPlayer: false,
				text: `Enemy hits for ${damage} damage`,
			});
			this.checkWin();
		},
		checkWin() {
			if (this.enemyHealth <= 0) {
				if (confirm('You won! New Game?')) {
					this.startGame();
					this.turns = [];
				} else {
					this.gameIsRunning = false;
					this.turns = [];
				}
				return true;
			} else if (this.playerHealth <= 0) {
				if (confirm('You lost! :( New Game?')) {
					this.startGame();
					this.turns = [];
				} else {
					this.gameIsRunning = false;
					this.turns = [];
				}
			} else {
				return false;
			}
		},
	},
});
