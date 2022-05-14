class Menu {
    create(data) {
        let score = -1
        if(data.score >= 0){ score = data.score }

        this.add.image(250, 170, 'background')
        
        let nameLabel = this.add.text(250, -50, 'Super Coin Box', 
        { font: '70px Geo', fill: '#fff' })
        nameLabel.setOrigin(0.5, 0.5)
        this.tweens.add({
            targets: nameLabel,
            y: 80,
            duration: 1000,
            ease: 'bounce.out'
        })

        if(localStorage.getItem('bestScore') === null) {
            localStorage.setItem('bestScore', 0)
        }
        if(score > localStorage.getItem('bestScore')) {
            localStorage.setItem('bestScore', score)
        }

        if(score == -1) {
            let scoreText = `Welcome!`
            let scoreLabel = this.add.text(250, 170, scoreText, 
            { font: '25px Arial', fill: '#fff' })
            scoreLabel.setOrigin(0.5, 0.5)
        }
        else {
            let scoreText = `Score: ${score} \nBest Score: ${localStorage.getItem('bestScore')}`
            let scoreLabel = this.add.text(250, 170, scoreText, 
            { font: '25px Arial', fill: '#fff', align: 'center' })
            scoreLabel.setOrigin(0.5, 0.5)
        }
        
        let startText = 'Press the up arrow key to start'
        let startLabel = this.add.text(250, 250, startText, 
        { font: '25px Arial', fill: '#fff' })
        startLabel.setOrigin(0.5, 0.5)
        this.tweens.add({
            targets: startLabel,
            angle: { from: -2, to: 2},
            duration: 1000,
            yoyo: true,
            repeat: -1
        })

        this.upKey = this.input.keyboard.addKey('up')
    }

    update() {
        if(this.upKey.isDown) {
            this.scene.start('play')
        }
    }
}