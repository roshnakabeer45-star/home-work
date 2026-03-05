import React, { useState } from "react";

function StudentCrud() {

const [students, setStudents] = useState([]);

const [name, setName] = useState("");
const [roll, setRoll] = useState("");
const [studentClass, setStudentClass] = useState("");

const [editingId, setEditingId] = useState(null);

const [editedName, setEditedName] = useState("");
const [editedRoll, setEditedRoll] = useState("");
const [editedClass, setEditedClass] = useState("");

const [searchTerm, setSearchTerm] = useState("");



const handleSubmit = (e) => {
e.preventDefault();

if(name.trim()==="" || roll.trim()==="" || studentClass.trim()===""){
alert("All fields are required");
return;
}

const rollExists = students.some((s)=> s.roll === roll);

if(rollExists){
alert("Roll number must be unique");
return;
}

const newStudent = {
id: students.length + 1,
name: name,
roll: roll,
class: studentClass
};

setStudents([...students,newStudent]);

setName("");
setRoll("");
setStudentClass("");

};



const handleDelete = (id) => {
setStudents(students.filter((s)=> s.id !== id));
};



const handleEdit = (student) => {
setEditingId(student.id);
setEditedName(student.name);
setEditedRoll(student.roll);
setEditedClass(student.class);
};



const handleSave = () => {

if(editedName.trim()==="" || editedRoll.trim()==="" || editedClass.trim()===""){
alert("All fields required");
return;
}

const rollExists = students.some(
(s)=> s.roll === editedRoll && s.id !== editingId
);

if(rollExists){
alert("Roll number must be unique");
return;
}

const updatedStudents = students.map((student)=>{

if(student.id === editingId){
return{
...student,
name: editedName,
roll: editedRoll,
class: editedClass
};
}

return student;

});

setStudents(updatedStudents);
setEditingId(null);

};



const handleCancel = () =>{
setEditingId(null);
};



const filteredStudents = students.filter((student)=>
student.name.toLowerCase().includes(searchTerm.toLowerCase())
);



return (

<div className="container mt-4">

<h2>Student List Management</h2>


<form onSubmit={handleSubmit} className="mb-3">

<div className="form-row">

<div className="col">
<input
type="text"
className="form-control"
placeholder="Student Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>
</div>

<div className="col">
<input
type="text"
className="form-control"
placeholder="Roll Number"
value={roll}
onChange={(e)=>setRoll(e.target.value)}
/>
</div>

<div className="col">
<input
type="text"
className="form-control"
placeholder="Class"
value={studentClass}
onChange={(e)=>setStudentClass(e.target.value)}
/>
</div>

<div className="col">
<button className="btn btn-primary">Add Student</button>
</div>

</div>

</form>


<input
type="text"
className="form-control mb-3"
placeholder="Search student name..."
value={searchTerm}
onChange={(e)=>setSearchTerm(e.target.value)}
/>



<table className="table table-bordered table-hover">

<thead className="thead-dark">
<tr>
<th>ID</th>
<th>Name</th>
<th>Roll</th>
<th>Class</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{filteredStudents.length === 0 ? (

<tr>
<td colSpan="5" className="text-center">No students found</td>
</tr>

) : (

filteredStudents.map((student)=>(
<tr key={student.id}>

<td>{student.id}</td>

<td>
{editingId === student.id ? (
<input
className="form-control"
value={editedName}
onChange={(e)=>setEditedName(e.target.value)}
/>
) : (
student.name
)}
</td>


<td>
{editingId === student.id ? (
<input
className="form-control"
value={editedRoll}
onChange={(e)=>setEditedRoll(e.target.value)}
/>
) : (
student.roll
)}
</td>


<td>
{editingId === student.id ? (
<input
className="form-control"
value={editedClass}
onChange={(e)=>setEditedClass(e.target.value)}
/>
) : (
student.class
)}
</td>


<td>

{editingId === student.id ? (

<>
<button
className="btn btn-success btn-sm mr-2"
onClick={handleSave}
>
Save
</button>

<button
className="btn btn-secondary btn-sm"
onClick={handleCancel}
>
Cancel
</button>
</>

) : (

<>
<button
className="btn btn-warning btn-sm mr-2"
onClick={()=>handleEdit(student)}
>
Edit
</button>

<button
className="btn btn-danger btn-sm"
onClick={()=>handleDelete(student.id)}
>
Delete
</button>
</>

)}

</td>

</tr>
))

)}

</tbody>

</table>

</div>

);

}

export default StudentCrud;