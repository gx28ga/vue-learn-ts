import { Vue, Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  private value = "";
  public render() {
    return (
      <div>
        <el-input
          type="primary"
          style={{ width: "400px" }}
          value={this.value}
          on-input={(val: string) => (this.value = val)}
        >
          <div slot="append">$</div>
        </el-input>
      </div>
    );
  }
}
