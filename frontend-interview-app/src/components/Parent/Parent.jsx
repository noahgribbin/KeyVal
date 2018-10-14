import React from 'react';
import KeyVal from '../KeyVal';

class Parent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 1,
      pairs:[{'key': '', 'value': '', 'id': 1}]
    }
  };
    onSubmit =  () => {
      let returnObj = {}
      for (var i = 0; i < this.state.pairs.length; i++) {
        returnObj[this.state.pairs[i]['key']] = this.state.pairs[i]['value']
      }
      console.log(JSON.stringify(returnObj));
    };

    onChange = (e, id) => {
      let key = e.target.getAttribute('name');
      let value = e.target.value;
      let map = Object.assign({}, this.state.map)
      let filtered = this.state.pairs.map((pair) => {
       if(pair.id === id) {
          pair[key] = value;
        }
        return pair;
      })
      this.setState({
        pairs: filtered
      })
    }

    onClickAdd = () => {
      let newCounter = this.state.counter + 1
      let newPair = {'key': '', 'value': '', 'id': newCounter}
      this.setState({
        pairs: [...this.state.pairs, newPair],
        counter: newCounter
      })
    }

    onClickRemove = (e, id) => {
      e.preventDefault()
      let filtered = this.state.pairs.filter(pair => pair['id'] !== id)
      this.setState({pairs: filtered});
    }

    render () {
      return(
        <React.Fragment>
          <header>This is the parent component</header>
          <span>This is my header</span>
          <button onClick={this.onClickAdd}> + </button>
          <section>
            {this.state.pairs.map((pair, i) => {
                return <KeyVal id={pair.id} data={pair} onChange={this.onChange} onSubmit={this.onClickRemove} key={i}/>
            })}
          </section>
          <button onClick={this.onSubmit}> Submit </button>
        </React.Fragment>
      )
    }
};



export default Parent;
