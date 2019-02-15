Import React, {PropTypes} from 'react';


class App extends React.Component {
    render(){
        return(
            <div>
                
                {this.props.children}

            </div>
        );
    }
}

App.props = {
    children: PropTypes.object.isRequired
}

exprt default App;