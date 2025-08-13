import app from './app.js';
import { PORT } from './shared/config.js';

const port = PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
