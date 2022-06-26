const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const cors = require("@koa/cors");


const PORT = 5000;

const app = new Koa();


//import routes
const UserRoutes = require('./Routes/userRoutes');
const SubjectRoutes = require("./routes/subjectRoutes");
const { allowedMethods } = require("./routes/subjectRoutes");

//middlewares
app.use(cors({
    origin:"http://localhost:1234",
}
));
app.use(bodyparser());



//use routes
app.use(UserRoutes.routes());
app.use(UserRoutes.allowedMethods());

app.use(SubjectRoutes.routes());
app.use(SubjectRoutes.allowedMethods());

app.use(ctx=>{
    ctx.body = "Koa server is running";
});

app.listen(PORT);

console.log(`Application is up and running on port ${PORT}`);

