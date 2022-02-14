const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async installDependencies() {
    await this.addDevDependencies([
      "eslint",
      "prettier",
      "@remix-run/eslint-config",
      "eslint-config-prettier",
      "eslint-plugin-prettier"
    ]);
  }

  eslint() {
    this.fs.copy(
      this.templatePath(".eslintrc.json"),
      this.destinationPath(".eslintrc.json")
    );
  }

  prettier() {
    this.fs.copy(
      this.templatePath(".prettierrc.json"),
      this.destinationPath(".prettierrc.json")
    );
  }
};
