const Router = require("koa-router");
const koaBody = require("koa-body");
const {createNewUser,getAll,loginuser} = require("../api/user.api");

//prefix
const router = new Router({
    prefix:"/user"
})


//create user
router.post("/create" , async (ctx) => {

    let data = ctx.request.body;
    var user = await createNewUser(data);

    ctx.response.status = 200;
    ctx.body = user

})

router.get("/getall", async (ctx) => {
    ctx.body = await getAll();
})

router.post("/login",async (ctx) => {

    let data = ctx.request.body;
    let logged = await loginuser(data);


    ctx.response.status = 200;
    ctx.body = logged;


})

module.exports = router;