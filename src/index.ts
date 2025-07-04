import { prisma } from "./db/db.js";

const createStudent = async () => {
  const student = await prisma.student.create({
    data: {
      roll: 1,
      name: "Saurav Pant",
      marks: 95,
      address: "Kathmandu",
      email: "saurav@gmail.com",
    },
  });
  console.log("Created student:", student);
};

const crud = async () => {
  try {
    const read = await prisma.student.findMany();
    console.log("All students:", read);
    const update = await prisma.student.update({
      where: { roll: 1 },
      data: { email: "sauravpant@gmail.com" },
    });
    console.log("Student data updated", update.email);
    await prisma.student.delete({
      where: { roll: 1 },
    });
    console.log("Data deleted successfully");
  } catch (error) {
    console.log("Error: ", error);
  }
};

createStudent()
  .then(() => crud())
  .catch((err) => {
    console.error("Error creating the student:", err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
