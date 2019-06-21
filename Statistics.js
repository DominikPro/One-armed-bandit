class Statistics {

    constructor() {
        this.gameResult = [];
    }

    addGameToStatistics(win, bid) {
        let gameResult = {
            win: win,
            bid: bid
        }
        console.log(gameResult);
        this.gameResult.push(gameResult);
    }

    showGameStatistics() {
        let games = this.gameResult.length;
        let wins = this.gameResult.filter(result => result.win).length;
        let losess = this.gameResult.filter(result => !result.win).length;
        console.log(games, wins, losess);
        return [games, wins, losess];
    }

}

const stats = new Statistics();