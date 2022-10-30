const toCamelCase = (name) => {
  return name.charAt(0).toLowerCase() + name.slice(1);
}

const toPascalCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the name of component?'
      },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { component_name } = answers;
        const abs_path = `src/components/${component_name}`;
        const camel_case = toCamelCase(component_name);
        const pascal_case = toPascalCase(component_name);
        return { abs_path, camel_case, pascal_case };
      });
  }
};
