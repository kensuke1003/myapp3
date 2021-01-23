import React from 'react';
import Button from '../Button/Button';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendBodyToParent = this.sendBodyToParent.bind(this);
    }
    handleChange(event) {
        const field = event.target.name;
        this.setState({
            [field]: event.target.value　　　　　　　　　　　　　　//変数名をプロパティに使いたい場合は[]で使う　　　　入力された文字がbodyに入って更新される
        });
    }
    sendBodyToParent() {                                                   //Form.js内でボタンを読み込む関数
        const body = this.state.body.trim();   //前後の空白をなくす
        if (!body) {                                                //(!body)→無駄な空白を削除した後でも無駄な文字列が含まれていれば
            alert('何も入力されていません');
            return;
        }
        if (typeof this.props.onSubmit === 'function') {　　　　　　　　　　　//トリミングして無駄なものをとり除いたbodyを引数に使用
            this.props.onSubmit(body);
        }
        this.setState({　　　　　　　　　　　　　　　　　　　　　　　　　　　　//追加後は新しい空のフォームを作成
            body: ''
        });
    }
    render() {
        return (                                      //event.targetがdivの中身になる
            <div>
                <div className="Form-textarea">
                    <textarea
                        name="body"
                        cols="30"
                        rows="5"
                        value={this.state.body}
                        onChange={this.handleChange}></textarea>
                </div>
                <Button onClickHandler={this.sendBodyToParent}>コメントする</Button>
            </div>)
    }
}


export default Form;

/*
onChangeが発生した際にhandleChangeメソッドが呼ばれる。
handleChnageメソッドで呼ばれる為、引数は(event)になる。
valueに{this.state.body}があり、上記のthis.stateのbody ''が入っている
値がsetStateで更新される度に上記のbodyの空文字にセットされたらvalueつまり、this.state.bodyも切り替わる仕様になって居る

*/
