class TextGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            clicked: this.state.clicked + 1
        })
    }

    render () {

        const quotes = [
            {
                quote: "If your dream don't scare you, they aren't big enough.", author: "Mohamad Ali"
            }, {
                quote: "Persistence is the most travelled path to success.", author: "Bryant H. McGill"
            }, {
                quote: "Don't worry if you're not where you want to be yet. Great things take time.", author: "Bryant H. McGill"
            }, {
                quote: "Stay away from negative people. They have a problem for every solution.", author: "Albert Einstein"
            }, {
                quote: "A ship is always safe at shore but that is not what it's built for.", author: " Albert Einstein"
            }, {
                quote: "If things are not failing, you are not innovating enough.", author: "Elon Musk"
            }, {
                quote: "Bees don't waste their time explaining to flies that honey is better than shit.", author: "Jim Carrey's tweet"
            }, {
                quote: "Win in silence and let them think you are losing.", author: "Lil Tjay"
            }, {
                quote: "Talk sense to a fool and he calls you foolish.", author: "Eutipides"
            }, {
                quote: "Live for the praise of others and you will become their prisoner.", author: "Lao Tzu"
            }, {
                quote: "Who knows doesn't say. Who speaks doesn't know.", author: "Lao Tzu"
            }, {
                quote: "Everyone must choose one of two pains: The pain of discipline or the pain of regret.", author: "Jim John"
            }
        ];

        const randomQuote = quotes[Math.floor(Math.random()*12)];
        const orderedQuote = quotes[this.state.clicked];
        
        return (
            <div>
            <div id="text">
                <p>{this.state.clicked <= 11? orderedQuote.quote : randomQuote.quote}</p>
            </div>
            <div id="author">
                <p>{this.state.clicked <= 11? orderedQuote.author : randomQuote.author}</p>
            </div>
            <button id="new-quote" class="btn btn-default" onClick={this.handleChange}>New Quote</button>
            <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" src="" class="btn btn-default">Tweet Quote</a>
            </div>
        )
    }
} 
ReactDOM.render(<TextGenerator/>, document.getElementById('quote-card'));