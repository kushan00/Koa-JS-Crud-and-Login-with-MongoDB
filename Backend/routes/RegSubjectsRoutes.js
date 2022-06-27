const Router = require("koa-router");

const {createRegSub,getAllRegs} = require("../dal/SubjectReg.dal");
const {getFullDetails} =  require("../api/RegSubject.api");

const RegRouter = new Router({
    prefix:"/reg"
})

    RegRouter.post("/reg-sub",async (ctx)=>{
        const body = ctx.request.body;
        let data = await createRegSub(body);
        ctx.response.status = 200;
        ctx.body = data;
    })

    RegRouter.get("/get-regs",async (ctx)=>{
        let data = await getFullDetails();
        ctx.response.status = 200;
        ctx.body = data;
    })

module.exports = RegRouter;
