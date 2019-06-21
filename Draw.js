class Draw {
    constructor() {
        this.optionsCanBeDrawn = ['Red', 'green', 'blue'];
        let _Result = this.DrawResult();
        this.getDrawResult = () => _Result;

    }
    DrawResult() {
        let colors = [];
        for (let i = 0; i < this.optionsCanBeDrawn.length; i++) {
            const index = Math.floor(Math.random() * this.optionsCanBeDrawn.length)
            const color = this.optionsCanBeDrawn[index]
            console.log(color);
            colors.push(color)

        }
        return colors
    }
}

