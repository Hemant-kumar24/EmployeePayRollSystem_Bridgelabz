const express = require('express');
const { readfile, writefile } = require('./Modules/fileHandler')

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.get("/", async (req, res) => {
    let search = req.query.search?req.query.search.toLowerCase():""
    const filedata = await readfile();
    let filterdata = filedata;
    if (search) {
        filterdata = filedata.filter(emp => emp.Name.toLowerCase().includes(search) || emp.Email.toLowerCase().includes(search) || emp.Department.toLowerCase().includes(search) || emp.ID.toLowerCase().includes(search))
    }
    
    res.render('index', {filedata:filterdata })


})
app.get("/addEmployee", (req, res) => {
    res.render('add')
})
app.post("/add", async (req, res) => {
    const { ID, Name, Email, Department, Basic_Salary } = req.body;
    const readdata = await readfile();
    readdata.push({ ID, Name, Email, Department, Basic_Salary: Number(Basic_Salary) })

    await writefile(readdata);
    res.redirect('/')
})



app.get("/delete/:id", async (req, res) => {
    const id = req.params.id;

    const filedata = await readfile();
    const updatedData = filedata.filter(emp => emp.ID !== id);

    await writefile(updatedData);

    res.redirect("/");
});
app.get("/edit/:id", async (req, res) => {
    const id = req.params.id;

    const filedata = await readfile();
    const employee = await filedata.find(emp => emp.ID == id);

    res.render("edit", { employee });

})
app.post("/edit/:id", async (req, res) => {
    const id = req.params.id;
    const { Name, Email, Department, Basic_Salary } = req.body;
    const filedata = await readfile();
    const updatedData = filedata.map(emp => {
        if (emp.ID == id) {
            emp.Name = Name;
            emp.Email = Email;
            emp.Department = Department;
            emp.Basic_Salary = Number(Basic_Salary);
            return emp;
        }
        else {
            return emp;
        }
    })
    await writefile(updatedData);
    res.redirect('/');
})

app.listen(PORT, (err) => {
    console.log(`Server is Running on ${PORT}`)
})