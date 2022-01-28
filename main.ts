import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    new AzureadProvider(this, "azuread", {
      tenantId: process.env.ARM_TENANT_ID,
      clientId: process.env.ARM_CLIENT_ID,
      clientSecret: process.env.ARM_CLIENT_SECRET
    });
    // define resources here
  }
}

const app = new App();
new MyStack(app, "cdktf-import-resources");
app.synth();
