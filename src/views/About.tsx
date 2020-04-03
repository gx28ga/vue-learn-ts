import { Component } from "vue-property-decorator";
import Home from "./Home";

@Component
export default class About extends Home {
  render() {
    return <div>about</div>;
  }
}
