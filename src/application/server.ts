import 'dotenv/config';
import app from './app';
import connectToDatabase from '../infrastructure/models/Connection';

connectToDatabase()
  .then(() => {
    app.listen(Number(process.env.PORT) || 3001, '0.0.0.0', () => console.log(`Running server on port: ${process.env.PORT}`));
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });
