const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async installDependencies() {
    await this.addDevDependencies(["husky", "lint-staged"]);
  }

  scripts() {
    this.packageJson.merge(
      {
        scripts: {
          prepare: "husky install",
          "pre-comimt": "lint-staged"
        }
      },
      this.packageJson
    );
  }

  preCommit() {
    this.fs.copy(
      this.templatePath(".husky/pre-commit"),
      this.destinationPath(".husky/pre-commit")
    );
  }

  lintStaged() {
    this.fs.copy(
      this.templatePath(".lintstagedrc.json"),
      this.destinationPath(".lintstagedrc.json")
    );
  }
};
