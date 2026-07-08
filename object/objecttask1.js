student = {
  name: "Eswar_Champati",
  highest_qualification: "Btech_second_year",
  data_of_birth: 2004,
  cgpa: 8.63,
  semester_subject: {
    computer_organization: "achuth sarkar",
    daa: "deepak gupta",
    theary_of_computation: "rajat gaswani",
    system_software_administration: "SKC",
  },
  rollno: "CS21Bo48",
  collage_name: "national_istitute_of_technology",
};
console.log(student);
console.log(student.semester_subject.computer_organization);
console.log(student["semester_subject"]["daa"]);
