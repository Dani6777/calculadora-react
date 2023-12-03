import Display from './Display'
import PanelDeBotones from './PanelDeBotones'
import { Component } from 'react'

class App extends Component {

  state ={
    total: null,
    siguiente:null,
    operador:null
  }



  render(){
    return (
      <div>
        <Display value={this.state.siguiente || this.state.total || '0'}/>
        <PanelDeBotones/>
      </div>
    );
  }

}

export default App;
