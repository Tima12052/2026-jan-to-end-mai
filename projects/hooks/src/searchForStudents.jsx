// Search students

// Є список студентів і input для пошуку.
// Показувати тільки тих студентів, чиє ім’я збігається з введеним текстом.
// Використати useState.
import { useState } from "react";
import studentsData from "./Students.json";

function SearchForStudents() {
  const [query, setQuery] = useState("");

  const filteredStudents = studentsData.students.filter((student) =>
    student.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="search-students">
      <h2>Search Students</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name..."
      />
      <ul>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <li key={student.id}>
              <strong>{student.name}</strong> — {student.age} years old
              <br />
              {student.email} · {student.phone}
            </li>
          ))
        ) : (
          <li>No students found.</li>
        )}
      </ul>
    </div>
  );
}

export default SearchForStudents;
