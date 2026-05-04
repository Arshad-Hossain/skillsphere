import CoursesClient from "@/components/CourseClient";
import SearchUI from "@/components/SearchUI";

const CoursesPage = async () => {
  const res = await fetch("https://skillsphere-omega.vercel.app/data.json");
  const courses = await res.json();
  return <CoursesClient courses={courses}></CoursesClient>;
};

export default CoursesPage;
