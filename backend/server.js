import express from 'express'
import cors from 'cors'
const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // replace with your frontend's origin
  credentials: true // allow cookies and auth headers if needed
}));

app.use(express.json());

// Example route
app.get('/api/data', (req, res) => {
  res.json({ message: 'CORS setup works with Axios!' });
});

app.listen(3000,()=>
{
    console.log("server runnning on port 3000");
})