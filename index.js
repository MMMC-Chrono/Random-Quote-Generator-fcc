class TextGenerator extends React.Component {
    constructor(props) {
        super(props);

    }

    render () {
        const quotes = [
            {quote: "If your dream don't scare you, they aren't big enough.", author: "Mohamad Ali"}
        ];
        return (
            <div>
            <div id="text">
             {quotes[0].quote}
            </div>
            <div id="author">
                {quotes[0].author}
            </div>
            </div>
        )
    }
} 
ReactDOM.render(<TextGenerator/>, document.getElementById('quote-card'));