const Router = require("koa-router");
const {createNewUser,getAll,loginuser,updateUser,deleteUser,getUserByID} = require("../api/user.api");

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


router.put("/update-user/:id",async (ctx)=>{
    const id = ctx.params.id;
    const data = ctx.request.body;

    var user = await updateUser(id,data);

    ctx.response.status = 200;
    ctx.body = user;

})

router.delete("/delete-user/:id",async (ctx)=>{
    const id = ctx.params.id;

    var data = await deleteUser(id);

    ctx.response.status = 200;
    ctx.body = data;
})

router.get("/get-by-id/:id",async (ctx)=>{
    const id = ctx.params.id;

    var data = await getUserByID(id);

    ctx.response.status = 200;
    ctx.body = data
})

module.exports = router;