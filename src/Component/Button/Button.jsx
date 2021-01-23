import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler() {                                      //onClickHandlerはボタンがクリックされたときの処理
        if (typeof this.props.onClickHandler === 'function') {
            this.props.onClickHandler();
        }
    }



    render() {
        return (
            <span className="Button-container"
                onClick={this.onClickHandler}>
                {this.props.children}
            </span>
        )
    }
}                                                                           //onClickはクリックが実行されたときの処理

export default Button;


//propsで渡した関数がButtonコンポーネント内で使われている