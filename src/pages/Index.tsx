import { CourseHero } from "@/components/CourseHero";
import { CourseOverview } from "@/components/CourseOverview";
import { CourseCurriculum } from "@/components/CourseCurriculum";
import { CourseEnrollment } from "@/components/CourseEnrollment";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CourseHero />
      <CourseOverview />
      <CourseCurriculum />
      <CourseEnrollment />
    </div>
  );
};

export default Index;
