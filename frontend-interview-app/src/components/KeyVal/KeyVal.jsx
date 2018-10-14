import React from 'react';
import style from './keyVal.scss'

class KeyVal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      key:'',
      value:'',
    };
  };

  render() {
    return (
      <section className={style.keyValue} id={this.props.id}>
        <form onSubmit={(e) => this.props.onSubmit(e, this.props.id)}>
          <input name='key'  value={this.props.data.key} placeholder ='key' onChange={(e) => this.props.onChange(e, this.props.id)}></input>
          <input name='value' value={this.props.data.value} placeholder='value' onChange={(e) => this.props.onChange(e, this.props.id)}></input>
          <button type='submit'> x </button>
        </form>
      </section>
    )
  }
};



export default KeyVal;
