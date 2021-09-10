import app from './src/app';
import './src/dataBase';

app.listen(app.get('port') , () => {console.log('listening in the port' , app.get('port'))})