import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
 const inquirer = require('inquirer');
 
async function bootstrap() {
 console.log('1. Add product\n 2.Show list');
 

const questions = [
  {
    type: 'list',
    name: 'name',
    message: "Enter product type",
    choices: ['Add product', 'Show list'],
  },
];

inquirer.prompt(questions)
.then(answers => {
 
});
}
bootstrap();
