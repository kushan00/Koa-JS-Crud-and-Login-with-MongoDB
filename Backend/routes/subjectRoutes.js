const Router = require("koa-router");

//import methods
const {createNewSUb,GetAllSub,GetSubByID,UpdateSub,deleteSub} = require("../api/subject.api");


const subRouter = new Router({
    prefix:"/subject"
})


    subRouter.post("/create-subject",async (ctx)=> {
        const data = ctx.request.body;

        let result  = await createNewSUb(data);

        ctx.response.status = 200;
        ctx.body = result;

    })

    subRouter.get("/get-subjects",async (ctx)=> {
        let data = await GetAllSub();
        ctx.response.status = 200;
        ctx.body = data;
    })

    subRouter.get("/get-subject/:id",async (ctx) =>{
        const id = ctx.params.id;
        let data = await GetSubByID(id);
        ctx.response.status = 200;
        ctx.body = data;
    })

    subRouter.put("/update-sub/:id",async (ctx)=> {
        const id = ctx.params.id;
        const alldata = ctx.request.body;
        let data = await UpdateSub(id,alldata);
        ctx.response.status = 200;
        ctx.body = data;
    })

    subRouter.delete("/delete-subject/:id",async (ctx)=> {
        const id = ctx.params.id;
        let data = await deleteSub(id);
        ctx.response.status = 200;
        ctx.body = data;
    })


module.exports = subRouter;