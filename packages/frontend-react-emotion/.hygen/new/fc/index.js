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
        const { component_name } = answers
        const abs_path = `src/components/${component_name}`
        return { abs_path }
      })
  }
}