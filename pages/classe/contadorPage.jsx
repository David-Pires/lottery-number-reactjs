import { Component } from "react";
import Contador from "../../componentes/Contador";

export default class ContadorPage extends Component {
  render() {
    return (
      <>
        <div>
          <Contador valorInicial={100} />
          <Contador />
        </div>
      </>
    );
  }
}
